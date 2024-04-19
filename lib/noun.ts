import OAuth from 'oauth';
import {ImageResult} from '@/lib/types/image'

var KEY = "6f9e9369435b458e91924671cecd2376"
var SECRET = "891a9616046f436f86c9d3ecf923ec5a"

var oauth = new OAuth.OAuth(
        'https://api.thenounproject.com',
        'https://api.thenounproject.com',
        KEY,
        SECRET,
        '1.0',
        null,
        'HMAC-SHA1'
)


function formatImageResult(data: any): ImageResult {
    const {total, icons} = JSON.parse(data);
    const resut = {
        images: [],
        total: total,
        page: 0,
        per_page: 10
    }

    resut.images = icons.map((item: any) => {
        const {attribution, creator, id, thumbnail_url} = item;
        const cur = {
            id,
            url: thumbnail_url,
            description: attribution,
            creator: {
                username: creator.name,
                link: creator.permalink
            }
        };
        return cur;
    })
    
    return resut;
}

export function getNounImage(prompt: string) {

  return new Promise<ImageResult>((resolve, reject) => {
      oauth.get(
          `https://api.thenounproject.com/v2/icon?query=${prompt}&limit=10&thumbnail_size=200`,
          // @ts-ignore
          null,
          null,
          function (e, data, res){
              if (e) {
                  reject(e);
              } {
                resolve(formatImageResult(data));
              }
          }
      )
  })

}
