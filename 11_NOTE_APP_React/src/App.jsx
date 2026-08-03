import { useState } from 'react'

function App() {

  const [title, settitle] = useState(''); 
  const [details, setDetails] = useState('');
  const [notes, setNotes] = useState([]); 

  const submitHandler = (e) => {
    e.preventDefault()

    if(title.trim() === '' || details.trim() === ''){
      return; 
    }

    const newNote = {
      id: Date.now(), 
      title: title, 
      details: details
    }

    setNotes([...notes, newNote]); 
     
    settitle('')
    setDetails('')
  }

  const deletHandler = (id) => {
  const coppyNote = [...notes]
  
  const index = coppyNote.findIndex((note) => note.id === id)
  
  coppyNote.splice(index, 1)
  
  setNotes(coppyNote)
}

  return (
    <>
      <div className='bg-[#151515] h-screen w-full text-white  flex justify-center items-center p-7  '>
          
        <div className='p-7 bg-[#252525] h-auto w-full rounded-4xl'>
          <h1 className='text-center m-5 text-5xl font-bold text-white'>NOTES APP</h1>
          
          <form onSubmit = {(e) => {
            submitHandler(e)
          }}
          className='flex flex-col gap-2 '>
            <div className='flex justify-between gap-2'>
              <div className='border-2 border-[#333333] rounded-lg flex flex-col h-95 w-[48%]'>

              <input type="text" 
              placeholder='Title' 
              className=' bg-[#3a3a3a] m-5 p-8 h-3.5 w-[92%] border-2 border-[#555555] rounded-lg box-border ' 
              value={title}
              onChange={(e) => {
                settitle(e.target.value)
              }}
              />

              <textarea type="text"
              placeholder='Enter Description...' 
              className='bg-[#3a3a3a] m-5 p-8 h-40 w-[92%] border-2 border-[#555555] rounded-lg box-border'

              value={details}
              onChange={(e) => {
                setDetails(e.target.value)
                
              }}
              />

              <button className='bg-[#d4af37] h-12 w-[92%] ml-5 block mx-auto shadow-[0_4px_15px_rgba(212,175,55,0.4)] rounded-xl text-white       font-bold hover:bg-[#c19d2e] transition-all duration-300 active:bg-[#a8862a]'>
                Save
              </button>
            </div>

          <div className='border-2 border-[#333333] rounded-lg flex flex-col h-95 w-[48%] overflow-y-auto'>
            <h4 className='p-4 text-xl font-bold text-white border-b-2 border-[#555555] w-[92%] mx-auto'>All Notes ({notes.length})</h4>

            <div className='flex flex-wrap gap-4'>

               {notes.map((note) => {
                  return (
                     <div key={note.id} className=' bg-[#3a3a3a] m-5 p-8 h-auto w-[92%] border-2 border-[#555555] rounded-lg box-border '>
                  <h2 className='text-xl font-bold text-white '>{note.title}</h2>
                  <p className='mt-2'>{note.details}</p>

                  <div className='flex gap-4 mt-4'>
                    <button className="bg-[#059669] text-white px-6 py-2 rounded-md font-medium shadow-[0_4px_12px_rgba(5,150,105,0.4)] hover:bg-[#047857] hover:shadow-[0_6px_15px_rgba(5,150,105,0.6)] active:scale-95 transition-all duration-300">
                      Edit
                    </button>

                    <button onClick={() => deletHandler(note.id)} 
                      className="bg-[#e11d48] text-white px-6 py-2 rounded-md font-medium shadow-[0_4px_12px_rgba(225,29,72,0.4)] hover:bg-[#be123c] hover:shadow-[0_6px_15px_rgba(225,29,72,0.6)] active:scale-95 transition-all duration-300">
                        Delete
                    </button>
                  </div>
                </div>
                  )
               })}
            </div>
          </div>
            </div> 
          </form>
        </div>
     </div>
    </>
  )
}


export default App
