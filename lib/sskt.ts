const sstk = require("shutterstock-api");
sstk.setAccessToken('v2/SkpBclliRXVoS0xUd2V3Sm4yYUNMMlpJNFlPaExRS1UvNDI2MjI1Mzg3L2N1c3RvbWVyLzQvNHFFMHFzX2VLX0lpV1lCempDX3QyLUl6eExjaWgxTWREamQ1ZV9EMGNyMS1YRTQyaGxramYtTS1Zc2xmMGxkUDNGLUE4NDZQbHZuTkcyU1VNUDExRzBRaE44NTRBWTI2OGZFb3RvdVFFQWRwQVVEdXRrQThaeVJmU2JGVmxXYlNYUl9hNDVfYnc5d2NaQnZiNEVTZXBGd3luRjNsX2cxajJQMkcxa29BQ2llbG1DWHJHZFdWS3VNUUdvWi1jS0l2ZzZGSWpoVm1OZUtLOWRpSmVqNkc0Zy8tS3hhb2lKWl9pQnVVcV9MNGVxWndR');
import {ImageResult} from '@/lib/types/image'

const imagesApi = new sstk.ImagesApi();

const queryParams = {
  "query": "hiking",
  "image_type": ["photo"],
  "orientation": "vertical",
  "people_number": 3
};

function formatImageResult(data: any): ImageResult {
    const {total_count, page, per_page, data: images} = data; 
    const resut = {
        images: [],
        total: total_count,
        page: page,
        per_page: per_page
    }

    resut.images = images.map((item: any) => {
        const {description, contributor, id, assets} = item;
        const cur = {
            id,
            url: assets['preview']['url'],
            description: description,
            creator: {
                username: contributor.id,
                link: null
            }
        };
        return cur;
    })
    
    return resut;
}



export async function getSsktImage(isMock: boolean) {
    if (isMock){
        return formatImageResult({
            "total_count": 7704,
            "search_id": "37c78e3c-ae2d-4119-8758-93422f8d66f2",
            "page": 1,
            "per_page": 10,
            "spellcheck_info": {
                "spellchecked_query": null,
                "orig_query": "hiking",
                "orig_results_count": 0
            },
            "data": [
                {
                    "id": "2143210653",
                    "aspect": 0.6666,
                    "assets": {
                        "preview": {
                            "height": 450,
                            "width": 299,
                            "url": "https://image.shutterstock.com/image-photo/group-diverse-young-female-friends-450w-2143210653.jpg"
                        },
                        "small_thumb": {
                            "height": 100,
                            "width": 66,
                            "url": "https://image.shutterstock.com/image-photo/group-diverse-young-female-friends-100nw-2143210653.jpg"
                        },
                        "large_thumb": {
                            "height": 150,
                            "width": 99,
                            "url": "https://image.shutterstock.com/image-photo/group-diverse-young-female-friends-150nw-2143210653.jpg"
                        },
                        "mosaic": {
                            "height": 250,
                            "width": 166,
                            "url": "https://image.shutterstock.com/image-photo/group-diverse-young-female-friends-250nw-2143210653.jpg"
                        },
                        "preview_1000": {
                            "height": 1000,
                            "width": 666,
                            "url": "https://image.shutterstock.com/image-photo/group-diverse-young-female-friends-1000w-2143210653.jpg"
                        },
                        "preview_1500": {
                            "height": 1500,
                            "width": 999,
                            "url": "https://image.shutterstock.com/z/stock-photo-group-of-diverse-young-female-friends-relaxing-together-at-their-campsite-in-a-forest-2143210653.jpg"
                        },
                        "huge_thumb": {
                            "height": 260,
                            "width": 173,
                            "url": "https://image.shutterstock.com/image-photo/group-diverse-young-female-friends-260nw-2143210653.jpg"
                        }
                    },
                    "contributor": {
                        "id": "301539971"
                    },
                    "description": "Group of diverse young female friends relaxing together at their campsite in a forest ",
                    "image_type": "photo",
                    "has_model_release": true,
                    "media_type": "image"
                },
                {
                    "id": "1530295826",
                    "aspect": 0.7691,
                    "assets": {
                        "preview": {
                            "height": 450,
                            "width": 346,
                            "url": "https://image.shutterstock.com/image-photo/senior-pensioner-couple-nordic-walking-450w-1530295826.jpg"
                        },
                        "small_thumb": {
                            "height": 100,
                            "width": 76,
                            "url": "https://image.shutterstock.com/image-photo/senior-pensioner-couple-nordic-walking-100nw-1530295826.jpg"
                        },
                        "large_thumb": {
                            "height": 150,
                            "width": 115,
                            "url": "https://image.shutterstock.com/image-photo/senior-pensioner-couple-nordic-walking-150nw-1530295826.jpg"
                        },
                        "mosaic": {
                            "height": 250,
                            "width": 192,
                            "url": "https://image.shutterstock.com/image-photo/senior-pensioner-couple-nordic-walking-250nw-1530295826.jpg"
                        },
                        "preview_1000": {
                            "height": 1000,
                            "width": 769,
                            "url": "https://image.shutterstock.com/image-photo/senior-pensioner-couple-nordic-walking-1000w-1530295826.jpg"
                        },
                        "preview_1500": {
                            "height": 1500,
                            "width": 1153,
                            "url": "https://image.shutterstock.com/z/stock-photo-senior-pensioner-couple-with-nordic-walking-poles-hiking-in-nature-talking-1530295826.jpg"
                        },
                        "huge_thumb": {
                            "height": 260,
                            "width": 199,
                            "url": "https://image.shutterstock.com/image-photo/senior-pensioner-couple-nordic-walking-260nw-1530295826.jpg"
                        }
                    },
                    "contributor": {
                        "id": "301539971"
                    },
                    "description": "Senior pensioner couple with nordic walking poles hiking in nature, talking.",
                    "image_type": "photo",
                    "has_model_release": true,
                    "media_type": "image"
                },
                {
                    "id": "150128987",
                    "aspect": 0.7984,
                    "assets": {
                        "preview": {
                            "height": 450,
                            "width": 359,
                            "url": "https://image.shutterstock.com/image-photo/trail-through-lush-green-forest-450w-150128987.jpg"
                        },
                        "small_thumb": {
                            "height": 100,
                            "width": 79,
                            "url": "https://image.shutterstock.com/image-photo/trail-through-lush-green-forest-100nw-150128987.jpg"
                        },
                        "large_thumb": {
                            "height": 150,
                            "width": 119,
                            "url": "https://image.shutterstock.com/image-photo/trail-through-lush-green-forest-150nw-150128987.jpg"
                        },
                        "mosaic": {
                            "height": 250,
                            "width": 199,
                            "url": "https://image.shutterstock.com/image-photo/trail-through-lush-green-forest-250nw-150128987.jpg"
                        },
                        "preview_1000": {
                            "height": 1000,
                            "width": 798,
                            "url": "https://image.shutterstock.com/image-photo/trail-through-lush-green-forest-1000w-150128987.jpg"
                        },
                        "preview_1500": {
                            "height": 1500,
                            "width": 1197,
                            "url": "https://image.shutterstock.com/z/stock-photo-trail-through-lush-green-forest-in-codorus-state-park-pennsylvania-150128987.jpg"
                        },
                        "huge_thumb": {
                            "height": 260,
                            "width": 207,
                            "url": "https://image.shutterstock.com/image-photo/trail-through-lush-green-forest-260nw-150128987.jpg"
                        }
                    },
                    "contributor": {
                        "id": "162718586"
                    },
                    "description": "Trail through lush green forest in Codorus State Park, Pennsylvania.",
                    "image_type": "photo",
                    "has_model_release": false,
                    "media_type": "image"
                },
                {
                    "id": "2152231899",
                    "aspect": 0.6667,
                    "assets": {
                        "preview": {
                            "height": 450,
                            "width": 300,
                            "url": "https://image.shutterstock.com/image-photo/laughing-young-african-american-woman-450w-2152231899.jpg"
                        },
                        "small_thumb": {
                            "height": 100,
                            "width": 66,
                            "url": "https://image.shutterstock.com/image-photo/laughing-young-african-american-woman-100nw-2152231899.jpg"
                        },
                        "large_thumb": {
                            "height": 150,
                            "width": 100,
                            "url": "https://image.shutterstock.com/image-photo/laughing-young-african-american-woman-150nw-2152231899.jpg"
                        },
                        "mosaic": {
                            "height": 250,
                            "width": 166,
                            "url": "https://image.shutterstock.com/image-photo/laughing-young-african-american-woman-250nw-2152231899.jpg"
                        },
                        "preview_1000": {
                            "height": 1000,
                            "width": 666,
                            "url": "https://image.shutterstock.com/image-photo/laughing-young-african-american-woman-1000w-2152231899.jpg"
                        },
                        "preview_1500": {
                            "height": 1500,
                            "width": 1000,
                            "url": "https://image.shutterstock.com/z/stock-photo-laughing-young-african-american-woman-eating-a-meal-during-a-camping-trip-with-friends-in-a-forest-2152231899.jpg"
                        },
                        "huge_thumb": {
                            "height": 260,
                            "width": 173,
                            "url": "https://image.shutterstock.com/image-photo/laughing-young-african-american-woman-260nw-2152231899.jpg"
                        }
                    },
                    "contributor": {
                        "id": "301539971"
                    },
                    "description": "Laughing young African American woman eating a meal during a camping trip with friends in a forest",
                    "image_type": "photo",
                    "has_model_release": true,
                    "media_type": "image"
                },
                {
                    "id": "2029361552",
                    "aspect": 0.6667,
                    "assets": {
                        "preview": {
                            "height": 450,
                            "width": 300,
                            "url": "https://image.shutterstock.com/image-photo/happy-senior-couple-on-hiking-450w-2029361552.jpg"
                        },
                        "small_thumb": {
                            "height": 100,
                            "width": 66,
                            "url": "https://image.shutterstock.com/image-photo/happy-senior-couple-on-hiking-100nw-2029361552.jpg"
                        },
                        "large_thumb": {
                            "height": 150,
                            "width": 100,
                            "url": "https://image.shutterstock.com/image-photo/happy-senior-couple-on-hiking-150nw-2029361552.jpg"
                        },
                        "mosaic": {
                            "height": 250,
                            "width": 166,
                            "url": "https://image.shutterstock.com/image-photo/happy-senior-couple-on-hiking-250nw-2029361552.jpg"
                        },
                        "preview_1000": {
                            "height": 1000,
                            "width": 666,
                            "url": "https://image.shutterstock.com/image-photo/happy-senior-couple-on-hiking-1000w-2029361552.jpg"
                        },
                        "preview_1500": {
                            "height": 1500,
                            "width": 1000,
                            "url": "https://image.shutterstock.com/z/stock-photo-happy-senior-couple-on-hiking-trip-on-summer-holiday-using-map-2029361552.jpg"
                        },
                        "huge_thumb": {
                            "height": 260,
                            "width": 173,
                            "url": "https://image.shutterstock.com/image-photo/happy-senior-couple-on-hiking-260nw-2029361552.jpg"
                        }
                    },
                    "contributor": {
                        "id": "301539971"
                    },
                    "description": "Happy senior couple on hiking trip on summer holiday, using map.",
                    "image_type": "photo",
                    "has_model_release": true,
                    "media_type": "image"
                },
                {
                    "id": "1663682719",
                    "aspect": 0.6668,
                    "assets": {
                        "preview": {
                            "height": 450,
                            "width": 300,
                            "url": "https://image.shutterstock.com/image-photo/family-hiking-together-countryside-450w-1663682719.jpg"
                        },
                        "small_thumb": {
                            "height": 100,
                            "width": 66,
                            "url": "https://image.shutterstock.com/image-photo/family-hiking-together-countryside-100nw-1663682719.jpg"
                        },
                        "large_thumb": {
                            "height": 150,
                            "width": 100,
                            "url": "https://image.shutterstock.com/image-photo/family-hiking-together-countryside-150nw-1663682719.jpg"
                        },
                        "mosaic": {
                            "height": 250,
                            "width": 166,
                            "url": "https://image.shutterstock.com/image-photo/family-hiking-together-countryside-250nw-1663682719.jpg"
                        },
                        "preview_1000": {
                            "height": 1000,
                            "width": 666,
                            "url": "https://image.shutterstock.com/image-photo/family-hiking-together-countryside-1000w-1663682719.jpg"
                        },
                        "preview_1500": {
                            "height": 1500,
                            "width": 1000,
                            "url": "https://image.shutterstock.com/z/stock-photo-family-hiking-together-in-countryside-1663682719.jpg"
                        },
                        "huge_thumb": {
                            "height": 260,
                            "width": 173,
                            "url": "https://image.shutterstock.com/image-photo/family-hiking-together-countryside-260nw-1663682719.jpg"
                        }
                    },
                    "contributor": {
                        "id": "250735188"
                    },
                    "description": "Family hiking together in countryside",
                    "image_type": "photo",
                    "has_model_release": true,
                    "media_type": "image"
                },
                {
                    "id": "300554900",
                    "aspect": 0.7163,
                    "assets": {
                        "preview": {
                            "height": 450,
                            "width": 322,
                            "url": "https://image.shutterstock.com/image-photo/adventure-travel-tourism-hike-people-450w-300554900.jpg"
                        },
                        "small_thumb": {
                            "height": 100,
                            "width": 71,
                            "url": "https://image.shutterstock.com/image-photo/adventure-travel-tourism-hike-people-100nw-300554900.jpg"
                        },
                        "large_thumb": {
                            "height": 150,
                            "width": 107,
                            "url": "https://image.shutterstock.com/image-photo/adventure-travel-tourism-hike-people-150nw-300554900.jpg"
                        },
                        "mosaic": {
                            "height": 250,
                            "width": 179,
                            "url": "https://image.shutterstock.com/image-photo/adventure-travel-tourism-hike-people-250nw-300554900.jpg"
                        },
                        "preview_1000": {
                            "height": 1000,
                            "width": 716,
                            "url": "https://image.shutterstock.com/image-photo/adventure-travel-tourism-hike-people-1000w-300554900.jpg"
                        },
                        "preview_1500": {
                            "height": 1500,
                            "width": 1074,
                            "url": "https://image.shutterstock.com/z/stock-photo-adventure-travel-tourism-hike-and-people-concept-group-of-smiling-friends-with-backpacks-300554900.jpg"
                        },
                        "huge_thumb": {
                            "height": 260,
                            "width": 186,
                            "url": "https://image.shutterstock.com/image-photo/adventure-travel-tourism-hike-people-260nw-300554900.jpg"
                        }
                    },
                    "contributor": {
                        "id": "301539971"
                    },
                    "description": "adventure, travel, tourism, hike and people concept - group of smiling friends with backpacks making high five gesture over mountains background",
                    "image_type": "photo",
                    "has_model_release": true,
                    "media_type": "image"
                },
                {
                    "id": "1990795487",
                    "aspect": 0.75,
                    "assets": {
                        "preview": {
                            "height": 450,
                            "width": 337,
                            "url": "https://image.shutterstock.com/image-photo/vertical-shot-blonde-woman-hiking-450w-1990795487.jpg"
                        },
                        "small_thumb": {
                            "height": 100,
                            "width": 75,
                            "url": "https://image.shutterstock.com/image-photo/vertical-shot-blonde-woman-hiking-100nw-1990795487.jpg"
                        },
                        "large_thumb": {
                            "height": 150,
                            "width": 112,
                            "url": "https://image.shutterstock.com/image-photo/vertical-shot-blonde-woman-hiking-150nw-1990795487.jpg"
                        },
                        "mosaic": {
                            "height": 250,
                            "width": 187,
                            "url": "https://image.shutterstock.com/image-photo/vertical-shot-blonde-woman-hiking-250nw-1990795487.jpg"
                        },
                        "preview_1000": {
                            "height": 1000,
                            "width": 750,
                            "url": "https://image.shutterstock.com/image-photo/vertical-shot-blonde-woman-hiking-1000w-1990795487.jpg"
                        },
                        "preview_1500": {
                            "height": 1500,
                            "width": 1125,
                            "url": "https://image.shutterstock.com/z/stock-photo-a-vertical-shot-of-a-blonde-woman-hiking-on-a-trail-in-the-mountains-enjoying-the-beautiful-view-1990795487.jpg"
                        },
                        "huge_thumb": {
                            "height": 260,
                            "width": 195,
                            "url": "https://image.shutterstock.com/image-photo/vertical-shot-blonde-woman-hiking-260nw-1990795487.jpg"
                        }
                    },
                    "contributor": {
                        "id": "301131261"
                    },
                    "description": "A vertical shot of a blonde woman hiking on a trail in the mountains, enjoying the beautiful view",
                    "image_type": "photo",
                    "has_model_release": false,
                    "media_type": "image"
                },
                {
                    "id": "1351755344",
                    "aspect": 0.6667,
                    "assets": {
                        "preview": {
                            "height": 450,
                            "width": 300,
                            "url": "https://image.shutterstock.com/image-photo/boy-his-mother-sitting-on-450w-1351755344.jpg"
                        },
                        "small_thumb": {
                            "height": 100,
                            "width": 66,
                            "url": "https://image.shutterstock.com/image-photo/boy-his-mother-sitting-on-100nw-1351755344.jpg"
                        },
                        "large_thumb": {
                            "height": 150,
                            "width": 100,
                            "url": "https://image.shutterstock.com/image-photo/boy-his-mother-sitting-on-150nw-1351755344.jpg"
                        },
                        "mosaic": {
                            "height": 250,
                            "width": 166,
                            "url": "https://image.shutterstock.com/image-photo/boy-his-mother-sitting-on-250nw-1351755344.jpg"
                        },
                        "preview_1000": {
                            "height": 1000,
                            "width": 666,
                            "url": "https://image.shutterstock.com/image-photo/boy-his-mother-sitting-on-1000w-1351755344.jpg"
                        },
                        "preview_1500": {
                            "height": 1500,
                            "width": 1000,
                            "url": "https://image.shutterstock.com/z/stock-photo-the-boy-and-his-mother-are-sitting-on-the-top-of-the-mountain-a-woman-travels-with-a-child-baby-1351755344.jpg"
                        },
                        "huge_thumb": {
                            "height": 260,
                            "width": 173,
                            "url": "https://image.shutterstock.com/image-photo/boy-his-mother-sitting-on-260nw-1351755344.jpg"
                        }
                    },
                    "contributor": {
                        "id": "300786889"
                    },
                    "description": "The boy and his mother are sitting on the top of the mountain. A woman travels with a child. Baby kisses and hugs mom. Travel with backpacks. Hike and climb with kids. Portrait of a woman and her son.",
                    "image_type": "photo",
                    "has_model_release": true,
                    "media_type": "image"
                },
                {
                    "id": "1814524712",
                    "aspect": 0.6667,
                    "assets": {
                        "preview": {
                            "height": 450,
                            "width": 300,
                            "url": "https://image.shutterstock.com/image-photo/mountain-trip-family-mountains-sits-450w-1814524712.jpg"
                        },
                        "small_thumb": {
                            "height": 100,
                            "width": 66,
                            "url": "https://image.shutterstock.com/image-photo/mountain-trip-family-mountains-sits-100nw-1814524712.jpg"
                        },
                        "large_thumb": {
                            "height": 150,
                            "width": 100,
                            "url": "https://image.shutterstock.com/image-photo/mountain-trip-family-mountains-sits-150nw-1814524712.jpg"
                        },
                        "mosaic": {
                            "height": 250,
                            "width": 166,
                            "url": "https://image.shutterstock.com/image-photo/mountain-trip-family-mountains-sits-250nw-1814524712.jpg"
                        },
                        "preview_1000": {
                            "height": 1000,
                            "width": 666,
                            "url": "https://image.shutterstock.com/image-photo/mountain-trip-family-mountains-sits-1000w-1814524712.jpg"
                        },
                        "preview_1500": {
                            "height": 1500,
                            "width": 1000,
                            "url": "https://image.shutterstock.com/z/stock-photo-mountain-trip-family-in-the-mountains-sits-on-a-bench-and-looks-at-the-mountains-1814524712.jpg"
                        },
                        "huge_thumb": {
                            "height": 260,
                            "width": 173,
                            "url": "https://image.shutterstock.com/image-photo/mountain-trip-family-mountains-sits-260nw-1814524712.jpg"
                        }
                    },
                    "contributor": {
                        "id": "301131899"
                    },
                    "description": "mountain trip. family in the mountains sits on a bench and looks at the mountains\r",
                    "image_type": "photo",
                    "has_model_release": true,
                    "media_type": "image"
                }
            ]
        })
    } else {
        const res = await imagesApi.searchImages(queryParams);
        return formatImageResult(res);
    }  
}
