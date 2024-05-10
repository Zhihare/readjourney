import React, { useEffect } from 'react'
import Layout from '../Components/Loyout/Layout'
import { PageContainer } from './HomePage.styled'
import LeftSideBar from '../Components/LeftSideBar/LeftSideBar'
import Dashbord from '../Components/Dashbord/Dashbord'
import { useParams } from 'react-router-dom'
import DashBoardTitle from '../Components/DashBoardTitle/DashBoardTitle'
import { getBookInform } from '../redax/Books/booksThanks'
import { AppDispatch } from '../redax/store'
import { useDispatch, useSelector } from 'react-redux'
import { selectBookInfo } from '../redax/Books/booksSelector'
import BookInfo from '../Components/BookInfo/BookInfo'
import FormToStart from '../Components/FormToStart/FormToStart'
import Time from '../Components/TitleComponent/Time'
import Statistic from '../Components/Sttistic/Statistic'

type Props = {}

const MyTrainingPage = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const { bookId } = useParams<{ bookId: string }>();
  
  useEffect(() => {
    dispatch(getBookInform(bookId)); 
  }, [dispatch]);

  return (
      <div>
          <Layout/>
          <PageContainer>
        <LeftSideBar>
         <FormToStart/>
         <Statistic/>
          </LeftSideBar>
        <Dashbord>
          <DashBoardTitle title='My reading' comp={<Time/>} />
          <BookInfo/>
          </Dashbord>
      </PageContainer>
    </div>
  )
}

export default MyTrainingPage