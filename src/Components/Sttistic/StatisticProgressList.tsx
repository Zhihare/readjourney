import React from 'react'
import { ReadingStart, Rectangle, SAC, SAList, SAListItem } from './StatisticAction.styled';
import Loader from '../Loader/Loader';
import StatisticActionItem from './StatisticActionItem';
import { useSelector } from 'react-redux';
import { selectBookInfo } from '../../redax/Books/booksSelector';

type Props = {}

const StatisticProgressList = (props: Props) => {
    const { progress, totalPages } = useSelector(selectBookInfo);
    
    const groupedByDateWithTotalPages = progress.reduceRight((acc: any, curr: any) => {
    const finishDate = new Date(curr.startReading).toLocaleDateString();
    
  if (!acc[finishDate]) {
    acc[finishDate] = [];
  }

  acc[finishDate].push(curr);
  return acc;
}, {});


for (const date in groupedByDateWithTotalPages) {
  const readings = groupedByDateWithTotalPages[date];
  const minStartPage = Math.min(...readings.filter((item: any) => item.status !== 'active').map((reading: any) => reading.startPage));
  const maxFinishPage = Math.max(...readings.filter((item: any) => item.status !== 'active').map((reading: any) => reading.finishPage));
  const pages = maxFinishPage - minStartPage;
  groupedByDateWithTotalPages[date] = { date, pages, readings };
    }
    
      function differenceInMinutes(startReading: any, finishReading: any, startPage: number, finishPage: number, _id: string) {
        const startR = new Date(startReading);
        const finishR = new Date(finishReading);

        const differenceInMilliseconds = finishR.getTime() - startR.getTime();

        const differenceInMinutes = Math.floor(differenceInMilliseconds / (1000 * 60));
        
        const readingPages = finishPage - startPage;
        const persent = ((readingPages / totalPages) * 100).toFixed(2);
        return { minutes: differenceInMinutes, pages: readingPages, percent: persent, readId: _id };
    }


  return (
    <SAC>
              <SAList>
        {Object.entries(groupedByDateWithTotalPages).map(([date, data]: [string, any]) => {

          const isActive = data.readings.some((item: any) => item.status === "active");
     
          if (isActive && data.readings.length === 1) {
            return (
              <ReadingStart>
                <p>You started reading...</p>
                <Loader />
                <Rectangle />
              </ReadingStart>);
          }


          return (
            <li key = {`${date}-${totalPages}`}>
                <div className={isActive ? 'title active' : 'title'}>
                <h5>{date}</h5>
                <p className='pages'>{data.pages+1} pages</p>
                <Rectangle/>
              </div>
              <SAListItem>
              {data.readings
                    ?.filter((item: any) => item.status !== 'active')
                    .map(({ startReading, finishReading, startPage, finishPage, _id }: { startReading: any, finishReading: any, startPage: number, finishPage: number, _id:string }) => (
                    <StatisticActionItem key={`${startReading}-${finishReading}`} timeReading={differenceInMinutes(startReading, finishReading, startPage, finishPage, _id)} />
                    ))}
              </SAListItem>
            </li>
          );
        })}
      </SAList>
    </SAC>
  )
}

export default StatisticProgressList