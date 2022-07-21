import React from 'react';
import { posts } from '../../assets/database/posts';
import { GiSelfLove } from 'react-icons/gi'
import { FaRegComment } from 'react-icons/fa'
const BlogFeed = () => {

    console.log(posts)


    return (
        <div className=" min-h-full">
            {/* top section of BlogFeed */}
            <section>
                <button className="mx-0.5 text-gray-700 py-1.5 px-2.5 rounded text-lg bg-gray-100  hover:bg-white hover:text-indigo-600 focus:font-bold ">
                    Relevant
                </button>

                <button className=" mx-0.5 text-gray-700 py-1.5 px-2.5 rounded text-lg bg-gray-100  hover:bg-white hover:text-indigo-600 focus:font-bold ">
                    Latest
                </button>
                <button className="mx-0.5  text-gray-700 py-1.5 px-2.5 rounded text-lg bg-gray-100 hover:bg-white hover:text-indigo-600 focus:font-bold ">
                    Top
                </button>

            </section>
            {/* BlogFeed Main section */}
            <section className='mt-5'>

                {
                    posts.map(post =>

                        <div key={post.postID} className="card mb-2 mr-5 border-solid border-2 border-gray-200 active:border-indigo-600  bg-base-100 ">

                            <figure><img src={post.img} alt="" /></figure>
                            <div className="card-body">
                                <p> {post.date}</p>


                                <h1 className="card-title text-3xl font-bold hover:text-indigo-600">{post.post_title}</h1>


                                <p>

                                    {post.tags.map(tag =>


                                        <button key={tag.length} className='text-sm py-1 px-1.5 rounded border-solid border-2  border-white hover:bg-gray-100 hover:border-gray-200 '>#{tag}</button>)}



                                </p>


                                <p> {post.post_body}</p>



                                <div className="card-actions justify-between">
                                    <div className='inline'> <button className='p-1.5 rounded hover:bg-gray-100 flex flex-row'><GiSelfLove></GiSelfLove> {post.hearts} Reactions</button> <button className='p-1.5 rounded hover:bg-gray-100 flex flex-row'> <FaRegComment></FaRegComment> {post.comments.count} Comments</button>  </div> <button className="mx-0.5  text-gray-700 py-1.5 px-2.5 rounded-lg  bg-gray-200 hover:bg-gray-400 ">Save</button>
                                </div>
                            </div>


                        </div>)
                }


            </section>

        </div>
    );
};

export default BlogFeed;