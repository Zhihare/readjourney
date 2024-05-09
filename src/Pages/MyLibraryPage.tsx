import React from 'react'
import Layout from '../Components/Loyout/Layout'
import { PageContainer } from './HomePage.styled'
import LeftSideBar from '../Components/LeftSideBar/LeftSideBar'
import Dashbord from '../Components/Dashbord/Dashbord'
import DashBoardTitle from '../Components/DashBoardTitle/DashBoardTitle'
import BookListMyLibrary from '../Components/BookListMyLibrary/BookListMyLibrary'
import SelectorComponent from '../Components/TitleComponent/Select'
import CreateBook from '../Components/Filter/CreateBook'
import LeftSideRecommended from '../Components/StartWork/LeftRecomendedBooks'

type Props = {}

const MyLibraryPage = (props: Props) => {
  return (
    <div>
      <Layout/>
       <PageContainer>
        <LeftSideBar>
          <CreateBook />
          <LeftSideRecommended/>
          </LeftSideBar>
        <Dashbord>
           <DashBoardTitle title='My library' comp={<SelectorComponent />} />
          <BookListMyLibrary/>  
        </Dashbord>
      </PageContainer>
    </div>
  )
}

export default MyLibraryPage