import React, { ReactNode } from 'react';
import { DashbordContainer } from './Dashbord.styled';

type Props = {
  children: ReactNode; // Здесь указывается тип ReactNode для children
}

const Dashbord = ({ children }: Props) => {
  return (
    <DashbordContainer className='dashBoard'>
      {children}
    </DashbordContainer>
  );
}

export default Dashbord;
