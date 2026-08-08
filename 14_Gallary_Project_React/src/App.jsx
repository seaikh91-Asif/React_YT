import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)
    setUserData(response.data)
  }

  useEffect(function() {
      getData()
    }, [index])

  let printUserData = <h3 className='text-gray-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loding...</h3>

  if(userData.length > 0) {
    printUserData = userData.map(function(elem, idx) {
      return <a className='mt-5' href={elem.url} target='_blank'>
        <div key={idx}> 
        <div className='h-45 bg-white overflow-hidden rounded-2xl w-55'>
        <img className='h-full w-full object-cover' src={elem.download_url} alt="" />
      </div>
      <h2 className=' mt-3 text-center font-bold text-lg'>{elem.author}</h2>
      </div>
      </a>
    })
  }


  return (
    <div className='bg-black overflow-auto text-white p-4 h-screen '>
     
      <div className='flex h-[80%] flex-wrap gap-5 justify-center'>
        {printUserData}
      </div>

      <div className='flex justify-center items-center gap-6 m-7'>
        <button 
        
        onClick={ () => {
          if(index > 1) {
            setIndex(index - 1);
            setUserData([]); 
          }   
        }}
        className='bg-amber-600 text-white rounded-2xl px-4 py-2.5 cursor-pointer active:scale-95'>Prev</button>
         <h1 className=''>Current Page: {index}</h1>
        <button 
        onClick={() => {
          setIndex(index + 1); 
          setUserData([]); 
        }}
        className='bg-amber-600 text-white rounded-2xl px-4 py-2.5 cursor-pointer active:scale-95'>Next </button>
      </div>

    </div>
       
  )
}

export default App
