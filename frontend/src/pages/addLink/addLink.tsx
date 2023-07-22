import Axios from "axios";
import React, { useState } from "react";

const addLink = (props) => {
    const { userId } = props
    const url = `http://localhost:3000/addLink/${userId}`
    const [verficated, setVerficated] = useState(false)
    const [data, setData] = useState({
        link: "",
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
            const result = await Axios.post(url, {
                link: data.link,
            },
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            }
            )
            setVerficated(result.data.verificated)
            setData({
                link: ''
            })
            // onLogin(result.data.id)            
        } catch (error) {
            console.error(error);            
        }

    }
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card">
        <div className="card-header">Add Link</div>
        <div className="card-body">
          <form onSubmit={(e) => sendData(e)} id="form">
            <div className="mb-3">
              <label htmlFor="text" className="form-label">
                Link
              </label>
              <input
                onChange={(e) => handle(e)}
                type="text"
                className="form-control"
                id="link"
                value={data.link}
                placeholder="https://www.frontendmentor.io/challenges/linksharing-app-Fbt7yweGsT"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add new link
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default addLink;
