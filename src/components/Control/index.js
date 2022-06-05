import Toggles from '../Toggles';
import Slider from '../Slider';

const Control = ({ data }) => {
  const possibleValueCount = Math.ceil((data.ctrlMax - (data.ctrlMin - data.ctrlStep)) / data.ctrlStep);
  const ControlComponent = possibleValueCount > 10 ? Slider : Toggles;
  const canControl = possibleValueCount > 1;

  return <div className="control">
    <p>{data.ctrlName}</p>

    {canControl && (
      <ControlComponent data={data} />
    )}
  </div>
}

export default Control;
