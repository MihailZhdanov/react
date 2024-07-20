import React, { useState } from 'react'

const Counter = function(){
    const[count, setCount] = useState(0)

    function plus(){
        setCount(count+1)
      }
      function minus(){
        setCount(count-1)
      }

    return(
        <div>
            <h2>Счетчик</h2>
            <h1>{count}</h1>
            <button onClick={plus}>плюс</button>
            <button onClick={minus}>минус</button>
        </div>
    )
}

export default Counter;