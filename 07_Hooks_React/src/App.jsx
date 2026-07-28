import { useState } from "react"




const App = () => {
  const [num, setnum] = useState(55)

  const changeNum = () => {
    setnum( num + 1); 
  }

  const changeNumm = () => {
    setnum(num - 1); 
  }

  const changeNummm = () => {
    setnum(0); 
  }

  return (
    <>
     <div className='parent'>
        <div className='container'>

            <h1>This is counter: {num} </h1>
            <h2>This is Counter:{num} </h2>
            <h3>This is counter: {num} </h3>
            <h4>This is counter: {num}</h4>
            <h5>This is counter: {num} </h5>
            <h6>This is counter: {num} </h6>

            <div className="buttons">
              <button onClick={changeNumm}>Decrease Counter</button>
            
            <button onClick={changeNummm}>Reset Value</button>
            <button onClick={changeNum} >Increase Counter </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default App