import axios from 'axios'
import { useState } from 'react'


function App() {

  const [data, setdata] = useState([])

  const getDate = async () => {
   const response = await axios.get('https://picsum.photos/v2/list')


   setdata(response.data); 
  }
 

  return (
    <>
      <button onClick={getDate}>get data</button> 
    </>
  )
}

export default App
