import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
const Register = () => {
  const [register, setRegister] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    gmail: '',
    password: '',
    confirmPassword: '',
  });
  const [status, setStatus] = useState('');
  const sendToDb = () => {
    axios
      .post('http://127.0.0.1:3000/auth/register', register)
      .then((response) => {
        setStatus(response.data);
        // alert(response.status);
      });
  };
  const navigate = useNavigate();

  if (status === 'success') {
    navigate('/login');
  }
  return (
    <div>
      <div class='container mt-40  w-[800px] mx-auto '>
        <h1 className='text-center text-5xl p-2 -mt-14'>Create Your account</h1>
        <div class=' flex flex-col bg-white  rounded-xl w-[800px]text-lg relative'>
          <h1 className='text-red-400'></h1>
          <div className='grid grid-cols-3 gap-5'>
            <input
              onKeyUp={(e) =>
                setRegister({ ...register, firstName: e.target.value })
              }
              class='px-4 h-12 my-2 border border-1 outline-blue-600 border-gray-200 rounded-lg'
              type='text'
              placeholder='First Name'
            />
            <input
              onKeyUp={(e) =>
                setRegister({ ...register, middleName: e.target.value })
              }
              class='px-4 h-12 my-2 border border-1 outline-blue-600 border-gray-200 rounded-lg'
              type='text'
              placeholder='Middle Name'
            />
            <input
              onKeyUp={(e) =>
                setRegister({ ...register, lastName: e.target.value })
              }
              class='px-4 h-12 my-2 border border-1 outline-blue-600 border-gray-200 rounded-lg'
              type='text'
              placeholder='Last Name'
            />
          </div>
          <input
            onKeyUp={(e) => setRegister({ ...register, gmail: e.target.value })}
            class='px-4 h-12 my-2 border border-1 outline-blue-600 border-gray-200 rounded-lg'
            type='text'
            placeholder='Email address or phone number'
          />
          <div className='grid grid-cols-2 gap-6'>
            <input
              onKeyUp={(e) =>
                setRegister({ ...register, password: e.target.value })
              }
              class='px-4 h-12 my-2 border border-1 outline-blue-600 border-gray-200 rounded-lg'
              type='password'
              placeholder='Password'
            />
            <input
              onKeyUp={(e) =>
                setRegister({ ...register, confirmPassword: e.target.value })
              }
              class='px-4 h-12 my-2 border border-1 outline-blue-600 border-gray-200 rounded-lg'
              type='password'
              placeholder='Confirm Your password'
            />
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              sendToDb();
            }}
            class='bg-green-600 hover:bg-green-700 text-white my-2 py-3 rounded-md font-bold'
          >
            Register
          </button>
          <hr class='my-2' />
          <button class='bg-blue-600 hover:bg-blue-700 text-white my-2 py-3 px-4 mx-auto rounded-md font-bold w-fit'>
            Already Have account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
