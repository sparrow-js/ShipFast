import { material, project } from '@/engine/engine';
import { filterPackages } from '../plugin-inject'
import { Message, Dialog } from '@alifd/next';
import schemaQequest from './schema';
import page from '@/engine/universal/page';
import {toast} from 'sonner';
import createSerialPage, {createTrySerialPage} from '@/components/edit/createSerialPage';
import {realistic} from '@/lib/Confetti';
import Meta from '@/service/generate/meta';

export const preview = async (pageId: string) => {
  // await saveSchema(pageId);
  const pageData = page.getData();
  if (pageData && pageData.site) {
    const {site: {subdomain}} = pageData;
    if (subdomain) {
      window.open(`http://app.localhost:3000/preview/${pageId}`);
    }
  }
};

export const saveSchema = async (pageId: string, status?: number) => {
  const schema = project.exportSchema();

  const fetchEditSchema = async function () {
    try {
      const uri = "/api/update-page";
      const params: any = {
        data: {
          id: pageId,
          schema_data: schema,
        }
      };

      if (status !== null && status !== undefined) {
        params.data.status = status;
      }

      const resp = await fetch(uri, {
        method: "POST",
        body: JSON.stringify(params),
      });

      if (resp.ok) {
        const res = await resp.json();
        console.log("get page result: ", res);
        if (res.data) {
          toast.success('saved!')
          return;
        } else {
        }

      }

    } catch (e) {
      console.log("get wallpapers failed: ", e);
    }
  };
  return fetchEditSchema()
};


export const fetchGetTryPageSchema = async function (id: string, data: any, setLoading: (show: boolean) => void) {
  try {
    let uri = "/api/gen-try-page-schema";
    const {prompt, generateId} = data;
    const params = {
      id,
      domain: window.location.host,
      prompt,
      generateId
    };

    const resp = await fetch(uri, {
      method: "POST",
      body: JSON.stringify(params),
    });

    if (resp.ok) {
      const res = await resp.json();
      if (res.data) {
        const {schema_data} = res.data;
        page.setData({
          ...res.data,
          prompt
        });
        importSchema(schema_data);
        setTimeout(async () => {
          setLoading(true);
          const data = await createTrySerialPage((Meta as any)[generateId], prompt);
          setLoading(false);
          Promise.all([
            realistic(),
            realistic()
          ])
        }, 1000)
        return;
      }
    }

  } catch (e) {
    console.log("get failed: ", e);
  }
}

export const fetchGetPageSchema = async function (id: string, setLoading: (show: boolean) => void) {

  try {
    let uri = "/api/get-page-schema";
    const params = {
      id,
      domain: window.location.host,
    };

    const resp = await fetch(uri, {
      method: "POST",
      body: JSON.stringify(params),
    });

    if (resp.ok) {
      const res = await resp.json();
      if (res.data) {
        const {schema_data, status} = res.data;
        page.setData(res.data);
        importSchema(schema_data);
        setTimeout(async () => {
          if (status === 0) {
            setLoading(true);
            const data = await createSerialPage(Meta.landingPage, res.data.prompt);
            if (data) {
             const res = await saveSchema(id, 1);
            }
            setLoading(false);
            Promise.all([
              realistic(),
              realistic()
            ])
          }
        }, 1000)
        return;
      }
    }

  } catch (e) {
    console.log("get failed: ", e);
  }
};

function updateTheme (style: any) {
  const contentWindow =project.simulatorHost?.contentWindow;

  if (style.mode && contentWindow) {
    contentWindow.document.documentElement.classList.forEach((className) => {
        if (className.match(/^(light|dark).*/)) {
          contentWindow.document.documentElement.classList.remove(className)
        }
    })
    contentWindow.document.documentElement.classList.add(style.mode);
  }
  if (style.theme && contentWindow) {
    contentWindow.document.body.classList.forEach((className) => {
    if (className.match(/^theme.*/)) {
      contentWindow.document.body.classList.remove(className)
    }
    })
    contentWindow.document.body.classList.add(`theme-${style.theme}`)
  }
}

export const importSchema = async (schema: any) => {
  // project.getCurrentDocument()?.importSchema(schema.componentsTree[0]);
  // project.openDocument(schema.componentsTree[0]);
  // project.simulatorHost?.renderer?.run();
  // project.simulatorHost?.rerender();
  if (project.getCurrentDocument()) {
    const s = await getPageSchema()
    project.simulatorHost?.renderer?.run();
    resetSchema();
  } else {
    project.openDocument(schema.componentsTree[0]);
    const {style} = schema.componentsTree[0];
    const contentWindow =project.simulatorHost?.contentWindow;

    if (style.mode && contentWindow) {
      contentWindow.document.documentElement.classList.forEach((className) => {
          if (className.match(/^(light|dark).*/)) {
            contentWindow.document.documentElement.classList.remove(className)
          }
      })
      contentWindow.document.documentElement.classList.add(style.mode);
    }
    if (style.theme && contentWindow) {
      contentWindow.document.body.classList.forEach((className) => {
      if (className.match(/^theme.*/)) {
        contentWindow.document.body.classList.remove(className)
      }
      })
      contentWindow.document.body.classList.add(`theme-${style.theme}`)
    }
  }
  // project.simulatorHost?.rerender();
}

export const resetSchema = async () => {
  try {
    await new Promise<void>((resolve, reject) => {
      Dialog.confirm({
        content: '确定要重置吗？您所有的修改都将消失！',
        onOk: () => {
          resolve();
        },
        onCancel: () => {
          reject()
        },
      })
    })
  } catch(err) {
    return
  }

  let schema
  try {
    schema = schemaQequest.componentsTree[0]
  } catch(err) {
    schema = {
      componentName: 'Page',
      fileName: 'sample',
    }
  }

  window.localStorage.setItem(
    'projectSchema',
    JSON.stringify({
      componentsTree: [schema],
      componentsMap: material.componentsMap,
      version: '1.0.0',
      i18n: {},
    })
  );

  project.getCurrentDocument()?.importSchema(schema);
  project.simulatorHost?.rerender();
  Message.success('成功重置页面');
}

export const getPageSchema = async () => {
  const schema = JSON.parse(
    window.localStorage.getItem('projectSchema') || '{}'
  );

  const pageSchema = schema?.componentsTree?.[0];

  if (pageSchema) {
    return pageSchema;
  }
  return schemaQequest.componentsTree[0];
};
