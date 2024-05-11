import React from 'react'
import DashBoardTitle from '../DashBoardTitle/DashBoardTitle'
import { StatisticContainer } from './Statistic.styled'
import StatisticNone from './StatisticNone'
import StatisticAction from './StatisticActive'
import { useSelector } from 'react-redux'
import { selectBookInfo } from '../../redax/Books/booksSelector'
import StatisticDiagram from './StatisticDiagram'

type Props = {}

const Statistic = (props: Props) => {
    const { progress } = useSelector(selectBookInfo);
  return (
      <StatisticContainer>
          {progress?.length !==0 ? <StatisticAction /> :
              <StatisticNone />}
    </StatisticContainer>
  )
}

export default Statistic