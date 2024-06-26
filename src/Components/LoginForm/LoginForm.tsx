import React, { useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';


import { LoginFormContainer, LoginFormForm, LoginFormTitle, Logo } from './LoginForm.styled';
import icons from '../../img/symbol-defs.svg';
import { yupResolver } from '@hookform/resolvers/yup';
import { logIn } from '../../redax/Auth/authThanks';
import { AppDispatch } from '../../redax/store';
import { NavLink } from 'react-router-dom';
import {selectLoginError } from '../../redax/Auth/authSelector';

type Props = {};

const LoginForm = (props: Props) => {
  const errorUser = useSelector(selectLoginError);
  

  const [passwordVisible, setPasswordVisible] = useState(false);
  

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

   const dispatch: AppDispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string().min(7, 'Enter a valid password').required('Password is required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });


  const onSubmit = async (data: { email: string; password: string }) => {
  try {
    await dispatch(logIn(data)); 
  } catch (error) {
    console.error('There was an error!', error);
  }
};


  return (
    <LoginFormContainer>
      <Logo>
      <svg className='logo'>
        <use href={icons + '#icon-Logo-1'}></use>
      </svg>
      <svg className='text'>
        <use href={icons + '#icon-Logo'}></use>
        </svg>
      </Logo>
      <LoginFormTitle>Expand your mind, reading <span>a book</span></LoginFormTitle>
      <LoginFormForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            id="email"
            {...register('email')}
            className={errors.email ? 'error' : ''}
            autoComplete="off"
          />
          <label htmlFor="email">Mail:</label>
        </div>
        {errors.email && <span id='error'>{errors.email.message}</span>}
      
        <div>
          <div className='passContainer'>
          <input
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            {...register('password')}
            className={errors.password ? 'error' : ''}
            autoComplete="off"
          />
          <label htmlFor="password">Password:</label>
          <svg id="eye"  width="18" height="13" onClick={togglePasswordVisibility}>
            {passwordVisible ? (
              <use href={icons + '#icon-eye'}></use>
            ) : (
              <use href={icons + '#icon-eye-off'}></use>
            )}
          </svg>
        </div>

          {errorUser? <span id="error">incorrect email or password</span> :
            null}
          </div>

        <div id="button">
          <button type="submit">Log In</button>
          <NavLink  to="/register">Don’t have an account?</NavLink>
        </div>
      </LoginFormForm>
    </LoginFormContainer>
  );
}

export default LoginForm;