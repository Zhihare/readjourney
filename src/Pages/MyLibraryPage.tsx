import React from 'react'
import Layout from '../Components/Loyout/Layout'
import { PageContainer } from './HomePage.styled'
import LeftSideBar from '../Components/LeftSideBar/LeftSideBar'
import Dashbord from '../Components/Dashbord/Dashbord'

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
          my lybrary
          </Dashbord>
      </PageContainer>
    </div>
  )
}

export default MyLibraryPage