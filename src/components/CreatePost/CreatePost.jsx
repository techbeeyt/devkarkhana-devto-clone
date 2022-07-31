import React from 'react'
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import logo from '../../assets/logo.png';
import { MdClose } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';
import bold from '../../assets/svg/createpost/bold.svg';
import code from '../../assets/svg/createpost/code.svg';
import codeblock from '../../assets/svg/createpost/codeblock.svg';
import embed from '../../assets/svg/createpost/embed.svg';
import heading from '../../assets/svg/createpost/heading.svg';
import italic from '../../assets/svg/createpost/italic.svg';
import link from '../../assets/svg/createpost/link.svg';
import list123 from '../../assets/svg/createpost/list123.svg';
import listdot from '../../assets/svg/createpost/listdot.svg';
import quote from '../../assets/svg/createpost/quote.svg';
import uploadimage from '../../assets/svg/createpost/uploadimage.svg';
import HoverDiv from './../HoverDiv/HoverDiv';
import ToolTip from './../ToolTip/ToolTip';

const CreatePost = () => {
  return (
    <div className='w-screen h-screen absolute top-0 left-0 right-0 bottom-0 z-30 bg-zinc-50'>
        <div className='w-full flex justify-start items-center md:mx-4 lg:mx-32'>
            <div className='md:w-full lg:w-5/6 flex justify-center items-center py-2 px-6'>
                <Link to="/" className="mr-4">
                    <img src={logo} alt="logo" width="50" />
                </Link>
                <span className='mr-auto font-semibold text-gray-800'>Create Post</span>
                <div className='w-3/4 flex justify-center items-center'>
                  <button className='text-gray-800 font-semibold mx-2'>Edit</button>
                  <button className='text-gray-800'>Preview</button>
                </div>
            </div>
            <button><MdClose /></button>
        </div>

        <div className='mx-4 md:mx-20 lg:mx-56 flex justify-between gap-10'>
          <div className='bg-white border border-gray-300 w-3/4 rounded-lg px-14 py-8 flex flex-col'>
            <ToolTip title="Upload image with 100:42 ratio for better result">
              <button className='px-3 py-1.5 border-2 border-gray-300 rounded-md hover:shadow-md w-min whitespace-nowrap mb-4'>Add a Cover Image</button>
            </ToolTip>
            <input type='text' className='text-5xl text-gray-800 font-extrabold focus:outline-none' placeholder='New post title is here...' />
            <input type='text' className='focus:outline-none mt-4 mb-2 font-Cairo tracking-wider' placeholder="Add upto 4 tags" />

            <div className='flex justify-between items-center bg-gray-100 -mx-14 px-14 pt-3 pb-1 my-4'>
              <div className='flex justify-start items-center'>
                <ToolTip title="Bold (ctrl+b)">
                  <HoverDiv>
                    <button>
                      <ReactSVG src={bold} className="hover:text-indigo-600" />
                    </button>
                  </HoverDiv>
                </ToolTip>
                <ToolTip title="Italic (ctrl+i)">
                  <HoverDiv>
                    <button className='hover:text-indigo-600'>
                      <ReactSVG src={italic} />
                    </button>
                  </HoverDiv>
                </ToolTip>
                <ToolTip title="Add Link">
                  <HoverDiv>
                    <button>
                      <ReactSVG src={link} />
                    </button>
                  </HoverDiv>
                </ToolTip>
                <ToolTip title="Ordered List">
                  <HoverDiv>
                    <button>
                      <ReactSVG src={list123} />
                    </button>
                  </HoverDiv>
                </ToolTip>
                <ToolTip title="Unordered List">
                  <HoverDiv>
                    <button>
                      <ReactSVG src={listdot} />
                    </button>
                  </HoverDiv>
                </ToolTip>
                
                <ToolTip title="Heading">
                  <HoverDiv>
                    <button>
                      <ReactSVG src={heading} />
                    </button>
                  </HoverDiv>
                </ToolTip>
                <ToolTip title="Quote">
                  <HoverDiv>
                    <button>
                      <ReactSVG src={quote} />
                    </button>
                  </HoverDiv>
                </ToolTip>
                <ToolTip title="Code">
                  <HoverDiv>
                    <button>
                      <ReactSVG src={code} />
                    </button>
                  </HoverDiv>
                </ToolTip>
                <ToolTip title="Codeblock">
                  <HoverDiv>
                    <button>
                      <ReactSVG src={codeblock} />
                    </button>
                  </HoverDiv>
                </ToolTip>
                <ToolTip title="Embed">
                  <HoverDiv>
                    <button>
                      <ReactSVG src={embed} />
                    </button>
                  </HoverDiv>
                </ToolTip>
                <ToolTip title="Upload Image">
                  <HoverDiv>
                    <button>
                      <ReactSVG src={uploadimage} />
                    </button>
                  </HoverDiv>
                </ToolTip>
              </div>
              <button className='mb-2'>
                <BsThreeDotsVertical size={22}/>
              </button>
            </div>
            <textarea placeholder='Write your post content here...' className='font-Cairo focus:outline-none h-56 text-lg tracking-wide'/>
          </div>
          <div className='mr-auto'>
            This part is for Tips
          </div>
        </div>
    </div>
  )
}

export default CreatePost