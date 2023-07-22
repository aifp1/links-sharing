import Axios from 'axios';
import React, { useEffect, useState } from 'react'

const showLinks = (props) => {
  const { userId } = props
  // console.log("Id showLinks: ", userId)
  const url = `http://localhost:3000/showLink/${userId}`
  const [data, setData] = useState();
  
  async function getData() {
    const result = await Axios.get(url);
    console.log("Resultado: ", result.data.data)
    setData(result.data.data);
    console.log("Data: ", data)    
  }
  
  useEffect(() => {
    getData()
    console.log("Data en useEffect: ", data)    
  }, []);
  

  // setData(resultRequest.data)
  
  return (
    <div>
      Links
        
    </div>
  )
}

export default showLinks