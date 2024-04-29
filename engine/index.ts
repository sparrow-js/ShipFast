import { init, plugins } from '@/engine/engine';
import registerPlugins from './universal/plugin';

const preference = new Map();
preference.set('DataSourcePane', {
  importPlugins: [],
  dataSourceTypes: [
    {
      type: 'fetch',
    },
    {
      type: 'jsonp',
    }
  ]
});

let first = true;

export async function main(pageId: string, props: any) {
//   await registerPlugins();
  if (first) {
    await registerPlugins(pageId, props);
    first = false;
  }
 
  init(document.getElementById('lce-container')!, {
    // designMode: 'live',
    // locale: 'zh-CN',
    enableCondition: true,
    enableCanvasLock: true,
    // 默认绑定变量
    supportVariableGlobally: true,
    // simulatorUrl 在当 engine-core.js 同一个父路径下时是不需要配置的！！！
    // 这里因为用的是 alifd cdn，在不同 npm 包，engine-core.js 和 react-simulator-renderer.js 是不同路径
    simulatorUrl: [
      'https://www.onesteps.shop/render/css/react-simulator-renderer.css',
      'https://www.onesteps.shop/render/js/react-simulator-renderer.js'
    ]
  }, preference);
}

// 'http://localhost:3000/render/css/react-simulator-renderer.css',
// 'http://localhost:3000/render/js/react-simulator-renderer.js'