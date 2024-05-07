
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { HeaderSection, LogoConteiner, Navigation, RightButtonContainer, RightContainer } from './Header.styled';
import { Navigator } from '../Navigation/Navigation';
import icons from '../../img/symbol-defs.svg';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { ButtonLogout } from '../BurgerMenu/BurgerMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redax/Auth/authSelector';
import { AppDispatch } from '../../redax/store';
import { logOut } from '../../redax/Auth/authThanks';
import { Logo } from '../LoginForm/LoginForm.styled';


const Header: React.FC = () => {
	const dispatch: AppDispatch = useDispatch();

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { name } = useSelector(selectUser);
	const firstLetter = name.charAt(0).toUpperCase();

	const onSubmit = async () => {
  try {
    await dispatch(logOut()); 

  } catch (error) {
    console.error('There was an error!', error);
  }
};

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderSection>
      <Link to="/recommended">
			  <LogoConteiner>
				<Logo>
          	<svg className="logo header">
            <use href={icons + '#icon-Logo-1'}></use>
				  </svg>
		 	<svg className='text header'>
        	<use href={icons + '#icon-Logo'}></use>
					  </svg>
				</Logo>
        </LogoConteiner>
      </Link>

      <Navigation>
        <Navigator />
      </Navigation>
		  <RightButtonContainer>
			  <RightContainer>
				  <span>{firstLetter}</span>
				  <p>{name}</p>
			  </RightContainer>
			  <ButtonLogout className='desktop' onClick={onSubmit}>
                  Log Out
              </ButtonLogout>
			
			  <BurgerMenu isOpen={isMenuOpen} onMenuToggle={handleMenuToggle} />
			  </RightButtonContainer>
    </HeaderSection>
  );
};

export default Header;
