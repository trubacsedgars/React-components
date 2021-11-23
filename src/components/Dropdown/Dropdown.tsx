import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import './Dropdown.scss';

const dropdownItems = ['Orange', 'Banana', 'Apple', 'Papaya', 'Pineapple', 'Watermelon'];

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);
  const [dropdownValue, setDropdownValue] = useState('Your favorite fruit');

  const toggleDropdown = (toggle: boolean) => {
    setIsActive(toggle);
  };

  const selectDropdownValue = (item: string) => {
    setDropdownValue(item);
  };

  return (
    <div className="dropdown">
      <div
        className="dropdown__button"
        onClick={() => toggleDropdown(!isActive)}
      >
        {dropdownValue}
        {isActive ? <span><FontAwesomeIcon icon={faCaretUp} /></span>
          : <span><FontAwesomeIcon icon={faCaretDown} /></span>}
      </div>
      {isActive && (
        <div className="dropdown__content">
          {dropdownItems.map((fruit) => (
            <div
              onClick={() => {
                selectDropdownValue(fruit);
                setIsActive(false);
              }}
              className="dropdown__item"
              key={fruit}
            >
              {fruit}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
