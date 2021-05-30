import "./Counter.scss";
export default function Counter() {
  const getBadge = () => {
    let classes = "badge bg-"
    classes +=
  }
  return (
    <div className="row item">
      <h2 className="col-2">
        <span class="badge bg-secondary">1</span>
      </h2>
      <div className="col-2">
        <button type="button" class="btn btn-success">
          Add
        </button>
      </div>
      <div className="col-2">
        <button type="button" class="btn btn-secondary">
          Sub
        </button>
      </div>
      <div className="col-1">
        <button type="button" class="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
}
