import React, { useState } from 'react'
import { LeftContainer, RightContainer } from './StatisticAction.styled'
import { RiDeleteBin5Line } from "react-icons/ri";
import { AppDispatch } from '../../redax/store';
import { useDispatch } from 'react-redux';
import { deleteBookReading, getBookInform } from '../../redax/Books/booksThanks';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

interface StatisticActionItemProps {
  timeReading: {
    minutes: number;
    pages: number;
    percent: string;
    readId: string
  }; 
}

const StatisticActionItem: React.FC<StatisticActionItemProps> = ({ timeReading }) => {
  const dispatch: AppDispatch = useDispatch();
const { bookId } = useParams<{ bookId: string }>() || {};
 const [isLoading, setIsLoading] = useState(false);

const handleDelete = () => {
  setIsLoading(true);
  dispatch(deleteBookReading({ bookId: bookId, readingId: timeReading.readId }))
    .then(() => {
      dispatch(getBookInform(bookId));
      setIsLoading(false);
    })
    .catch((error) => {
      console.error("Error deleting:", error);
      setIsLoading(false);
    });
};


  return (
    isLoading ? 
      <Loader/>:
      <li key={timeReading.readId}>
        <LeftContainer>
          <p>{timeReading.percent}%</p>
          <span>{timeReading.minutes} minutes</span>
                         
        </LeftContainer>
        <RightContainer>
                          
          <div>
            <img src={require('../../img/block.png')} alt="graphick" />
            <button onClick={handleDelete}><RiDeleteBin5Line /></button>
          </div>
          <span>{timeReading.pages+1} pages per hour</span>
                          
        </RightContainer>
      </li>
  )
}

export default StatisticActionItem