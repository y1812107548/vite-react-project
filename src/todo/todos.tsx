let nextId = 0;

let calls = 0;

interface ToDo {
  id: number;
  text: string;
  completed: boolean;
}

export const createTodo=(text:string, completed:boolean = false )=>{
  return {
    id:nextId++,
    text,
    completed
  }
}

export const getVisibleTodos = (todos:ToDo[],showActive:boolean)=>{
  console.log(`getvisibleTodos() 被条用了 ${++calls}`);
  const activeTodos = todos.filter(t=>!t.completed);
  const visibleTodos = showActive ? activeTodos : todos;
  return visibleTodos
}

export const initialTodos = [
  createTodo("Learn React", true),
  createTodo("Learn TypeScript",true),
  createTodo("Learn Redux"),
  createTodo("Learn Vite"),
  createTodo("Learn Vite React"),
  createTodo("Learn Vite React TS"),
  createTodo("Learn Vite React TSX"),
]
