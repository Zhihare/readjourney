import React from 'react'
import Layout from '../Components/Loyout/Layout'
import Dashbord from '../Components/Dashbord/Dashbord'
import LeftSideBar from '../Components/LeftSideBar/LeftSideBar'
import { PageContainer } from './HomePage.styled'
import FilterForm from '../Components/Filter/Filter'
import StartWork from '../Components/StartWork/StartWork'
import Quete from '../Components/Quote/Quete'
import DashBoardTitle from './../Components/DashBoardTitle/DashBoardTitle';
import RecomendedButton from '../Components/TitleComponent/RecomendedButton'
import BookList from '../Components/BookList/BookList'

type Props = {}


const HomePagr = (props: Props) => {

   const handleSearch = (filter: { bookTitle: string, author: string }) => {
    console.log('Search filter:', filter);
  };
  
  return (
    <div>
      <Layout/>
      <PageContainer>
        <LeftSideBar>
          <FilterForm onSearch={handleSearch} />
          <StartWork />
          <Quete/>
          </LeftSideBar>
        <Dashbord>
          <DashBoardTitle title='Recomended' comp={<RecomendedButton />} />
          <BookList/>
          </Dashbord>
      </PageContainer>
    </div>
  )
}

export default HomePagr