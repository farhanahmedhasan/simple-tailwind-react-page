import React from 'react';
import Button from '../components/Button';

const About = () => {
  return (
    <div style={{ height: `calc(100vh - 64px)` }} className='flex-center'>
      <Button className='btn--rounded animate-bounce'>TailwindButton</Button>
    </div>
  );
};

export default About;
