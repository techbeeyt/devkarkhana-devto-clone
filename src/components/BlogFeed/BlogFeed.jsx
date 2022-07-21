import React from 'react';
import { posts } from '../../assets/database/posts';
import { RiHeart2Line } from 'react-icons/ri'
import Comments from '../../assets/svg/blogfeed/comments.svg';
import { Link } from 'react-router-dom';
import { toSlug } from '../../Control/toSlug';

const BlogFeed = () => {

    return (
        <div className="min-h-full flex flex-col justify-center w-full">
            <section>
                <button className="mx-0.5 text-gray-700 py-1.5 px-2.5 rounded text-lg bg-gray-100  hover:bg-white hover:text-indigo-600">
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
                     <Link to={`/${post.userID}/${toSlug(post.post_title)}`}>
                        <div key={post.postID} className="rounded-md overflow-hidden mb-2 mr-5 bg-white border border-gray-300 active:outline active:outline-3 active:outline-indigo-600">
                            {
                                post.img ? (<figure className="-mt-1"><img src={post.img} alt=""/></figure>) : null
                            }
                            <div className="card-body">
                                <div className='flex flex-row items-start' >
                                    <div className="avatar w-8">
                                        <div className="w-24 rounded-full">
                                            <img src="https://placeimg.com/192/192/people" />
                                        </div>
                                    </div>
                                    <div className='ml-2'>
                                        <p>{post.name}</p>
                                        <p className='text-xs'>{post.date}</p>
                                    </div>
                                </div>

                                <div className='ml-2 sm:ml-10'>
                                    <h1 className="card-title text-3xl font-bold hover:text-indigo-600">{post.post_title}</h1>
                                    <p>

                                        {post.tags.map(tag =>
                                            <button key={tag.length} className='text-sm py-1 px-1.5 rounded border-solid border-2  border-white hover:bg-gray-100 hover:border-gray-200 '>#{tag}</button>)}
                                    </p>

                                    <p className='text-left'> {post.post_body}</p>

                                    <div className="card-actions justify-between ml-0 mt-3">
                                        <div className='flex flex-row '>
                                            <button className='p-1.5 items-center rounded hover:bg-gray-100 flex flex-rowv text-gray-600'><RiHeart2Line size={20}/> <span className='px-2'>{post.hearts} <span className='hidden sm:inline'>Reactions</span></span></button>
                                            <button className='p-1.5 items-center  rounded hover:bg-gray-100 flex flex-row text-gray-600'> <img src={Comments} /> <span className='px-2'>{post.comments.count} <span className='hidden sm:inline'>Comments</span></span></button>
                                        </div>
                                        <button className="mx-0.5  text-gray-700 py-1.5 px-2.5 rounded-lg  bg-gray-200 hover:bg-gray-300 ">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>    
                    )
                }
            </section >
        </div >
    );
};

export default BlogFeed;