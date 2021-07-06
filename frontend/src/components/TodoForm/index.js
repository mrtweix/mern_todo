import { memo } from "react";

const TodoForm = ({
  handleChange,
  handleSubmit,
  title,
  description,
  status,
}) => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="title_text">Title</label>
        <input
          type="text"
          className="form-control"
          id="title_text"
          name="title"
          value={title}
          onChange={handleChange(title)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description_text">Description</label>
        <input
          type="text"
          className="form-control"
          id="description_text"
          name="description"
          value={description}
          onChange={handleChange(description)}
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="completed"
          name="status"
          checked={status}
          onChange={handleChange(status)}
        />
        <label className="form-check-label" htmlFor="completed">
          Merk Complete
        </label>
      </div>
      <button type="button" onClick={handleSubmit} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default memo(TodoForm);
