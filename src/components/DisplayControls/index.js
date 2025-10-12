import "./index.css";

import Control from '../Control';

const DISPLAY_CONTROL_MAP = [
  {
    ctrlName: "FCC: Enable",
    ctrlValue: (data) => data.fcc.enable,
    ctrlMin: 0,
    ctrlMax: 1,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, fcc: { ...data.fcc, enable: value } })
  },
  {
    ctrlName: "FCC: Hue Red Min",
    ctrlValue: (data) => data.fcc.hr_hue_min,
    ctrlMin: 0,
    ctrlMax: 4095,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, fcc: { ...data.fcc, hr_hue_min: value } })
  },
  {
    ctrlName: "FCC: Hue Red Max",
    ctrlValue: (data) => data.fcc.hr_hue_max,
    ctrlMin: 0,
    ctrlMax: 4095,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, fcc: { ...data.fcc, hr_hue_max: value } })
  },
  {
    ctrlName: "FCC: Hue Green Min",
    ctrlValue: (data) => data.fcc.hg_hue_min,
    ctrlMin: 0,
    ctrlMax: 4095,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, fcc: { ...data.fcc, hg_hue_min: value } })
  },
  {
    ctrlName: "FCC: Hue Green Max",
    ctrlValue: (data) => data.fcc.hg_hue_max,
    ctrlMin: 0,
    ctrlMax: 4095,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, fcc: { ...data.fcc, hg_hue_max: value } })
  },
  {
    ctrlName: "FCC: Hue Blue Min",
    ctrlValue: (data) => data.fcc.hb_hue_min,
    ctrlMin: 0,
    ctrlMax: 4095,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, fcc: { ...data.fcc, hb_hue_min: value } })
  },
  {
    ctrlName: "FCC: Hue Blue Max",
    ctrlValue: (data) => data.fcc.hb_hue_max,
    ctrlMin: 0,
    ctrlMax: 4095,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, fcc: { ...data.fcc, hb_hue_max: value } })
  },
  {
    ctrlName: "FCC: Hue Cian Min",
    ctrlValue: (data) => data.fcc.hc_hue_min,
    ctrlMin: 0,
    ctrlMax: 4095,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, fcc: { ...data.fcc, hc_hue_min: value } })
  },
  {
    ctrlName: "FCC: Hue Cian Max",
    ctrlValue: (data) => data.fcc.hc_hue_max,
    ctrlMin: 0,
    ctrlMax: 4095,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, fcc: { ...data.fcc, hc_hue_max: value } })
  },
  {
    ctrlName: "FCC: Hue Magenta Min",
    ctrlValue: (data) => data.fcc.hm_hue_min,
    ctrlMin: 0,
    ctrlMax: 4095,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, fcc: { ...data.fcc, hm_hue_min: value } })
  },
  {
    ctrlName: "FCC: Hue Magenta Max",
    ctrlValue: (data) => data.fcc.hm_hue_max,
    ctrlMin: 0,
    ctrlMax: 4095,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, fcc: { ...data.fcc, hm_hue_max: value } })
  },
  {
    ctrlName: "FCC: Hue Yellow Min",
    ctrlValue: (data) => data.fcc.hy_hue_min,
    ctrlMin: 0,
    ctrlMax: 4095,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, fcc: { ...data.fcc, hy_hue_min: value } })
  },
  {
    ctrlName: "FCC: Hue Yellow Max",
    ctrlValue: (data) => data.fcc.hy_hue_max,
    ctrlMin: 0,
    ctrlMax: 4095,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, fcc: { ...data.fcc, hy_hue_max: value } })
  },
  {
    ctrlName: "FCC: Hue Red Gain",
    ctrlValue: (data) => data.fcc.hr_hue_gain,
    ctrlMin: -255,
    ctrlMax: 255,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, fcc: { ...data.fcc, hr_hue_gain: value } })
  },
  {
    ctrlName: "FCC: Hue Red Saturation",
    ctrlValue: (data) => data.fcc.hr_sat_gain,
    ctrlMin: -255,
    ctrlMax: 255,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, fcc: { ...data.fcc, hr_sat_gain: value } })
  },
  {
    ctrlName: "FCC: Hue Green Gain",
    ctrlValue: (data) => data.fcc.hg_hue_gain,
    ctrlMin: -255,
    ctrlMax: 255,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, fcc: { ...data.fcc, hg_hue_gain: value } })
  },
  {
    ctrlName: "FCC: Hue Green Saturation",
    ctrlValue: (data) => data.fcc.hg_sat_gain,
    ctrlMin: -255,
    ctrlMax: 255,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, fcc: { ...data.fcc, hg_sat_gain: value } })
  },
  {
    ctrlName: "FCC: Hue Blue Gain",
    ctrlValue: (data) => data.fcc.hb_hue_gain,
    ctrlMin: -255,
    ctrlMax: 255,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, fcc: { ...data.fcc, hb_hue_gain: value } })
  },
  {
    ctrlName: "FCC: Hue Blue Saturation",
    ctrlValue: (data) => data.fcc.hb_sat_gain,
    ctrlMin: -255,
    ctrlMax: 255,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, fcc: { ...data.fcc, hb_sat_gain: value } })
  },
  {
    ctrlName: "FCC: Hue Cian Gain",
    ctrlValue: (data) => data.fcc.hc_hue_gain,
    ctrlMin: -255,
    ctrlMax: 255,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, fcc: { ...data.fcc, hc_hue_gain: value } })
  },
  {
    ctrlName: "FCC: Hue Cian Saturation",
    ctrlValue: (data) => data.fcc.hc_sat_gain,
    ctrlMin: -255,
    ctrlMax: 255,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, fcc: { ...data.fcc, hc_sat_gain: value } })
  },
  {
    ctrlName: "FCC: Hue Magenta Gain",
    ctrlValue: (data) => data.fcc.hm_hue_gain,
    ctrlMin: -255,
    ctrlMax: 255,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, fcc: { ...data.fcc, hm_hue_gain: value } })
  },
  {
    ctrlName: "FCC: Hue Magenta Saturation",
    ctrlValue: (data) => data.fcc.hm_sat_gain,
    ctrlMin: -255,
    ctrlMax: 255,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, fcc: { ...data.fcc, hm_sat_gain: value } })
  },
  {
    ctrlName: "FCC: Hue Yellow Gain",
    ctrlValue: (data) => data.fcc.hy_hue_gain,
    ctrlMin: -255,
    ctrlMax: 255,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, fcc: { ...data.fcc, hy_hue_gain: value } })
  },
  {
    ctrlName: "FCC: Hue Yellow Saturation",
    ctrlValue: (data) => data.fcc.hy_sat_gain,
    ctrlMin: -255,
    ctrlMax: 255,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, fcc: { ...data.fcc, hy_sat_gain: value } })
  },
  {
    ctrlName: "Black and White Strech (BWS): Enable",
    ctrlValue: (data) => data.bws.enable,
    ctrlMin: 0,
    ctrlMax: 1,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, bws: { ...data.bws, enable: value } })
  },
  {
    ctrlName: "BWS: Min",
    ctrlValue: (data) => data.bws.min,
    ctrlMin: 0,
    ctrlMax: 255,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, bws: { ...data.bws, min: value } })
  },
  {
    ctrlName: "BWS: Black",
    ctrlValue: (data) => data.bws.black,
    ctrlMin: 0,
    ctrlMax: 255,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, bws: { ...data.bws, black: value } })
  },
  {
    ctrlName: "BWS: White",
    ctrlValue: (data) => data.bws.white,
    ctrlMin: 0,
    ctrlMax: 255,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, bws: { ...data.bws, white: value } })
  },
  {
    ctrlName: "BWS: Max",
    ctrlValue: (data) => data.bws.max,
    ctrlMin: 0,
    ctrlMax: 255,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, bws: { ...data.bws, max: value } })
  },
  {
    ctrlName: "BWS: Slope 0",
    ctrlValue: (data) => data.bws.slope0,
    ctrlMin: 0,
    ctrlMax: 1023,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, bws: { ...data.bws, slope0: value } })
  },
  {
    ctrlName: "BWS: Slope 1",
    ctrlValue: (data) => data.bws.slope1,
    ctrlMin: 0,
    ctrlMax: 1023,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, bws: { ...data.bws, slope1: value } })
  },
  {
    ctrlName: "BWS: Slope 2",
    ctrlValue: (data) => data.bws.slope2,
    ctrlMin: 0,
    ctrlMax: 1023,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, bws: { ...data.bws, slope2: value } })
  },
  {
    ctrlName: "BWS: Slope 3",
    ctrlValue: (data) => data.bws.slope3,
    ctrlMin: 0,
    ctrlMax: 1023,
    ctrlStep: 1,
    onChange: (data, value) => ({ ...data, bws: { ...data.bws, slope3: value } })
  },
];

const DisplayControls = ({ data, onChange }) => {
  return <div className="display-controls">
    {DISPLAY_CONTROL_MAP.map((ctrl) => (
      <Control
        data={{ ...ctrl, ctrlValue: ctrl.ctrlValue(data) }}
        key={ctrl.name}
        onChange={(_, value) => onChange(ctrl.onChange(data, Number(value)))}
      />
    ))}
  </div>;
};

export default DisplayControls;
