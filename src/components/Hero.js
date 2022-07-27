import React from 'react'

const Hero = ({ text, abstract }) => {
  return (
    <section>
        <div className="text-center font-bold text-4xl py-5 text-orange-400"> {text} </div>
        <div className="leading-loose px-12 py-6 bg-slate-100"> {abstract} </div>
    </section>
  )
}

export default Hero