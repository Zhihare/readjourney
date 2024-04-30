import React from 'react'
import LoginForm from '../Components/LoginForm/LoginForm'
import MobileSide from '../Components/MobileSide/MobileSide'
import { LoginPageContainer } from './LoginPage.styled'

type Props = {}

const LoginPage = (props: Props) => {
    return (
      <LoginPageContainer>
        <LoginForm />
        <MobileSide />
      </LoginPageContainer>
  )
}

export default LoginPage