import React, { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const ref = useRef()
  const passwordRef = useRef()
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setpasswordArray] = useState([])

  useEffect(() => {
    let passwords = localStorage.getItem("passwords")
    if (passwords) {
      setpasswordArray(JSON.parse(passwords))
    }
  }, [])

  const copyText = (text) => {
    toast.success('Copied to clipboard!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });
    navigator.clipboard.writeText(text)
  }

  const showPassword = () => {
    passwordRef.current.type = "text"
    if (ref.current.src.includes("icons/hide.png")) {
      ref.current.src = "icons/view.png"
      passwordRef.current.type = "password"
    } else {
      ref.current.src = "icons/hide.png"
      passwordRef.current.type = "text"
    }
  }

  const savePassword = () => {
    const site = form.site.trim()
    const username = form.username.trim()
    const password = form.password.trim()

    if (!site || !username || !password) {
      toast.error('Please fill out all fields before saving.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      })
      return
    }

    const newEntry = { site, username, password, id: uuidv4() }
    const updatedPasswords = [...passwordArray, newEntry]
    setpasswordArray(updatedPasswords)
    localStorage.setItem("passwords", JSON.stringify(updatedPasswords))
    setform({ site: "", username: "", password: "" })
    toast.success('Password saved successfully!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    })
  }
  const editPassword = (id) => {
    console.log("editing pss with id", id);
    setform(passwordArray.filter(i => i.id === id)[0])
    setpasswordArray(passwordArray.filter(item => item.id !== id)) 
  }
  const deletePassword = (id) => {
    let c = confirm("Do you really want to delete this password?")
    if (c) {
      setpasswordArray(passwordArray.filter(item => item.id !== id))
      localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
      toast.success('Password deleted successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });
    } 
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }



  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      // transition={Bounce}
      />
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>

      <div className="mycontainer ">
        <h1 className='text-4xl text font-bold text-center'>
          <span className='text-green-700'>&lt;</span>
          Pass
          <span className='text-green-700'>OP/&gt;</span></h1>
        <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>
        <div className="text-black flex flex-col p-4 gap-8 items-center">
          <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='rounded-full bg-white border border-green-500 w-full p-4 py-1' type="text" name='site' />
          <div className="flex w-full justify-between gap-8">
            <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full bg-white border border-green-500 w-full p-4 py-1' type="text" name='username' />
            <div className="relative">
              <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full bg-white border border-green-500 w-full p-4 py-1' type="password" name='password' />
              <span className='absolute right-[3px] top-[4px] cursor-pointer' onClick={showPassword}><img ref={ref} className='p-1' width={26} src="icons/view.png" alt="show" /></span>
            </div>
          </div>
          <button onClick={savePassword} className='flex justify-center items-center bg-green-600 hover:bg-green-700 rounded-full gap-2 px-8 py-2 w-fit border-2 border-green-900'>
            <lord-icon
              src="https://cdn.lordicon.com/gzqofmcx.json"
              trigger="hover" >
            </lord-icon>Save</button>
        </div>
        <div className="passwords">
          <h2 className='font-bold text-2xl py-3'>Your Passwords</h2>
          {passwordArray.length === 0 && <div className="">No Passwords To Show</div>}
          {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden">
            <thead className='bg-green-800 text-white'>
              <tr>
                <th className='py-2'>Site</th>
                <th className='py-2'>Username</th>
                <th className='py-2'>Password</th>
                <th className='py-2'>Actions</th>
              </tr>
            </thead>
            <tbody className='bg-green-200'>
              {passwordArray.map((item, index) => {
                return <tr key={index}>
                  <td className='py-2 border border-white text-center'>
                    <div className="flex items-center justify-center">
                      <a href={item.site} target='_blank'>{item.site}</a>
                      <div className="size-7 cursor-pointer lordiconcopy" onClick={() => { copyText(item.site) }}>
                        <lord-icon
                          style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover" >
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className='py-2 border border-white text-center  '>
                    <div className="flex items-center justify-center">
                      <span>{item.username}</span>
                      <div className="size-7 cursor-pointer lordiconcopy" onClick={() => { copyText(item.username) }}>
                        <lord-icon
                          style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover" >
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className='py-2 border border-white text-center  '>
                    <div className="flex items-center justify-center">
                      <span>{item.password}</span>
                      <div className="size-7 cursor-pointer lordiconcopy" onClick={() => { copyText(item.password) }}>
                        <lord-icon
                          style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover" >
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className='py-2 border border-white text-center  '>
                    <span className='cursor-pointer mx-1.5' onClick={() => { editPassword(item.id) }}>
                      <lord-icon
                        src="https://cdn.lordicon.com/gwlusjdu.json"
                        style={{ "width": "25px", "height": "25px", "paddingTop": "4px", "paddingLeft": "3px" }}
                        trigger="hover" >
                      </lord-icon>
                    </span>
                    <span className='cursor-pointer mx-1.5' onClick={() => { deletePassword(item.id) }}>
                      <lord-icon
                        src="https://cdn.lordicon.com/skkahier.json"
                        style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                        trigger="hover" >
                      </lord-icon>
                    </span>
                  </td>
                </tr>
              })}
            </tbody>
          </table>}
        </div>
      </div>
    </>
  )
}

export default Manager