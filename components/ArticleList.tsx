import React from 'react'
import { IPropTypeArticle } from '../types'
import Blogcard from './Blogcard';
import BlogcardwithImage from './BlogcardwithImage';

const ArticleList = ({articles}:IPropTypeArticle) => {
  return (
    <div className=" grid lg:grid-cols-2 grid-gap gap-6 md:gap-16 mt-16 px-3">
      {
        articles.map((article,idx)=>{
            return (
                 (idx%3!=1)?<Blogcard article={article} key={article.id}/>:<BlogcardwithImage article={article} key={article.id}/>
            );
        })
      }
    </div>
  )
}

export default ArticleList
