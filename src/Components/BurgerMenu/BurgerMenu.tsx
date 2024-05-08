import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import { Navigation } from '../Header/Header.styled';
import { BurgerMenuConteiner, ButtonLogout } from './BurgerMenu.styled';
import { NavLink } from 'react-router-dom';
import { AppDispatch } from '../../redax/store';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redax/Auth/authThanks';
interface BurgerMenuProps {
  isOpen: boolean;
  onMenuToggle: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onMenuToggle }) => {
    const dispatch: AppDispatch = useDispatch(); 
    const onSubmit = async () => {
  try {
    await dispatch(logOut()); 

  } catch (error) {
    console.error('There was an error!', error);
  }
    };
    

  return (
      <BurgerMenuConteiner>
      
          <Menu width={'200px'}>
              <Navigation/>
            <NavLink to="/recommended">
                Home
            </NavLink>
            
            <NavLink    to="/library">
                My Library
            </NavLink>

            <NavLink    to="/reading">
                My training
              </NavLink>
              
            <ButtonLogout className='burger' onClick={onSubmit}>Log out</ButtonLogout>
        </Menu>
        
    </BurgerMenuConteiner>
  );
};

export default BurgerMenu;