import PropTypes from "prop-types";
import Counter from "../Counter/Counter";

CounterList.prototype = {
  handleInc: PropTypes.func,
  handleDec: PropTypes.func,
  handleDel: PropTypes.func,
  counters: PropTypes.array,
  reload: PropTypes.func,
};

export default function CounterList(props) {
  const { handleInc, handleDec, handleDel, counters, reload } = props;

  return (
    <div>
      <button class="btn btn-outline-primary" onClick={reload}>
        Reload
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onIncrement={handleInc}
          onDecrement={handleDec}
          onDelete={handleDel}
        />
      ))}
    </div>
  );
}
