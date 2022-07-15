import { useCallback, useContext } from 'react';

import { submitContext } from '../../constants';
import "./index.css";

const Button = ({ value, name, active, children }) => {
  const { onChange } = useContext(submitContext);

  const handleClick = useCallback(() => {
    onChange(name, value);
  }, [name, value, onChange]);

  return <button type="button" onClick={handleClick} className={active ? "active" : ""}>{children}</button>;
}

const Toggles = ({ data }) => {
  const buttonValues = [];

  if (data.ctrlMenu) {
    data.ctrlMenu.forEach(menu => {
      buttonValues.push({ name: menu.menuItemName, value: menu.menuItemValue });
    });
  } else {
    let value = data.ctrlMin;

    while (value <= data.ctrlMax) {
      buttonValues.push({ value, name: value });
      value += data.ctrlStep;
    }
  }

  return <div className="toggles">
  {buttonValues.map(val => (<Button value={val.value} name={data.ctrlName} key={val.value.toString()} active={val.value === data.ctrlValue}>{val.name}</Button>))}
</div>
};

export default Toggles;
