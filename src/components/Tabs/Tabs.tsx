import { useState } from 'react';
import './Tabs.scss';

const tabsNav = [
  {
    tabButton: 'Home',
    content: 'How sweet and lovely dost thou make the shame Which, '
      + 'like a canker in the fragrant rose, Doth spot the beauty of thy budding name! O! '
      + 'in what sweets dost thou thy sins enclose. That tongue that tells the story of thy '
      + 'days, Making lascivious comments on thy sport, Cannot dispraise, but in a kind of praise; '
      + 'Naming thy name, blesses an ill report. O! what a mansion have those vices got Which for their '
      + 'habitation chose out thee,',
  },
  {
    tabButton: 'Profile',
    content: 'Music to hear, why hear\'st thou music sadly? '
      + 'Sweets with sweets war not, joy delights in joy: Why lov\'st thou that which thou '
      + 'receiv\'st not gladly, Or else receiv\'st with pleasure thine annoy? If the true concord '
      + 'of well-tuned sounds, By unions married, do offend thine ear, They do but sweetly chide thee, '
      + 'who confounds In singleness the parts that thou shouldst bear. Mark how one string, sweet husband to another, '
      + 'Strikes each in each by mutual ordering;',
  },
  {
    tabButton: 'Contact',
    content: 'Test',
  },
];

const Tabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeActiveIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="tabs">
      <div className="tabs__wrapper">
        {tabsNav.map((item, index) => (
          <button
            key={item.tabButton}
            className="tabs__buttons"
            onClick={() => changeActiveIndex(index)}
            style={{ backgroundColor: index === activeIndex ? '#EF4444' : '#3B82F6' }}
          >
            {item.tabButton}
          </button>
        ))}
      </div>

      <div>
        {tabsNav.map((item, index) => (
          index === activeIndex ? (
            <p key={item.tabButton} className="tabs__content">{item.content}</p>
          ) : ''))}
      </div>
    </div>
  );
};

export default Tabs;
