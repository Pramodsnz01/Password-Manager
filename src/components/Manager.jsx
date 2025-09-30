import React, { useRef } from 'react'

const Manager = () => {
    const ref = useRef()
    const showPassword = () => {
      if(ref.current.src.includes("icons/hide.png")){
        ref.current.src = "icons/view.png"
      }else{
        ref.current.src = "icons/hide.png"
      }
    }
    
    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>

            <div className="mycontainer ">
                <h1 className='text-4xl text font-bold text-center'>
                    <span className='text-green-700'>&lt;</span>
                    Pass
                    <span className='text-green-700'>OP/&gt;</span></h1>
                <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>
                <div className="text-black flex flex-col p-4 gap-8 items-center">
                    <input placeholder='Enter Website URL' className='rounded-full bg-white border border-green-500 w-full p-4 py-1' type="text" />
                    <div className="flex w-full justify-between gap-8">
                        <input placeholder='Enter Username' className='rounded-full bg-white border border-green-500 w-full p-4 py-1' type="text" />
                        <div className="relative">
                            <input placeholder='Enter Password' className='rounded-full bg-white border border-green-500 w-full p-4 py-1' type="text" />
                            <span className='absolute right-[3px] top-[4px] cursor-pointer' onClick={showPassword}><img ref={ref} className='p-1' width={26} src="icons/view.png" alt="show" /></span>
                        </div>
                    </div>
                    <button className='flex justify-center items-center bg-green-600 hover:bg-green-700 rounded-full gap-2 px-8 py-2 w-fit border-2 border-green-900'>
                        <lord-icon
                            src="https://cdn.lordicon.com/gzqofmcx.json"
                            trigger="hover" >
                        </lord-icon>Add Password</button>
                </div>
            </div>
        </>
    )
}

export default Manager