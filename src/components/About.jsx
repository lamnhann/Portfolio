import React from 'react'

export default function About() {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>
          I am a new graduate student majoring in computer science at Cantho
          University of Technology. I have experience participating in projects
          at school, providing me with the necessary knowledge and skills to
          develop the Backend of a web application. I hope my contributions will
          be a stepping stone to become an expert with a role of Backend
          Developer for the present and Fullstack developer for the future.
        </p>
      </div>
    </div>
  );
}
