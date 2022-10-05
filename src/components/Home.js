import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
    const taskObj = useSelector(store=>store.taskReducer)
    const countObj = useSelector(store=>store.countReducer)
  return (
    <div>
        <h1>This is my Home page</h1>
        <h2>The number of item in the cart is {taskObj.tasks.length}</h2>
        <h3>The count is {countObj.count}</h3>
    </div>
  )
}

export default Home