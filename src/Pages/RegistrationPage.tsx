import React from 'react'
import { LoginPageContainer } from './LoginPage.styled'
import RegistrationForm from '../Components/LoginForm/RegistrationForm'
import MobileSide from '../Components/MobileSide/MobileSide'

type Props = {}

const RegistrationPage = (props: Props) => {
  return (
     <LoginPageContainer>
        <RegistrationForm />
        <MobileSide/>
      </LoginPageContainer>
  )
}

export default RegistrationPage