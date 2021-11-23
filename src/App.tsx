import React from 'react';
import './App.scss';
import Popover from './components/Popover/Popover';
import Accordion from './components/Accordion/Accordion';
import Tabs from './components/Tabs/Tabs';
import StarRating from './components/StarRating/StarRating';
import Switch from './components/Switch/Switch';
import ToggleButtons from './components/ToggleButtons/ToggleButtons';
import Dropdown from './components/Dropdown/Dropdown';
import Carousel from './components/Carousel/Carousel';

const App = () => (
  <>
    <Accordion />
    <Popover />
    <Tabs />
    <StarRating />
    <Switch />
    <ToggleButtons />
    <Dropdown />
    <Carousel />
  </>
);

export default App;
