import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { TasksContent } from "./TasksContent";

export default function TaskApp() {
  return (
    <div>
        <TasksContent>
          <h1>在京都休息一天</h1>
          <AddTask />
          <TaskList />
        </TasksContent>
    </div>
  );
}
