import React from 'react';
import { NavigationNav } from './Navigation.styled';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

interface NavigatorProps {
    toggleMenu?: () => void;
}


export const Navigator = ({ toggleMenu }: NavigatorProps) => {

  const { isLoggedIn } = useAuth();


   const handleButtonClick = () => {
     if (toggleMenu) {
            toggleMenu();
        }
  };

  return (
    <NavigationNav>
		  
      {isLoggedIn && (
        <>
      <NavLink onClick={handleButtonClick} className={({isActive}) =>
			  [
				isActive ? "active" : "",
			  ].join(" ")} to="/home">
        Home
      </NavLink>
      <NavLink  onClick={handleButtonClick} className={({isActive}) =>
			  [
				isActive ? "active" : "",
			  ].join(" ")}  to="/mylibrary">
        My Library
          </NavLink>
          </>
      )
        }
    </NavigationNav>
  );
};