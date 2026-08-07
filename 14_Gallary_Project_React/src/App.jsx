import { useState } from 'react'
import axios from 'axios'

function App() {

  const [userData, setUserData] = useState([]); 

  const getDate = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=30')

    setUserData(response.data); 

    console.log(response.data); 
  }

  let printUserData = 'No User Available'

  if(userData.length > 0){
    printData = userData.map(function(elem, idx){

      return <div>
        <img src="{elem.downlode_url}" alt="" />
      </div>
    })
  }
  

  return (
    <div className='bg-black h-screen p-4 text-white'>
      <button 
      onClick={getDate} 
      className='bg-green-600 m-5 p-2 rounded text-white active:scale-95'> get data</button>

      

    </div> 
  )
}

export default App
