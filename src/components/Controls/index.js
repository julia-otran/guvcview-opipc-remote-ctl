import "./index.css";

import Control from '../Control';
import { submitContext } from '../../constants';
import { useContext } from "react";

const Controls = ({ data }) => {
  const { onChange } = useContext(submitContext);

  return <div className="controls">
    {data && data.map(ctrl => (
	<Control data={ctrl} key={ctrl.ctrlName} onChange={onChange} />
    ))}
  </div>;

};

export default Controls;
