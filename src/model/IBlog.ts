export interface IPost {
    id: number;
    title: string;
    author: string;
    slug: string;
    content: string;
}

export interface IBlog {
    data: IPost[];
    dataCount: number;
    page: number;
    pageCount: number;
    pageSize: number;
}

export interface IResponse {
    msg: string;
    response: IBlog;
    status: number;
    success: boolean;
}


