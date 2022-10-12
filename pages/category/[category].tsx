import Head from 'next/head'
import React from 'react'
import Tabs from '../../components/Tabs'
import type { GetServerSideProps} from 'next'
import { ICategory ,ICollectionResponse, IPropTypes,IArticle ,IPagination,  IQueryOptions} from '../../types'
import {AxiosResponse} from 'axios'
import { fetchCategories , fetchArticles} from '../../http'
import qs from 'qs'
import ArticleList from '../../components/ArticleList';
import Pagination from '../../components/Pagination';
import { useRouter } from 'next/router';
import { capitalizeFirstLetter, debounce, makeCategory } from '../../utils';

interface IPropType {
    categories: {
        items: ICategory[];
        pagination: IPagination;
    };
    articles: {
        items: IArticle[];
        pagination: IPagination;
    };
    slug: string;
};

const category = ({categories,articles,slug}:IPropType) => {
  const { page, pageCount } = articles.pagination;
  const router = useRouter();
  const { category: categorySlug } = router.query;

  
  const formatedCategory = ()=>{
     return capitalizeFirstLetter(makeCategory(slug));
  }
  const handleSearch = (query: string) => {
        router.push(`/category/${categorySlug}/?search=${query}`);
  };

  return (
    <>
      <Head>
        <title>Utkristi Blogs - {formatedCategory()}</title>
        <meta name="description" content = {`Blogs related to ${formatedCategory()}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tabs categories={categories.items} handleOnSearch={debounce(handleSearch, 500)}/>
      <ArticleList articles={articles.items} />
      <Pagination page={page} pageCount={pageCount} redirectUrl={`/category/${categorySlug}`}/>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const options: IQueryOptions = {
        populate: ['author.avatar'],
        sort: ['id:desc'],
        filters: {
            category: {
                slug: query.category,
            },
        },
        pagination: {
            page: query.page ? +query.page : 1,
            pageSize: 1,
        },
    };

    if (query.search) {
        options.filters = {
            Title: {
                $containsi: query.search,
            },
        };
    }

    const queryString = qs.stringify(options);

    const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> =
        await fetchArticles(queryString);

    const {
        data: categories,
    }: AxiosResponse<ICollectionResponse<ICategory[]>> =
        await fetchCategories();

    return {
        props: {
            categories: {
                items: categories.data,
                pagination: categories.meta.pagination,
            },
            articles: {
                items: articles.data,
                pagination: articles.meta.pagination,
            },
            slug: query.category,
        },
    };
};

export default category;