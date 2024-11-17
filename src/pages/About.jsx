import React from 'react'

const About = () => {
  return (
    <>
     <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
      <h1 className='text-4xl font-bold leading-none tracking-tight'>We love</h1>
      <div className='stats bg-primary shadow'>
        <div className="stat">
          <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
            comfy
          </div>
        </div>
      </div>
    </div>
      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, officiis magnam at placeat architecto maiores repudiandae aspernatur pariatur excepturi veritatis doloribus delectus earum expedita dolores odio esse libero rem voluptatum. Saepe debitis veniam quia nam. Consequatur ipsam at blanditiis asperiores?
      </p>
    </>
    
  )
}

export default About