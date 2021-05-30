import PropTypes from "prop-types";
import "./Counter.scss";
Counter.prototype = {
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onDelete: PropTypes.func,
  counter: PropTypes.object,
};
export default function Counter(props) {
  const { onIncrement, onDecrement, onDelete, counter } = props;

  const getBadgeClasses = () => {
    let classes = "badge bg-";
    classes += counter.value === 0 ? "warning" : "primary";
  };

  return (
    <div className="row item">
      <div className="col">
        <span class={getBadgeClasses()}>1</span>
      </div>
      <div className="col">
        <button class="btn btn-success" onClick={() => onIncrement(counter)}>
          Add
        </button>
      </div>
      <div className="col">
        <button class="btn btn-secondary" onClick={() => onDecrement(counter)}>
          Sub
        </button>
      </div>
      <div className="col">
        <button class="btn btn-danger" onClick={() => onDelete(counter.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
