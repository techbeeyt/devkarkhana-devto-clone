import React from 'react';
import { posts } from '../../assets/database/posts';
import BlogContainer from './BlogContainer';

const BlogFeed = () => {

    return (
        <div className="min-h-full flex flex-col w-full">
            <section>
                <button className="mx-0.5 text-gray-700 py-1.5 px-2.5 rounded text-lg font-bold bg-gray-100  hover:bg-white hover:text-indigo-600">
                    Relevant
                </button>

                <button className=" mx-0.5 text-gray-700 py-1.5 px-2.5 rounded text-lg bg-gray-100  hover:bg-white hover:text-indigo-600">
                    Latest
                </button>
                <button className="mx-0.5  text-gray-700 py-1.5 px-2.5 rounded text-lg bg-gray-100 hover:bg-white hover:text-indigo-600">
                    Top
                </button>
            </section>
            {/* BlogFeed Main section */}
            <section className='mt-5'>
                {
                    posts.map(post =>
                        <BlogContainer post={post} />  
                    )
                }
            </section >
        </div >
    );
};

export default BlogFeed;