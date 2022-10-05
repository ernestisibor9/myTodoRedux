import React from 'react'
import { useSelector } from 'react-redux'
import MyTask from './MyTask'

function Tasks() {
const taskObj = useSelector(store=>store.taskReducer)

  return (
    <div className='container'>
        <div className='row'>
            {
                taskObj.tasks.map((item, i)=>{
                    return (
                        <div className='col-md-10'>
                            <MyTask item = {item} i = {i}/>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Tasks