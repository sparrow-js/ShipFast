import { createApi } from 'unsplash-js';
import {ImageResult} from '@/lib/types/image'

const unsplash = createApi({
    accessKey: 'PGeZKZAaQCsxtfea6wzpknaMXpIsKd3hShKyL8YTMVY',
    // `fetch` options to be sent with every request
    // headers: { 'X-Custom-Header': 'foo' },
});

function formatImageResult(data: any): ImageResult {
    const {total, results} = data; 
    const resut = {
        images: [],
        total,
        page: 1,
        per_page: 10
    }

    resut.images = results.map((item: any) => {
        const {id, description, urls, user} = item;
        const cur = {
            id,
            url: urls['small'],
            description: description,
            creator: {
                username: user.username,
                link: user['links']['html']
            }
        };
        return cur;
    })
    
    return resut;
}

export async function getUnsplashImage(prompt: string) {
  return new Promise<ImageResult>((resolve, reject) => {
      unsplash.search.getPhotos({
          query: prompt,
          page: 1,
          perPage: 10,
          // color: 'green',
          // orientation: 'portrait',
      }).then(result => {
          switch (result.type) {
            case 'error':

              console.log('error occurred: ', result.errors[0]);
              reject(result.errors[0]);
            case 'success':
              const photo = result.response;
              resolve(formatImageResult(photo));
          }
      });
  })

}
