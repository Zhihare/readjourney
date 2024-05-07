import React from 'react'
import { DTContainer } from './DashBoardTitle.styled';


type Props = {
    comp?: React.ReactNode;
    title: string;
}

const DashBoardTitle: React.FC<Props> = ({ comp, title }) => {
  return (
    <DTContainer>
        <h1>{title}</h1>
        {comp}
    </DTContainer>
  );
};

export default DashBoardTitle