import { useState } from 'react'

function App() {

   localStorage.clear() 

   localStorage.setItem('user', 'the value')
   localStorage.setItem('key', 'value')

    const user = localStorage.getItem('key'); 
    console.log(user); 

   localStorage.removeItem(user)
  return (
    <>
      
    </>  
  )
}
       
export default App


 
/*
  Note: ther is four methedoe in local storage concepe. 
        1) localStorage.getItem(): to get and item from locan storage. 
        2) localStorage.setItem(): to set any item to local storage.
        3)localStorage.clear(): to clear the whole local storage. 
        4) localStorage.remove(): to remove any element from local storage. 

  
  To store and array of object format data: 
    -> conver the data to JSON.Stringify() convert the data to string format and 
    Retraving the data JSON.parse(). 

    ----LOCAL STORAGE COMPLETE----
  
*/
