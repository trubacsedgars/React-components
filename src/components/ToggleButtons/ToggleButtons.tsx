import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAlignCenter, faAlignJustify, faAlignLeft, faAlignRight,
} from '@fortawesome/free-solid-svg-icons';
import './ToggleButtons.scss';

const ToggleButtons = () => {
  const [toggledFirst, setToggledFirst] = useState(false);
  const [toggledSecond, setToggledSecond] = useState(false);
  const [toggledThird, setToggledThird] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const toggleLeftButton = () => {
    setToggledFirst(!toggledFirst);
  };

  const toggleCenterButton = () => {
    setToggledSecond(!toggledSecond);
  };

  const toggleRightButton = () => {
    setToggledThird(!toggledThird);
  };

  const disableButton = () => {
    setDisabled(true);
  };

  return (
    <>
      <div className="toggle">
        <button className="toggle__button">
          <FontAwesomeIcon
            onClick={toggleLeftButton}
            icon={faAlignLeft}
            color={toggledFirst ? '#FACC15' : '#6B7280'}
          />
        </button>
        <button className="toggle__button">
          <FontAwesomeIcon
            onClick={toggleCenterButton}
            icon={faAlignCenter}
            color={toggledSecond ? '#FACC15' : '#6B7280'}
          />
        </button>
        <button className="toggle__button">
          <FontAwesomeIcon
            onClick={toggleRightButton}
            icon={faAlignRight}
            color={toggledThird ? '#FACC15' : '#6B7280'}
          />
        </button>
        <button disabled={disabled} className="toggle__button_disabled">
          <FontAwesomeIcon
            onClick={disableButton}
            icon={faAlignJustify}
          />
        </button>
      </div>

      <div className={`${toggledFirst ? 'toggle__content-left' : 'toggle__content-justify'}`}>
        <span className="toggle__content">{toggledFirst ? 'toggle is on' : 'toggle is off'}</span>
      </div>
      <div className={`${toggledSecond ? 'toggle__content-center' : 'toggle__content-justify'}`}>
        <span className="toggle__content">{toggledSecond ? 'toggle is on' : 'toggle is off'}</span>
      </div>
      <div className={`${toggledThird ? 'toggle__content-right' : 'toggle__content-justify'}`}>
        <span className="toggle__content">{toggledThird ? 'toggle is on' : 'toggle is off'}</span>
      </div>
    </>
  );
};

export default ToggleButtons;
