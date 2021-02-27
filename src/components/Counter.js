import React, { useState, useEffect } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(`you clicked ${count} times`);
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click!</button>
        </div>
    )
}

export default Counter