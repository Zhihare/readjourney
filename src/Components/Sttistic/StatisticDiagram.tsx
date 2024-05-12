import React from 'react'
import { SDiagram, SDiagramContainer, SDiagramText, SDiagramWrapper } from './StatisticDiagram.styled';
import { PieChart } from '@mui/x-charts/PieChart';
import { useSelector } from 'react-redux';
import { selectBookInfo } from '../../redax/Books/booksSelector';



type Props = {}

const StatisticDiagram = (props: Props) => {
    const { progress, totalPages } = useSelector(selectBookInfo);
     const maxPage= Math.max(...progress.filter((item: any) => item.status !== 'active').map((reading: any) => reading.finishPage));
    const readBookPercent:any = ((maxPage / totalPages) * 100).toFixed(2);

    const percentUnread:any = 100 - readBookPercent;
    
    const data = [
  { value: readBookPercent },
  { value: percentUnread},
];

    
const pieParams = { height: 200, margin: { right: 5 } };

    return (
        <SDiagramContainer>
            <p className='text'>Each page, each chapter is a new round of knowledge,
                a new step towards understanding. By rewriting statistics,
                we create our own reading history.</p>
        <SDiagramWrapper>
                <SDiagram>
                    <PieChart
                      
                colors={['#30B94D','#1F1F1F' ]} 
                series={[{ data }]}
                        {...pieParams} />
                    <div className='centerInfo'>100%</div>
                </SDiagram>
                <SDiagramText>
                    <div className='rec'></div>
                    <div>
                        <p>{readBookPercent}%</p>
                        <span>{maxPage} pages read</span>
                    </div>
                </SDiagramText>
        </SDiagramWrapper>
            </SDiagramContainer>
  )
}

export default StatisticDiagram