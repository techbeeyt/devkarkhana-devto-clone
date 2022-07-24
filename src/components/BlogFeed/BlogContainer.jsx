import React from 'react';
import { RiHeart2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { toSlug } from '../../Control/toSlug';
import Comments from '../../assets/svg/blogfeed/comments.svg';


const BlogContainer = ({post}) => {
    return (
        <Link to={`/${post.userID}/${toSlug(post.post_title)}`}>
            <div key={post.postID} className="rounded-md overflow-hidden mb-2 mr-5 bg-white border border-gray-300 active:outline active:outline-3 active:outline-indigo-600">
                {
                    post.img ? (<figure className="-mt-1"><img src={post.img} alt=""/></figure>) : null
                }
                <div className="card-body">
                    <div className='flex flex-row items-start' >
                        <div className="avatar w-8">
                            <div className="w-24 rounded-full">
                                <img src="https://placeimg.com/192/192/people" alt=""/>
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

                        <div className="card-actions justify-between ml-0 mt-3">
                            <div className='flex flex-row '>
                                <button className='p-1.5 items-center rounded hover:bg-gray-100 flex flex-rowv text-gray-600'><RiHeart2Line size={20}/> <span className='px-2'>{post.hearts} <span className='hidden sm:inline'>Reactions</span></span></button>
                                <button className='p-1.5 items-center  rounded hover:bg-gray-100 flex flex-row text-gray-600'> <img src={Comments} alt=""/> <span className='px-2'>{post.comments.count} <span className='hidden sm:inline'>Comments</span></span></button>
                            </div>
                            <button className="mx-0.5  text-gray-700 py-1.5 px-2.5 rounded-lg  bg-gray-200 hover:bg-gray-300 ">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BlogContainer;