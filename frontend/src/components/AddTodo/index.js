import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import TodoForm from "../TodoForm";
import useFetch from "../../hooks/useFetch";

const AddTodo = () => {
  const history = useHistory();
  const [path, setPath] = useState({
    url: null,
    data: null,
    type: "GET",
  });
  const { url, data, type } = path;
  const { response, loading, error } = useFetch(url, data, type);
  const [values, setValues] = useState({
    title: "",
    description: "",
    status: true,
  });
  const { title, description, status } = values;

  const handleChange = (name) => (event) => {
    const { name, value, type } = event.target;
    setValues({
      ...values,
      [name]: type === "checkbox" ? event.target.checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPath({ ...path, url: `/`, data: values, type: "POST" });
    setValues({
      title: "",
      description: "",
      status: true,
    });
  };

  useEffect(() => {
    if (response) {
      history.push("/");
    }
  }, [response, history]);

  return (
    <>
      {error && <div className="card-title text-danger">{error}</div>}
      {loading && <div className="card-title text-primary">Loading...</div>}
      <TodoForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        title={title}
        description={description}
        status={status}
      />
    </>
  );
};

export default AddTodo;
