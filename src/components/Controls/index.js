import Control from '../Control';
import "./index.css";

const Controls = ({ data }) => {

  return <div className="controls">
    {data.map(ctrl => (<Control data={ctrl} key={ctrl.ctrlName} />))}
  </div>;

};

export default Controls;
