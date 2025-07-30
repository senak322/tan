import { useQuery } from "@tanstack/react-query";
import { todoListApi } from "./api";

export function TodoList() {
  const { data, error, isPending } = useQuery({
    queryKey: ["tasks", "list"],
    queryFn: todoListApi.getTodoList
  });

  if (isPending) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      Todo list
      {data.map(el => (
        <div key={el.id}>{el.text}</div>
      ))}
    </div>
  );
}
