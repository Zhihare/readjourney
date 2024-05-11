import React from 'react'
import { SAC } from './StatisticAction.styled';
import { SDiagram, SDiagramContainer, SDiagramText, SDiagramWrapper } from './StatisticDiagram.styled';

type Props = {}

const StatisticDiagram = (props: Props) => {
    return (
        <SDiagramContainer>
            <p className='text'>Each page, each chapter is a new round of knowledge,
                a new step towards understanding. By rewriting statistics,
                we create our own reading history.</p>
        <SDiagramWrapper>
                <SDiagram>
                    <div className="pie p1"><span>100%</span></div>
                </SDiagram>
                <SDiagramText>
                    <div className='rec'></div>
                    <div>
                        <p>19,14%</p>
                        <span>171 pages read</span>
                    </div>
                </SDiagramText>
        </SDiagramWrapper>
            </SDiagramContainer>
  )
}

export default StatisticDiagram