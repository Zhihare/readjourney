import React from 'react'


import { HeaderSection, HeaderWrapper, LogoConteiner, Navigation} from './Header.styled'
import { Navigator } from '../Navigation/Navigation'
import { Link } from 'react-router-dom';

import icons from '../../img/symbol-defs.svg';
import { GiHamburgerMenu } from "react-icons/gi";



const Header = () => {
	

	return (
        <HeaderSection>
			
				<Link to="/">
				<LogoConteiner>		
				 <svg className='logo'>
        		<use href={icons + '#icon-Logo-1'}></use>
      			</svg>
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