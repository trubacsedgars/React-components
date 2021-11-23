import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import './Accordion.scss';

const Accordion = () => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleAccordion = () => {
    if (isHidden) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  };

  return (
    <div className="accordion">
      <div
        className="accordion__action"
        onClick={toggleAccordion}
      >
        <span className="accordion__action-title">Accordion Item #1</span>
        <span>
          {isHidden ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />}
        </span>
      </div>
      <div className={`accordion__content ${isHidden ? 'hidden' : 'show'}`}>
        <p className="accordion__content-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default Accordion;
