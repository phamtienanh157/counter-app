import PropsType from "prop-types";
import Counter from "./Counter";
CounterList.prototype = {
  handleInc: PropsType.func,
  handleDec: PropsType.func,
  handleDel: PropsType.func,
  counters: PropsType.array,
  reload: PropsType.func,
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
