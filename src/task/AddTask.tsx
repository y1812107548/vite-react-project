import { useState } from 'react'
import { useTasksDispatch } from './TasksContent'
export default function AddTask() {
  const [text, setText] = useState('')
  const dispatch = useTasksDispatch()
  return (
    <>
      <input type="text" value={text} onChange={e => setText(e.target.value)} style={{height: '30px'}}/>

      <button onClick={()=>{
        setText('');
        dispatch && dispatch({
          type:'added',
          id:nextId++,
          text
        })
      }}>添加</button>
    </>
  )
}

let nextId = 3
