import { memo } from "react";
import { Link } from "react-router-dom";

const Todo = ({ todo, deleteTodoHandler }) => {
  const { title, description, status, _id } = todo || {};
  return (
    <div className="card">
      <div className="row">
        <div className="col-md-6 text-center">
          <Link
            to={`/edit/${_id}`}
            className="border-0 btn btn-block text-primary"
          >
            Edit this Note
          </Link>
        </div>
        <div className="col-md-6 text-center">
          <button
            onClick={() => deleteTodoHandler(_id)}
            type="button"
            className="btn btn-block border-0 text-danger"
          >
            Delete this Note
          </button>
        </div>
      </div>
      <div
        className="card-header text-center border-0"
        style={{ background: !status ? "#E46161" : "#4E9549" }}
      >
        {title}
      </div>
      <div
        className="card-body text-center"
        style={{ background: !status ? "#FFC1C1" : "#BEFFB9" }}
      >
        {description}
      </div>
    </div>
  );
};

export default memo(Todo);
