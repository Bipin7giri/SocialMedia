import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modeAction } from '../../app/slice/darklightSlice';
const Story = () => {
  const dispatch = useDispatch();

  const mode = useSelector((state) => state.mode.isMode);
  // alert(mode);
  const changeMode = () => {
    if (mode === false || mode === null) {
      dispatch(modeAction.light());
    } else if (mode === true) {
      dispatch(modeAction.dark());
    }
  };
  return (
    <div>
      <header class=' py-4  shadow-xs sticky '>
        <div class='container flex items-center justify-between h-full px-6 mx-auto text-purple-600 light:text-purple-300'>
          {/* <!-- Mobile hamburger --> */}
          <button class='p-1 -ml-1 mr-5 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple'>
            <svg
              class='w-6 h-6'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path
                fill-rule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
        {/* <!-- Search input --> */}
        {/* <!--
  <input type="search" class="block md:hidden lg:hidden w-1/2 py-2 pl-4 px-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-gray-50 focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue" style="border-radius: 25px" placeholder="Search" autocomplete="off"> --> */}
        <div class='flex justify-between'>
          <ul class='flex items-center flex-shrink-0 space-x-6'>
            {/* <!-- Profile menu --> */}
            <li class=' '>
              <button class='align-middle rounded-full border-2 border-gray-300 shadow-lg  focus:shadow-outline-purple focus:outline-none'>
                <img
                  class='object-cover w-10 h-10 rounded-full hover-image-1 flex-shrink-0'
                  src='https://picsum.photos/200/200?i=203'
                  alt=''
                  aria-hidden='true'
                />
              </button>
            </li>

            <li class=''>
              <button class='align-middle rounded-full border-2 border-gray-300 shadow-lg  focus:shadow-outline-purple focus:outline-none'>
                <img
                  class='object-cover w-10 h-10 rounded-full hover-image-1 flex-shrink-0'
                  src='https://picsum.photos/200/200?i=205'
                  alt=''
                  aria-hidden='true'
                />
              </button>
            </li>

            <li class=''>
              <button class='align-middle rounded-full border-2 border-gray-300 shadow-lg  focus:shadow-outline-purple focus:outline-none'>
                <img
                  class='object-cover w-10 h-10 rounded-full hover-image-1 flex-shrink-0'
                  src='https://picsum.photos/200/200?i=207'
                  alt=''
                  aria-hidden='true'
                />
              </button>
            </li>

            <li class=''>
              <button class='align-middle rounded-full border-2 border-gray-300 shadow-lg  focus:shadow-outline-purple focus:outline-none'>
                <img
                  class='object-cover w-10 h-10 rounded-full hover-image-1 flex-shrink-0'
                  src='https://picsum.photos/200/200?i=209'
                  alt=''
                  aria-hidden='true'
                />
              </button>
            </li>

            <li class=''>
              <button class='align-middle rounded-full border-2 border-gray-300 shadow-lg  focus:shadow-outline-purple focus:outline-none'>
                <img
                  class='object-cover w-10 h-10 rounded-full hover-image-1 flex-shrink-0'
                  src='https://picsum.photos/200/200?i=2011'
                  alt=''
                  aria-hidden='true'
                />
              </button>
            </li>
          </ul>
          <div className='ml-56'>
            {/* changing dark mode */}
            <li class=' list-none'>
              <button
                onClick={() => changeMode()}
                class='align-middle rounded-full border-2 border-gray-300 shadow-lg  focus:shadow-outline-purple focus:outline-none'
              >
                <img
                  class='object-cover w-10 h-10 rounded-full hover-image-1 flex-shrink-0'
                  src='https://cdn-icons-png.flaticon.com/512/8338/8338708.png'
                  alt=''
                  aria-hidden='true'
                />
              </button>
            </li>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Story;
