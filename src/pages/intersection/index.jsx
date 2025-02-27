import { useEffect, useRef, useState } from "react";

const TodosInfiniteScroll = () => {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    fetchTodos();
  }, [page]);

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_limit=13&_page=${page}`
      );
      const data = await res.json();
      setTodos((prev) => [...prev, ...data]);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [loading]);

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Infinite Scroll Todos</h2>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="p-2 border rounded bg-gray-100 shadow"
          >
            {todo.id}. {todo.title}
          </li>
        ))}
      </ul>
      <div ref={observerRef} className="h-10 mt-4 flex justify-center">
        {loading && <p>Loading more...</p>}
      </div>
    </div>
  );
};

export default TodosInfiniteScroll;
