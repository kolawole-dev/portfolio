import project1Img from  '../assets/project1.png'
import project2Img from  '../assets/project2.png'
import project3Img from  '../assets/project3.png'
import project4Img from  '../assets/project4.png'

const Project = () => {

  return (
    <>
      <div className="max-w-full m-20 font-serif bg-indigo-800">
          <div className="grid m-10 justify-items-center">
            <h1 className='mt-10 text-3xl text-white'>Projects </h1>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4 p-5">
                <div className="max-w-md mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl hover:animate-pulse">
                    
                    <div className="md:flex">
                        <div  className="p-8">
                            <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
                                Management Effect
                            </div>
                            <a href="/">Subheading</a>
                            <p className="mt-2 text-slate-500">
                              information about project
                            </p>
                        </div>
                        <div className="p-5 md:flex-shrink-0">
                          <img src={project1Img} alt="project1" width={150} height={150} />
                        </div>
                    </div>
                </div>
                <div className="max-w-md mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl hover:animate-pulse">
                    
                    <div className="md:flex">
                    <div className="p-5 md:shrink-0">
                          <img src={project2Img} alt="project1" width={150} height={150} />
                        </div>
                        <div  className="p-8">
                            <div className="text-sm font-semibold tracking-wide uppercase to-indigo-500">
                                Management Effect 2
                            </div>
                            <a href="/">Subheading</a>
                            <p className="mt-2 text-slate-500">
                              information about project
                            </p>
                        </div>
                       
                    </div>
                </div>
            </div>
            <hr/>
            <div className="grid grid-cols-2 gap-4 p-5">
                <div className="max-w-md mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl hover:animate-pulse">
                    
                    <div className="md:flex">
                        <div  className="p-8">
                            <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
                                Management Effect 3
                            </div>
                            <a href="/">Subheading</a>
                            <p className="mt-2 text-slate-500">
                              information about project
                            </p>
                        </div>
                        <div className="p-5 md:flex-shrink-0">
                          <img src={project3Img} alt="project1" width={150} height={150} />
                        </div>
                    </div>
                </div>
                <div className="max-w-md mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl hover:animate-pulse">
                    
                    <div className="md:flex">
                    <div className="p-5 md:shrink-0">
                          <img src={project4Img} alt="project1" width={150} height={150} />
                        </div>
                        <div  className="p-8">
                            <div className="text-sm font-semibold tracking-wide uppercase to-indigo-500">
                                Management Effect 4
                            </div>
                            <a href="/">Subheading</a>
                            <p className="mt-2 text-slate-500">
                              information about project
                            </p>
                        </div>
                       
                    </div>
                </div>
            </div>
          </div>
      </div>
    </>
  )
}


export default Project;