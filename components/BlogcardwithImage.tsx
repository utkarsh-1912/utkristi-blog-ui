import React from 'react'
import {IArticle} from '../types'
import Link from 'next/link';
import Image from 'next/image';

interface IPropType{
    article:IArticle;
}

const BlogcardwithImage = ({article}:IPropType) => {
  return (
    <div className='bg-gradient-to-l from-sky-300 to-sky-700 rounded-md flex items-center justify-content-center min-h-48 p-1 md:p-4 'style={{overflow:"wrap"}}>
      <Link href={`/article/${article.attributes.Slug}`}>
                <span className="text-2xl w-2/3 text-white p-6 font-bold after:content-[''] after:bg-primary after:block after:w-16 after:h-1 after:rounded-md after:mt-2 cursor-pointer">
                    {article.attributes.Title}
                </span>
     </Link>
     <Image src = "/logo_3.png" width={170} height={160}/>
    </div>
  )
}

export default BlogcardwithImage
