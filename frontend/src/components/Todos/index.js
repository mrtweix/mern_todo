import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Todo from "../Todo";

const Todos = () => {
  const [path, setPath] = useState({
    url: "/",
    data: null,
    type: "GET",
  });
  const { url, data, type } = path;
  const { response, loading, error } = useFetch(url, data, type);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (response) {
      setTodos((todos) => response);
    }
  }, [response]);

  const deleteTodoHandler = (id) => {
    setPath({ ...path, url: `/${id}`, data: null, type: "DELETE" });
  };

  return (
    <div className="row">
      {error && <p>{error?.message}</p>}
      {loading ? (
        <h5 className="text-center">Loading...</h5>
      ) : (
        todos?.map((todo, index) => (
          <div key={todo._id} className="col-md-4 mt-3">
            <Todo todo={todo} deleteTodoHandler={deleteTodoHandler} />
          </div>
        ))
      )}
    </div>
  );
};

export default Todos;
