import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { MdClose } from 'react-icons/md';

const CreatePost = () => {
  return (
    <div className='w-screen h-screen absolute top-0 left-0 right-0 bottom-0 z-30 bg-zinc-50'>
        <div className='w-full flex justify-start items-center mx-32'>
            <div className='lg:w-5/6 flex justify-center items-center py-2 px-6'>
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

        <div className='mx-56 flex justify-between gap-10'>
          <div className='bg-white border border-gray-300 w-3/4 rounded-lg px-14 py-8 flex flex-col'>
            <button className='px-3 py-1.5 border-2 border-gray-300 rounded-md hover:shadow-md w-min whitespace-nowrap mb-4'>Add a Cover Image</button>
            <input type='text' className='text-5xl text-gray-800 font-extrabold focus:outline-none' placeholder='New post title is here...'/>
            <input type='text' className='focus:outline-none my-2' placeholder="Add upto 4 tags" />

            <div className='bg-gray-100 -mx-14 px-14 py-4 my-4'>
              <button>B</button>
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