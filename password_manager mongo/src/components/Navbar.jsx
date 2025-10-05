import React from 'react'

const Navbar = () => {
    return (
        <nav className=' bg-slate-800 text-white'>
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

                <div className="logo font-bold text-white text-2xl">
                    <span className='text-green-700'>&lt;</span>
                    Pass
                    <span className='text-green-700'>OP/&gt;</span>
                </div> 
                <button 
                    onClick={() => window.open('https://github.com/Pramodsnz01/Password-Manager/tree/main/password_manager%20mongo', '_blank')}
                    className='text-white bg-green-800 flex rounded-full my-5 justify-between items-center cursor-pointer ring-white ring-1 hover:bg-green-700 transition-colors'
                >
                    <img className='invert p-1.5 w-10' src="/icons/github.svg" alt="github logo" />
                    <span className='font-bold px-2'>View Source</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar