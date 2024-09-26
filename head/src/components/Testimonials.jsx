import T1 from '../assets/t1.jpg'
import T2 from '../assets/t2.jpg'
import T3 from '../assets/t3.jpg'
import T4 from '../assets/t4.jpg'

const Testimonials = () => {

  return (
    <div className="flex m-20 font-serif bg-indigo-800 ssm:flex-col lg:flex-row">
      
      <div className="relative p-8 overflow-auto rounded-xl hover:animate-pulse">
        
        <div className="relative flex items-center max-w-md gap-6 mx-auto overflow-hidden bg-white shadow-lg rounded-xl ring-1 ring-black/5 dark:bg-slate-800 dark:highlight-white/5">
          
          <img src={T1} alt="" className='absolute rounded-full shadow-lg h-28 -left-6 w-28' />
          <div className='min-w-0 py-5 pr-5 pl-28'>
            <div className="text-sm font-medium truncate text-slate-900 sm:text-base dark:text-slate-200 ">Name Goes here</div>
            <div className='text-sm font-medium leading-tight truncate text-slate-500 sm:text-base dark:text-slate-400'>
              Assistant Manager
            </div>
          </div>
        </div>
      </div>
      <div className="relative p-8 overflow-auto rounded-xl hover:animate-pulse">
        
        <div className="relative flex items-center max-w-md gap-6 mx-auto overflow-hidden bg-white shadow-lg rounded-xl ring-1 ring-black/5 dark:bg-slate-800 dark:highlight-white/5">
          
          <img src={T2} alt="" className='absolute rounded-full shadow-lg h-28 -left-6 w-28' />
          <div className='min-w-0 py-5 pr-5 pl-28'>
            <div className="text-sm font-medium truncate text-slate-900 sm:text-base dark:text-slate-200 ">Name Goes here</div>
            <div className='text-sm font-medium leading-tight truncate text-slate-500 sm:text-base dark:text-slate-400'>
              Assistant Manager
            </div>
          </div>
        </div>
      </div>
      <div className="relative p-8 overflow-auto rounded-xl hover:animate-pulse">
        
        <div className="relative flex items-center max-w-md gap-6 mx-auto overflow-hidden bg-white shadow-lg rounded-xl ring-1 ring-black/5 dark:bg-slate-800 dark:highlight-white/5">
          
          <img src={T3} alt="" className='absolute rounded-full shadow-lg h-28 -left-6 w-28' />
          <div className='min-w-0 py-5 pr-5 pl-28'>
            <div className="text-sm font-medium truncate text-slate-900 sm:text-base dark:text-slate-200 ">Name Goes here</div>
            <div className='text-sm font-medium leading-tight truncate text-slate-500 sm:text-base dark:text-slate-400'>
              Assistant Manager
            </div>
          </div>
        </div>
      </div>
      <div className="relative p-8 overflow-auto rounded-xl hover:animate-pulse">
        
        <div className="relative flex items-center max-w-md gap-6 mx-auto overflow-hidden bg-white shadow-lg rounded-xl ring-1 ring-black/5 dark:bg-slate-800 dark:highlight-white/5">
          
          <img src={T4} alt="" className='absolute rounded-full shadow-lg h-28 -left-6 w-28' />
          <div className='min-w-0 py-5 pr-5 pl-28'>
            <div className="text-sm font-medium truncate text-slate-900 sm:text-base dark:text-slate-200 ">Name Goes here</div>
            <div className='text-sm font-medium leading-tight truncate text-slate-500 sm:text-base dark:text-slate-400'>
              Assistant Manager
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials