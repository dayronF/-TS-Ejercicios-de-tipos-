/*type state = "finished" | "pending" | "in_progress";
type Task = {
  id: number;
  description: string;
  isCompleted: boolean;
  state: state;
};

function getActiveTasks(tasks: Task[]): Task[] {
  return tasks.filter(
    (t) => t.state === "pending" || t.state === "in_progress",
  );
}

const task1: Task = {
  id: 1,
  description: "Haciendo la tarea de TypeScript",
  isCompleted: false,
  state: "in_progress",
};
const task2: Task = {
  id: 2,
  description: "Hacer la tarea de JavaScript",
  isCompleted: false,
  state: "pending",
};
const task3: Task = {
  id: 3,
  description: "Listo",
  isCompleted: true,
  state: "finished",
}; */
