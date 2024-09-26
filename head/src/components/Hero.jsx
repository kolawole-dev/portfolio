import { BsFacebook ,BsTwitter, BsInstagram, BsPinterest } from "react-icons/bs"

import HeroPic from '../assets/boy.jpg';

const Hero = ()  => {

  return(
    <section className="flex items-center justify-around p-10 space-x-10 font-serif text-white lg:flex-row ssm:flex-col ssm:space-y-10">
        <div className="lg:w-1/3 ssm:w-fit">
        <p className="mb-1 text-6xl">I`m</p>
        <h1 className="font-serif text-6xl ">Omoyeni Kolawole</h1>
        <hr/>
        <p className="mt-8 font-serif text-3xl text-center">Frontend web developer </p>
        <p className="mt-10 font-sans text-center text-slate-300">
          I am a Frontend developer with no work experence, but aiming to have one.
        </p>
        </div>
         
        <div className="items-center w-1/3 ssm:w-fit">
          <img src={HeroPic} alt="" width={250} height={250} className="w-full border-8 border-white rounded-full" />
        </div>
        <div className="w-1/3 ssm:w-fit">
          <p className="mb-4 text-4xl">About Me</p>
          <p className="text-slate-300">
            Let`s build quality in programming and design with our services
          </p>
          <button className="px-10 py-2 my-3 text-indigo-600 bg-white rounded-full hover:bg-indigo-800 hover:text-white">Show More...</button>
          <div className="flex mt-5 space-x-4 cursor-pointer">
            <BsFacebook size={40} className="border-4 rounded-full hover:border-indigo-800" />
            <BsTwitter  size={40} className="border-4 rounded-full hover:border-indigo-800"/>
            <BsInstagram  size={40} className="border-4 rounded-full hover:border-indigo-800"/>
            <BsPinterest  size={40} className="border-4 rounded-full hover:border-indigo-800"/>
          </div>
        </div>
    </section>
  )
}

export default Hero