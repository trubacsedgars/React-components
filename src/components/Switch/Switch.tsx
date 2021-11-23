import './Switch.scss';
import { useState } from 'react';

const Switch = () => {
  const [toggled, setToggled] = useState(false);

  const toggleSwitch = (checked: boolean) => {
    setToggled(checked);
  };

  return (
    <>
      <div className="switch">
        <input
          className="switch__checkbox"
          id="switch__id"
          type="checkbox"
          checked={toggled}
          onChange={() => toggleSwitch(!toggled)}
        />
        <label
          style={{ backgroundColor: toggled ? '#22C55E' : '#71717A' }}
          className="switch__label"
          htmlFor="switch__id"
        >
          <span className="switch__slider" />
        </label>
      </div>
      <span className="switch__status">
        {`The switch is ${toggled ? 'on' : 'off'}.`}
      </span>
    </>
  );
};

export default Switch;
