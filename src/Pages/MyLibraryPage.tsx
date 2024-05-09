import React from 'react'
import Layout from '../Components/Loyout/Layout'
import { PageContainer } from './HomePage.styled'
import LeftSideBar from '../Components/LeftSideBar/LeftSideBar'
import Dashbord from '../Components/Dashbord/Dashbord'
import DashBoardTitle from '../Components/DashBoardTitle/DashBoardTitle'
import RecomendedButton from '../Components/TitleComponent/RecomendedButton'
import BookListMyLibrary from '../Components/BookListMyLibrary/BookListMyLibrary'
import SelectorComponent from '../Components/TitleComponent/Select'

type Props = {}

const MyLibraryPage = (props: Props) => {
  return (
    <div>
      <Layout/>
       <PageContainer>
        <LeftSideBar>
          filter
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