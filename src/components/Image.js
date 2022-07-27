import React from 'react'

const Image = ({ image, text }) => {

  return (
    <div className='flex justify-center items-center mx-6 my-6'>
        <div>
            <img src={`http://localhost:8080/${image["@link"]}`} alt=""/>
        </div>
        <div className='px-4'>
            {text}
        </div>
    </div>
  )
}

export default Image