import React, { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const ref = useRef()
  const passwordRef = useRef()
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setpasswordArray] = useState([])

  const getPasswords = async () => {

    let req = await fetch("http://localhost:3000/")
    let passwords = await req.json()
    console.log(passwords);
    setpasswordArray(passwords)
  }

  useEffect(() => {
    getPasswords()

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
    if (ref.current.src.includes("icons/view.png")) {
      ref.current.src = "icons/hide.png"
      passwordRef.current.type = "text"
    } else {
      ref.current.src = "icons/view.png"
      passwordRef.current.type = "password"
    }
  }

  const savePassword = async () => {
    const site = form.site.trim()
    const username = form.username.trim()
    const password = form.password.trim()

    if (!site || !username || !password || site.length < 4 || username.length < 4 || password.length < 4) {
      toast.error('Please fill all fields with at least 4 characters.', {
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

    try {
      // If editing existing password (form.id exists), delete the old one first
      if (form.id) {
        await fetch("http://localhost:3000/", { 
          method: "DELETE", 
          headers: { "Content-Type": "application/json" }, 
          body: JSON.stringify({ id: form.id }) 
        })
      }

      // Create new entry with consistent ID
      const newEntry = { site, username, password, id: form.id || uuidv4() }
      
      // Save to database
      await fetch("http://localhost:3000/", { 
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify(newEntry) 
      })
      
      // Update local state
      if (form.id) {
        // Editing existing password - replace it in the array
        setpasswordArray(passwordArray.map(item => item.id === form.id ? newEntry : item))
      } else {
        // Adding new password - add to array
        setpasswordArray([...passwordArray, newEntry])
      }
      
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
    } catch (error) {
      console.error('Error saving password:', error)
      toast.error('Failed to save password. Please try again.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      })
    }
  }
  const editPassword = (id) => {
    console.log("editing password with id", id);
    const passwordToEdit = passwordArray.find(item => item.id === id)
    if (passwordToEdit) {
      setform({...passwordToEdit, id: id})
    }
  }
  const deletePassword = async (id) => {
    let c = confirm("Do you really want to delete this password?")
    if (c) {
      try {
        // Delete from database first
        await fetch("http://localhost:3000/", { 
          method: "DELETE", 
          headers: { "Content-Type": "application/json" }, 
          body: JSON.stringify({ id }) 
        })
        
        // Update local state after successful deletion
        setpasswordArray(passwordArray.filter(item => item.id !== id))
        
        toast.success('Password deleted successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } catch (error) {
        console.error('Error deleting password:', error)
        toast.error('Failed to delete password. Please try again.', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        })
      }
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

      <div className="p-3 md:mycontainer min-h-[84.7vh]">
        <h1 className='text-4xl text font-bold text-center'>
          <span className='text-green-700'>&lt;</span>
          Pass
          <span className='text-green-700'>OP/&gt;</span></h1>
        <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>
        <div className="text-black flex flex-col p-4 gap-8 items-center">
          <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='rounded-full bg-white border border-green-500 w-full p-4 py-1' type="text" name='site' id='site' />
          <div className="flex flex-col md:flex-row w-full justify-between gap-8">
            <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full bg-white border border-green-500 w-full p-4 py-1' type="text" name='username' id='username' />
            <div className="relative">
              <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full bg-white border border-green-500 w-full p-4 py-1' type="password" name='password' id='password' />
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
          {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden mb-10">
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
                      <span>{"*".repeat(item.password.length)}</span>
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