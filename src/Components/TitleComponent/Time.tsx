import React from 'react'
import { TimeContainer } from './Time.styled'
import { useSelector } from 'react-redux';
import { selectBookInfo } from '../../redax/Books/booksSelector';

type Props = {}

const Time = (props: Props) => {
    const { timeLeftToRead } = useSelector(selectBookInfo);
  return (
      <TimeContainer>
          {timeLeftToRead && timeLeftToRead.minutes ?
              <p>{timeLeftToRead.hours} hours and {timeLeftToRead.minutes} minutes left</p> :
              <></>}
      </TimeContainer>
  )
}

export default Time