import { ReactElement, useEffect, useMemo, useState } from 'react'
import { initialTodos,createTodo, getVisibleTodos } from './todos';

interface ToDo {
  id: number;
  text: string;
  completed: boolean;
}
export default function ToDo() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive,setShowActive] = useState(false);
  const activeTodos = todos.filter(t=>!t.completed);
  // const visibleTodos = showActive ? activeTodos : todos;
  const visibleTodos = useMemo(
    () => getVisibleTodos(todos,showActive),
    [todos,showActive]
  )
  return (
    <>
      <label >
        <input type="checkbox"
          checked={showActive}
          onChange={e=> setShowActive(e.target.checked)}
        />
        只显示未完成的事项
      </label>
      <NewTodo onAdd={newTodo => setTodos([...todos,newTodo])}></NewTodo>
      <ul>
        {visibleTodos.map((todo)=>(
          <li key={todo.id}>
            {
              todo.completed ? <s>{todo.text}</s> : todo.text
            }
          </li>
        ))
        }
      </ul>
      <footer>
        {activeTodos.length} 项待办
      </footer>
    </>
  )
}


function NewTodo({ onAdd }: { onAdd: (arg:ToDo) => void }) {
  const [text,setText] = useState('');

  function handleAddClick(){
    setText('');
    onAdd(createTodo(text));
  }
  return (
    <>
      <input type="text" value={text} onChange={e=>setText(e.target.value)} />
      <button onClick={handleAddClick}>添加</button>
    </>
  )
}
