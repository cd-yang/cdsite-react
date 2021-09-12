export interface IPost {
    id: number;
    title: string;
    author: string;
    slug: string;
    content: string;
    contentMarkdown: string;
    createOnUtc: string;
    contentAbstract: string;
}

export interface IBlog {
    data: IPost[];
    dataCount: number;
    page: number;
    pageCount: number;
    pageSize: number;
}

export interface IResponse<T> {
    msg: string;
    response: T;
    status: number;
    success: boolean;
}


