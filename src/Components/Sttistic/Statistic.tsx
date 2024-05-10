import React from 'react'
import DashBoardTitle from '../DashBoardTitle/DashBoardTitle'
import { StatisticContainer } from './Statistic.styled'
import StatisticNone from './StatisticNone'
import StatisticAction from './StatisticActive'

type Props = {}

const Statistic = (props: Props) => {
  return (
      <StatisticContainer>
          {/* <StatisticNone/> */}
          <StatisticAction/>
    </StatisticContainer>
  )
}

export default Statistic