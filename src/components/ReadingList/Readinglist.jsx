import React from 'react'
import Footer from '../Footer/Footer'
import { useState } from "react";
import './readingcss.css'
import { posts } from '../../assets/database/posts';

import { RiHeart2Line } from 'react-icons/ri'
import Comments from '../../assets/svg/blogfeed/comments.svg';
import { Link } from 'react-router-dom';
import { toSlug } from '../../Control/toSlug';
import { taggs } from '../tags';

console.log(taggs);
const Readinglist = () => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const archiveStyle = {
        position: 'absolute',
        left: '70%',
        hover: 'gray',
        backgroundColor: isHover ? 'lightblue' : 'transparent',
    }






    return (
        <>
            <div className='flex' style={
                {
                    paddingTop: '20px',
                    paddingLeft: '50px',
                    position: 'relative'
                }
            }>
                <h1 style={{
                    fontSize: '30px', fontWeight: 'bold',

                }}>Reading list ({posts.length}) </h1>
                <p className='Archive'
                    // style={ archiveStyle }
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >View Archive</p>




                <div class="form-outline" className='Search'>
                    <input type="search" id="Search" class="form-control" placeholder="Search..." aria-label="Search" />
                </div>

            </div>

            <div>

                <div class="container">

                    <div class="row" >
                        <div class="col-lg-3">
                            <h1 style={{
                                background: 'white',
                                fontSize: '30px',
                                borderRadius: 10
                            }}>All tags</h1>
                            {/* </div>
                        <div > */}
                            {

                                taggs.map(tags =>
                                    <ul><div >
                                        <li>{tags}</li>
                                    </div>
                                    </ul>
                                )

                            }
                        </div>

                        <div class="col-sm-9" >
                            {/* <section > */}
                            {
                                posts.map(post =>
                                    // <Link to={`/${post.userID}/${toSlug(post.post_title)}`}>
                                        <div key={post.postID} className="rounded-md overflow-hidden mb-2 mr-5 bg-white border border-gray-300 active:outline active:outline-3 active:outline-indigo-600">

                                            <div className="card-body"style={{
                                                    display: 'inline-flex'
                                                }} >
                                                <div className='flex flex-row items-start'>
                                                    <div className="avatar w-8">
                                                        <div className="w-24 rounded-full">
                                                            <img src="https://placeimg.com/192/192/people" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className='ml-2'>
                                                        <p>{post.name}</p>
                                                        <p className='text-xs'>{post.date}</p>
                                                    </div>
                                                </div>

                                                <div className='ml-2 sm:ml-10' >
                                                    <h1 className="card-title text-3xl font-bold hover:text-indigo-600">{post.post_title}</h1>
                                                    
                                                    <p>

                                                        {post.tags.map(tag =>
                                                            <button key={tag.length} className='text-sm py-1 px-1.5 rounded border-solid border-2  border-white hover:bg-gray-100 hover:border-gray-200 '>#{tag}</button>)}
                                                    </p>

                                                    <button className="mx-0.5  text-gray-700 py-1.5 px-2.5 rounded-lg  bg-gray-200 hover:bg-gray-300 ">Archive</button>


                                                    <div className="card-actions justify-between ml-0 mt-3">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    // </Link>
                                )
                            }
                            {/* </section > */}
                        </div>

                    </div>
                </div>
            </div>

            <div className="footer">
                <Footer />
            </div>
        </>

    )
}

export default Readinglist

