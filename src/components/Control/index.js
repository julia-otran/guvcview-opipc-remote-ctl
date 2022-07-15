import Toggles from '../Toggles';
import Slider from '../Slider';

const Control = ({ data }) => {
  const possibleValueCount = Math.ceil((data.ctrlMax - (data.ctrlMin - data.ctrlStep)) / data.ctrlStep);

  const ControlComponent = data.ctrlMenu || possibleValueCount <= 10 ? Toggles : Slider;

  const canControl = possibleValueCount > 1;

  return <div className="control">
    <p>{data.ctrlName}</p>

    {canControl && (
      <ControlComponent data={data} />
    )}
  </div>
}

export default Control;
