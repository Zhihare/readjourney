import React from 'react'


import { HeaderSection, HeaderWrapper, LogoConteiner, Navigation} from './Header.styled'
import { Navigator } from '../Navigation/Navigation'
import { Link } from 'react-router-dom';





const Header = () => {
	

	return (
        <HeaderSection>
			
				 <Link to="/">
				<LogoConteiner>		
				<p>LearnLingo</p>
				</LogoConteiner>
			</Link>
	
			<Navigation>
				<Navigator></Navigator>
			</Navigation>
			<HeaderWrapper>
			</HeaderWrapper>
		</HeaderSection>
	
	)
}

export default Header