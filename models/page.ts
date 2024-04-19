import { getDb } from "./db";
import { Page } from "@/types/page";

export async function insertPage(page: Page) {
    const db = getDb();
    const res = await db.query(
      `INSERT INTO pages 
          (user_email, llm_name, llm_params, schema_data, created_at) 
          VALUES 
          ($1, $2, $3, $4, $5) RETURNING id;
      `,
      [
        page.user_email,
        page.llm_name,
        page.llm_params,
        page.schema_data,
        page.created_at,
      ]
    );

    const { rows } = res;
    if (rows && rows[0]) {
        return rows[0];
    }

    return {
        error: 'insert fail'
    };
}

export async function getPageSchema (id: number) {
    const db = getDb();
    const res = await db.query(
        `SELECT id, schema_data FROM pages WHERE id = $1`,
        [
            id
        ]
    );

    if (res.rowCount === 0) {
        return undefined;
    }
    
    const { rows } = res;
    const row = rows[0];

    return row;
}

export async function getPublishPage (subPath: string) {
    const db = getDb();
    const res = await db.query(
        `SELECT id, publish_schema_data FROM pages WHERE sub_path = $1`,
        [
            subPath
        ]
    );

    if (res.rowCount === 0) {
        return undefined;
    }
    
    const { rows } = res;
    const row = rows[0];

    return row;
}



export async function updatePage(id: null, schema: any) {
    const db = getDb();
    const res = await db.query(
      `UPDATE pages SET schema_data=$1 WHERE order_no=$2`,
      [schema, id]
    );
    return res;
}

export async function checkExistSubPage(subPath: string) {
    const db = getDb();
    const res = await db.query(
        `SELECT id FROM pages WHERE sub_path = $1`,
        [
            subPath
        ]
    );

    if (res.rowCount === 0) {
        return false;
    }

    return true;
}

export async function publishPage(pageId: number, subPath: string) {
    const page = await getPageSchema(pageId);
    if (!page) {
        return undefined;
    }
    const { schema_data } = page;
    const db = getDb();
    const res = await db.query(
      `UPDATE pages SET publish_schema_data=$1, sub_path=$2, status=$3 WHERE id=$4`,
      [schema_data, subPath, 1, pageId]
    );
    return res;
}

export async function getUserPages(email: string) {
    const db = getDb();
    const res = await db.query(
        `SELECT id, sub_path, publish_schema_data FROM pages WHERE user_email = $1`,
        [
            email
        ]
    );

    if (res.rowCount === 0) {
        return undefined;
    }
    
    const { rows } = res;

    return rows;
}




// export async function getPages(
//     page: number,
//     limit: number
//   ): Promise<Page[] | undefined> {
//     if (page < 1) {
//       page = 1;
//     }
//     if (limit <= 0) {
//       limit = 50;
//     }
//     const offset = (page - 1) * limit;
  
//     const db = getDb();
//     const res = await db.query(
//       `select w.*, u.email as user_email, u.nickname as user_name, u.avatar_url as user_avatar from wallpapers as w left join users as u on w.user_email = u.email order by w.created_at desc limit $1 offset $2`,
//       [limit, offset]
//     );
//     if (res.rowCount === 0) {
//       return undefined;
//     }
  
//     const wallpapers = getWallpapersFromSqlResult(res);
  
//     return wallpapers;
//   }