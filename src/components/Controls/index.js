import "./index.css";

import Control from '../Control';

const Controls = ({ data }) => {

  return <div className="controls">
    {data && data.map(ctrl => (<Control data={ctrl} key={ctrl.ctrlName} />))}
  </div>;

};

export default Controls;
