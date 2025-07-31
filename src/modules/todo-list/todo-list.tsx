import { useQuery } from "@tanstack/react-query";
import { todoListApi } from "./api";
import { useState } from "react";

export function TodoList() {
  const [page, setPage] = useState(1);
  const { data: todoItems, error, isPending } = useQuery({
    queryKey: ["tasks", "list", { page }],
    queryFn: meta => todoListApi.getTodoList({ page }, meta)
  });

  console.log(page);

  if (isPending) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="p-5 mx-auto max-w-[1200px] mt-10">
      <h1 className="text-3xl font-bold underline mb-5">Todo list</h1>
      <div className="flex flex-col gap-4">
        {todoItems.data.map(el => (
          <div className="border border-slate-300 rounded p-3" key={el.id}>
            {el.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => setPage(p => Math.max(p - 1, 1))}
          className="p-3 border rounded border-teal-500"
        >
          prev
        </button>
        <button
          onClick={() => setPage(p => Math.min(p + 1, todoItems.pages))}
          className="p-3 border rounded border-teal-500"
        >
          next
        </button>
      </div>
    </div>
  );
}
