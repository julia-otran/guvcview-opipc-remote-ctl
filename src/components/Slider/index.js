import { useCallback, useContext } from 'react';

import "./index.css";
import { submitContext } from '../../constants';
import { useDebouncer } from '../../hooks';

const Slider = ({ data }) => {
  const { onChange } = useContext(submitContext);

  const [value, setValue] = useDebouncer(data.ctrlValue, (value) => {
    onChange(data.ctrlName, value);
  }, [onChange, data.ctrlName]);

  const handleChange = useCallback((evt) => {
    setValue(evt.target.value);
  }, [setValue]);

  return <input className="slider" type="range" min={data.ctrlMin} max={data.ctrlMax} step={data.ctrlStep} value={value} onChange={handleChange} />;
};

export default Slider;
