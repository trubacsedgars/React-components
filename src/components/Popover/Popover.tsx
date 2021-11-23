import { useState } from 'react';
import './Popover.scss';

const Popover = () => {
  const [isHidden, setIsHidden] = useState(false);

  const contentIsVisible = () => {
    setIsHidden(true);
  };

  const contentIsHidden = () => {
    setIsHidden(false);
  };

  return (
    <div className="popover">
      <button
        className="popover__button"
        onMouseEnter={contentIsVisible}
        onMouseLeave={contentIsHidden}
      >
        Hover on me!
      </button>
      {isHidden ? 'Redzams' : ''}
    </div>
  );
};

export default Popover;
