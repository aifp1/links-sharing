import React, { useState } from 'react'
import Axios from 'axios'

const register = () => {
    const url = 'http://localhost:3000/new-user'
    const [data, setData] = useState({
        email: "",
        password: "",
    })

    function handle(e){
        const newData = { ... data }
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log("New Data: ", newData);
    }

    async function sendData(e){
        e.preventDefault();
        console.log(e)
        try {
            // await Axios({
            //     headers: {
            //         'Access-Control-Allow-Origin': '*',
            //         Accept: 'application/json',
            //         'Content-Type': 'application/json',
            //     },
            //     url: url,
            //     data: {
            //         email: data.email,
            //         password: data.password,
            //     },
            //     method: 'POST',
            // })
            await Axios.post(url, {
                email: data.email,
                password: data.password,
            },
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            }
            )            
        } catch (error) {
            console.error(error);            
        }

    }
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
        <div className="card">
            <div className="card-header">
                Registro
            </div>
            <div className="card-body">
                <form onSubmit={(e) => sendData(e)} id='form'>
                    <div className='mb-3'>
                        <label htmlFor="email" className='form-label'>Email addres</label>
                        <input onChange={(e) => handle(e)} type="email" className='form-control' id='email' value={data.email} aria-describedby='emailHelp' placeholder='example@example.com' />
                        <div id='emailHelp' className='form-text'>No compartiremos nunca su correo electronico</div>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password" className='form-label'>Password</label>
                        <input onChange={(e) => handle(e)} type="password" className='form-control' id='password' value={data.password} placeholder='password' />
                    </div>
                    <button type='submit' className='btn btn-primary'>Sign Up!</button>
                </form>
            </div>
        </div>
    </div>
  )
}

{/* <div className='row justify-content-center'>
                <div className="col-6">
                    <div className='mb-3'>
                        <label htmlFor="email" className='form-label'>Email addres</label>
                    </div>
                </div>
            </div> */}
export default register