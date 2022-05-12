// import React, { useState, useEffect } from 'react';

// const App = () => {

//   const [count, setCount] = useState(0);
//   const [value, setValue] = useState(0);

//   useEffect(()=>{
//     statements();
//   },[value])

//   function statements(){
//     setCount(count+1);
//     console.log(count+1);
//   }


//   return (
//     <>
//       <div>
//         <h2>{count}</h2>
//         <button onClick={()=>setValue(count+1)}>CHANGE</button>
//         {/* <input onChange={(e)=>{
//           setCount(e.target.value);
//           console.log(count)
//         }} /> */}
//       </div>
//     </>
//   )
// }

// export default App






//import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
import React, { useState } from 'react';
import New from './New.css';

function Example() {
  
  const [count, setCount] = useState(0);
  console.log(count);
  

  return (
    <div className='my'>
      <h2 className='main'>UseState Hook</h2>
      {count}
      <p> + </p>
      <button className='you' onClick={() => setCount(count + 10)}>
        Click
        
      </button>
      
      <p> - </p>
      <button className='he' onClick={() => setCount(count-5)}>
        onClick
      </button>
    </div>
    
  );
}
export default Example;