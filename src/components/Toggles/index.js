import { useCallback, useContext } from 'react';

import { submitContext } from '../../constants';
import "./index.css";

const Button = ({ value, name, active }) => {
  const { onChange } = useContext(submitContext);

  const handleClick = useCallback(() => {
    onChange(name, value);
  }, [name, value, onChange]);

  return <button type="button" onClick={handleClick} className={active ? "active" : ""}>{value.toString()}</button>;
}

const Toggles = ({ data }) => {
  const buttonValues = [];

  let value = data.ctrlMin;

  while (value <= data.ctrlMax) {
    buttonValues.push(value);
    value += data.ctrlStep;
  }

  return <div className="toggles">
  {buttonValues.map(val => (<Button value={val} name={data.ctrlName} key={val.toString()} active={val === data.ctrlValue} />))}
</div>
};

export default Toggles;
