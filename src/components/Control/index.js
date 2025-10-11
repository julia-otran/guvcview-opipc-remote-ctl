import Slider from '../Slider';
import Toggles from '../Toggles';

const Control = ({ data, onChange }) => {
  const possibleValueCount = Math.ceil((data.ctrlMax - (data.ctrlMin - data.ctrlStep)) / data.ctrlStep);

  const ControlComponent = data.ctrlMenu || possibleValueCount <= 10 ? Toggles : Slider;

  const canControl = possibleValueCount > 1;

  return <div className="control">
    <p>{data.ctrlName}</p>

    {canControl && (
      <ControlComponent data={data} onChange={onChange} />
    )}
  </div>
}

export default Control;
