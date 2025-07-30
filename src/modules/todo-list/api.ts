
const BASE_URL = "http://localhost:3000"

export type TodoTdo = {
  id: string;
  text: string;
  done: boolean;
};

export const todoListApi = {
    getTodoList: () => {
        return fetch(`${BASE_URL}/tasks`).then(res => res.json() as Promise<TodoTdo[]>) 
    }
}