import React from 'react'

const Hero = ({title, imageUrl}) => {
  return (
    <div className='hero container'>
        <div className="banner">
            <h1>{title}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptate placeat officia animi itaque, eaque quisquam hic repellendus architecto sequi maiores culpa ipsa, qui natus adipisci impedit dolore quod vero!</p>
        </div>
      <div className="banner">
        <img src = {imageUrl} alt="hero" className="animated-image"/>
        <span>
            <img src="/Vector.png" alt="vector"/>
        </span>
        </div> 
    </div>
  )
}

export default Hero
