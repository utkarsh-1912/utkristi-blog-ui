import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { fetchCategories , fetchArticles } from '../http'
import {AxiosResponse} from 'axios'
import { ICategory , IArticle ,ICollectionResponse , IPropTypes ,IPagination , IQueryOptions} from '../types'
import Tabs from '../components/Tabs'
import { useRouter } from 'next/router'
import { debounce } from '../utils';
import qs from 'qs'
import ArticleList from '../components/ArticleList'
import Pagination from '../components/Pagination';


const Home: NextPage<IPropTypes> = ({categories , articles}) => {

  const router = useRouter();
  const handleSearch = (query: string) => {
      router.push(`/?search=${query}`);
  };

  const { page, pageCount } = articles.pagination;

  return (
    <div>
      <Head>
        <title>Utkristi Blogs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tabs categories={categories.items} handleOnSearch={debounce(handleSearch, 500)}/>
      <ArticleList articles={articles.items}/>
      <Pagination page={page} pageCount={pageCount} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({query})=>{
  // fetching articles
  const options : Partial<IQueryOptions> = {
    populate:['author.avatar'],
    sort:['id:desc'],
    pagination: {
            page: query.page ? +query.page : 1,
            pageSize: 6,
    },
  };

  if (query.search) {
      options.filters = {
          Body: { // query search in body of article
              $containsi: query.search,
          },
      };
  }
  const queryString = qs.stringify(options);
  const {data:articles}:
  AxiosResponse<ICollectionResponse<IArticle[]>> = await fetchArticles(queryString);
  /* console.log('articles',articles); */

  // fetching categories
  const {data:categories,}:
  AxiosResponse<ICollectionResponse<ICategory[]>> = await fetchCategories();
  /* console.log('categories',categories);*/
  return {
    props:{
       categories:{
        items:categories.data,
       },
       articles:{
        items: articles.data,
        pagination:articles.meta.pagination,  
      },
    },
  };
};
export default Home;
