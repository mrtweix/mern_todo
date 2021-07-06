import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import TodoForm from "../TodoForm";
import useFetch from "../../hooks/useFetch";

const EditTodo = () => {
  const history = useHistory();
  const { id } = useParams();
  const [path, setPath] = useState({
    url: `/${id}`,
    data: null,
    type: "GET",
  });
  const { url, data, type } = path;
  const { loading, error, response } = useFetch(url, data, type);
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

  useEffect(() => {
    if (response) {
      setValues(response);
    }
  }, [response]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPath({ ...path, url: `/${id}`, data: values, type: "PUT" });
    setTimeout(() => {
      history.push("/");
    }, 1500);
  };
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

export default EditTodo;
