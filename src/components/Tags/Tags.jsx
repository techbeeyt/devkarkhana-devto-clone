import React, { useEffect, useState } from 'react';
import { CgSearch } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setSearchQuery } from '../../store/AppState';

const Tags = () => {
  const location = useLocation();
  const param = new URLSearchParams(location.search);
  const search_query = param.get('q');
  const [searchText, setSearchText] = useState('');
  const searchQuery = useSelector(state => state.AppState.searchQuery);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    setSearchText(search_query);
  }, []);
  return (
    <div className='min-h-screen w-full'>
      <div className='w-4/5 mx-auto'>
        <div className='w-full flex justify-between items-center pt-4 mb-6'>
          <h1 className='text-black text-2xl sm:text-3xl font-bold'>Top Tags</h1>
          <div className='flex flex-row'>
            <div className="hidden border border-gray-300 rounded-md ml-2 mr-auto overflow-hidden md:flex lg:flex items-center justify-center focus-within:outline focus-within:outline-2 focus-within:outline-indigo-600">
              <input type="text" className="px-2 focus:outline-none w-96" placeholder="Search..." value={searchText} onChange={(e) => {
                setSearchText(e.target.value);
              }} />
              <button className="h-9 w-9 flex justify-center items-center rounded-md hover:bg-purple-100" onClick={() => {
                const param = new URLSearchParams(location.search);
                let paramObj = {};
                for (const [key, value] of param) {
                  paramObj[key] = value;
                }
                const params = new URLSearchParams({ ...paramObj, "q": searchText });
                dispatch(setSearchQuery(searchText));
                if (searchText.length > 0) navigate({ pathname: '/search', search: params.toString() });
                dispatch(setSearchQuery(searchText));
              }}>
                <CgSearch size={24} />
              </button>
            </div>
            <Link to='/settings' className='w-fit mr-4 border-0 text-gray-700 font-normal cursor-pointer rounded-lg hover:bg-gray-200 hover:text-black'>Following Tags</Link>
          </div>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

        </div>
      </div>
    </div>
  );
};

export default Tags;