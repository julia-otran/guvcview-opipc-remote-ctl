import "./index.css";

import { useCallback } from 'react';
import { useDebouncer } from '../../hooks';

const Slider = ({ data, onChange }) => {
  const [value, setValue] = useDebouncer(data.ctrlValue, (value) => {
    onChange(data.ctrlName, value);
  }, [onChange, data.ctrlName]);

  const handleChange = useCallback((evt) => {
    setValue(evt.target.value);
  }, [setValue]);

  return <input className="slider" type="range" min={data.ctrlMin} max={data.ctrlMax} step={data.ctrlStep} value={value} onChange={handleChange} />;
};

export default Slider;
