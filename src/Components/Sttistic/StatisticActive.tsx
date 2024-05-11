import React, { useState } from 'react';
import icons from '../../img/symbol-defs.svg';
import { FaRegHourglass } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { selectBookInfo } from '../../redax/Books/booksSelector';
import Loader from '../Loader/Loader';
import StatisticProgressList from './StatisticProgressList';
import StatisticDiagram from './StatisticDiagram';
import { SATitle } from './StatisticAction.styled';

const StatisticAction = () => {
  const { progress } = useSelector(selectBookInfo);
  const [activeComponent, setActiveComponent] = useState('progress'); // Состояние для отслеживания текущего выбранного компонента

  const handleButtonClick = (component: string) => {
    setActiveComponent(component);
  };

  if (!progress) {
    return <Loader />;
  }

  return (
    <>
      <SATitle>
        <h2>Diary</h2>
        <div>
          <button className={activeComponent === 'progress' ? 'active' : ''} onClick={() => handleButtonClick('progress')}>
            <FaRegHourglass />
          </button>
          <button className={activeComponent === 'diagram' ? 'active' : ''} onClick={() => handleButtonClick('diagram')}>
            <svg width={20} height={20}>
              <use href={icons + '#icon-pie-chart-02'}></use>
            </svg>
          </button>
        </div>
      </SATitle>
      {activeComponent === 'progress' ? <StatisticProgressList /> : <StatisticDiagram />}
    </>
  );
};

export default StatisticAction;
