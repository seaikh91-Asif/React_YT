import { useState } from "react"




const App = () => {
  const [num, setnum] = useState(55)

  const changeNum = () => {
    setnum( num + 1); 
  }

  return (
    <>
      <div className='parent'>
        <div className='container'>

            <h1>this is counter: {num} </h1>
            <h2>This is Counter:{num} </h2>
            <h3>this is counter: {num} </h3>
            <h4>this is counter: {num}</h4>
            <h5>this is counter: {num} </h5>
            <h6>this is counter: {num} </h6>

            <button onClick={changeNum} >Change Counter </button>
        </div>
    </div>
    </>
  )
}

export default App