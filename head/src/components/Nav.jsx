import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import React , {useState} from "react";
import { HiMenuAlt1 } from "react-icons/hi";
React
const Nav = () => {

  const [toggle , setToggle] =useState(true);


  const work = () => {
    setToggle(true);
  }

  const close = () => {
    setToggle(false);
  }
return (
<>
  <div className="flex items-center justify-between p-10 lg:flex-row">
      <a href='/' className="flex items-center font-mono text-3xl tracking-wider text-white sm:flex-nowrap"><CgNametag/>GR-DEV</a>
      <div className="space-x-1">
        <div className="space-x-1 ssm:hidden lg:block sm:block">
          
         <a href="/" className="px-5 py-2 text-xl text-white rounded-full hover:bg-indigo-800">Home</a> 
        <a href="/" className="px-5 py-2 text-xl text-white rounded-full hover:bg-indigo-800">About me</a>
        <a href="/" className="px-5 py-2 text-xl text-white rounded-full hover:bg-indigo-800">Services</a>
        <a href="/" className="px-5 py-2 text-xl text-white rounded-full hover:bg-indigo-800">My Work</a>
        <a href="/" className="px-5 py-2 text-xl text-white rounded-full hover:bg-indigo-800">Testimonials</a>
        </div>
        <div className="sm:hidden lg:hidden ssm:block">
          {toggle ? <AiOutlineClose size={40} className="text-white " onClick={close}/> : <HiMenuAlt1 size={30} className="text-white " onClick={work}/>}
          
        </div>
      </div>
  </div>
  
  <div className="ssm:block lg:hidden md:hidden sm:hidden">
    {toggle ? (
    <div className="flex items-end justify-between ml-10">
      <ul>
        
        <li className="mb-2 text-xl cursor-pointer text-blue">Home</li>
        <li className="mb-2 text-xl cursor-pointer text-blue">About me</li>
        <li className="mb-2 text-xl cursor-pointer text-blue">Services</li>
        <li className="mb-2 text-xl cursor-pointer text-blue">My Work</li>
        <li className="mb-2 text-xl cursor-pointer text-blue">Testimonials</li>
      </ul>
    </div>
    )
    :(<div></div>)
  }
  </div>
  </>
)
}
export default Nav;