import React from 'react'
import Layout from '../Components/Loyout/Layout'
import { PageContainer } from './HomePage.styled'
import LeftSideBar from '../Components/LeftSideBar/LeftSideBar'
import Dashbord from '../Components/Dashbord/Dashbord'
import { useParams } from 'react-router-dom'

type Props = {}

const MyTrainingPage = (props: Props) => {
  const { bookId } = useParams<{ bookId: string }>();
  return (
      <div>
          <Layout/>
          <PageContainer>
        <LeftSideBar>
          {bookId}
          </LeftSideBar>
        <Dashbord>
          riding
          </Dashbord>
      </PageContainer>
    </div>
  )
}

export default MyTrainingPage