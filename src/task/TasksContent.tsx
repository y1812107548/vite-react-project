import React, { createContext, useContext, useReducer } from "react";
interface Task {
  id: number;
  text: string;
  done: boolean;
}
type TaskAction =
  | { type: "added"; id: number; text: string }
  | { type: "changed"; task: Task }
  | { type: "deleted"; id: number };
const TasksContext = createContext<null | Task[]>(null);

const TasksDispatchContext = createContext<null | ((action: TaskAction) => void)>(null);

export function TasksContent({ children }: { children: React.ReactNode }): React.ReactNode {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

function tasksReducer(tasks: Task[], action:TaskAction) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action" + action);
    }
  }
}

const initialTasks: Task[] = [
  { id: 0, text: "哲学家之路", done: true },
  { id: 1, text: "参观寺庙", done: false },
  { id: 2, text: "喝抹茶", done: false },
];
