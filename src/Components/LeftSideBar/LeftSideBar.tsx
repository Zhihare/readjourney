import React, { ReactNode } from 'react'
import { DashbordContainer } from '../Dashbord/Dashbord.styled'

type Props = {
  children: ReactNode;
}

const LeftSideBar = ({ children }: Props) => {
  return (
      <DashbordContainer className='leftSide'>
          {children}
      </DashbordContainer>
  )
}

export default LeftSideBar