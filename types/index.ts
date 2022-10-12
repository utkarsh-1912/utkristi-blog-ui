
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface ICategory{
id:number;
attributes:ICategoryAttribute;
}

export interface ICategoryAttribute{
Title: string;
Slug: string;
}

export interface IPagination{
    page:number;
    pageSize:number;
    pageCount:number;
    total:number;
}

export interface IResourceMeta{
pagination: IPagination;
}

export interface IPropTypes{
categories:{
    items:ICategory[];
};
articles:{
    items:IArticle[];
    pagination: IPagination;
};
}

export interface IPropType{
   categories:ICategory[];
   handleOnSearch: (query: string) => void;
}

export interface IPropTypeArticle{
    articles:IArticle[];
}

export interface ICollectionResponse<T>{
data: T;
meta: IResourceMeta;
}

export interface IAuthor{
    data:{
        attributes:{
            username:string;
            firstname:string;
            lastname:string;
            avatar:{
                data:{
                    attributes:{
                        formats:{
                            thumbnail:{
                                url:string;
                            }
                        }
                    }
                }
            }
        }
    }
}

export interface IImageData{
   data:{
      attributes:{
        name:string;
        url:string;
        formats:{
            small:{
                url:string;
            }
        }
      }
   }
};

export interface IArticle{
id:number;
attributes:IArticlesAttribute;
}

export interface IArticlesAttribute{
Title: string;
ShortDescription: string ;
Body: string ;//| MDXRemoteSerializeResult;
Slug: string;
Image:IImageData;
createdAt: string;
author:IAuthor;
}

export type TDirection = 1 | -1;

export interface IQueryOptions {
    filters: any;
    sort: any;
    populate: any;
    pagination: {
        page: number;
        pageSize: number;
    };
}