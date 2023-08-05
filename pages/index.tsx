// import Image from 'next/image'
import { useState } from 'react'
export default function Home() {
  const [activity, setActivity] = useState([])
  async function getActivity() {
    const response = await fetch('https://www.boredapi.com/api/activity/')
    const data = await response.json()
    setActivity(data)
  }
  // document.querySelector('.width')?.style?.width(activity['accessibility' as any]*100 + 'px')
  
  return (
    <div className='h-screen overflow-y-hidden w-full bg-neutral-950 md:p-8 selection:text-zinc-100 selection:bg-neutral-800'>
      <header className='py-12 lg:h-[33%] text-center flex-col items-center px-8 sm:flex sm:flex-row bg-red-300 text-neutral-800 md:rounded-t-xl'>
        <h1 className='2xl:text-8xl sm:grow lg:text-6xl sm:pe-4 text-4xl font-bold col-span-4'>I&apos;m too bored right now</h1>
        <h2 className='flex-1 2xl:text-3xl lg:text-2xl text-xl font-semibold sm:text-start text-center sm:ms-4 text-zinc-100 sm:border-l-4 ps-8'>What can I do to get some fun?</h2>
      </header>
      <main className='justify-center sm:grid grid-cols-3 h-full md:h-[67%]'>
        <div className='bg-blue-400 md:rounded-bl-xl p-8 flex justify-center'>
        <button className='lg:text-2xl md:text-xl h-fit p-4 md:py-4 font-medium bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:border-yellow-400 ease-in duration-150 hover:text-neutral-800 rounded-full lg:px-8' onClick={() => getActivity()}>Give me something to do!</button>
        </div>
        <div className='bg-green-400 h-full md:rounded-br-xl col-span-2'>
          {activity['activity' as any] !== undefined ? 
          <div className='text-neutral-800 xl:text-3xl text-2xl text-center p-8'>
            <p className='font-semibold xl:text-4xl text-3xl'>{activity['activity' as any]}</p>
            <div className='w-full xl:h-1 h-[2px] bg-neutral-800 rounded-full my-3 md:my-5'></div>
              {/* <div className={`bg-neutral-800 rounded-xl h-4`}></div> */}
            <div className='flex items-start gap-4 flex-col'>
              {/* <span>{activity['accessibility' as any]*100}</span> */}
              <span>Accessibility: {activity['accessibility' as any]*10}</span>
              <span className='inline capitalize'>Type: {activity['type' as any]}</span>
              <span>Participants: {activity['participants' as any]}</span>
              <span>Price: {activity['price' as any]*10}</span>
            </div>
          </div>
          : ''}
        </div>
      </main>
    </div>
  )
}
