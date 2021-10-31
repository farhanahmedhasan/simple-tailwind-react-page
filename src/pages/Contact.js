import React from 'react';

const Contact = () => {
  return (
    <form style={{ height: `calc(100vh - 64px)` }} className='flex-center text-4xl font-black'>
      <input
        required
        className='shadow-xl focus:shadow-inner focus:ring ring-offset-2 px-4 py-4 w-96 rounded-full border-2 placeholder-yellow-500 focus:outline-none valid:border-green-500 valid:ring-green-500 invalid:border-red-500'
        type='email'
        placeholder='Your Email'
      />
      <button type='submit' className='bg-yellow-600 p-4 ml-4 rounded-lg text-white border-2 border-yellow-600'>
        Submit
      </button>
    </form>
  );
};

export default Contact;
