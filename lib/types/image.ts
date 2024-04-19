interface Image {
    id: string;
    url: string;
    description: string;
    aspect?: number;
    creator?: {
        username: string;
        link: string;
    }
}

export interface ImageResult {
    images: Image[];
    total: number;
    page?: number;
    per_page?: number;
}