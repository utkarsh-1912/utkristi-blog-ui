import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { formatDate } from '../utils';
import { IArticle } from '../types'

interface IPropType{
    article:IArticle;
}
const Blogcard = ({article}:IPropType) => {
  
  const API_BASE_URL = "http://localhost:1337"

  return (
    <Link href={`/article/${article.attributes.Slug}`}>
    <div className='hover:outline hover:outline-2 outline-offset-2 outline-gray-200 py-3 px-3 rounded rounded-2 cursor-pointer'>
      <h1 className="text-l text-gray-600 font-bold hover:decoration-2 hover:underline hover:decoration-primary hover:cursor-pointer">{article.attributes.Title}</h1>
      <div className="flex items-center my-1">
        <div className="rounded-lg overflow-hidden flex items-center justify-center mr-2"><Image src={`${API_BASE_URL}${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`} height={40} width={40} className="rounded rounded-sm bg-primary"/></div>
        <span className="text-sm font-bold text-primary">{article.attributes.author.data.attributes.firstname}{' '}{article.attributes.author.data.attributes.lastname} <span className="text-gray-400">on</span>&nbsp;<span className="text-gray-500">{formatDate(article.attributes.createdAt)}</span></span>
      </div>
      <div className="text-gray-500">
                {article.attributes.ShortDescription.slice(0, 250)}{' '}
                {article.attributes.ShortDescription.length > 250 ? '...' : ''}
     </div>
    </div>
    </Link>
  )
}

export default Blogcard
