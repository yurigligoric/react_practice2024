import React, {useState} from 'react'

function Counter() {
    var [counter, setCounter] = useState(0)

    const handleIncrement = () =>{


        return setCounter(counter + 1)

    }

    const handleDecrement = () =>{


        return setCounter(counter - 1)

    }


    return (
    <div>
        <div>{counter}</div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        
        
        
    </div>
  )
}

export default Counter