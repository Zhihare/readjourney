import React, { useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';


import { LoginFormContainer, LoginFormForm, LoginFormTitle } from './LoginForm.styled';
import icons from '../../img/symbol-defs.svg';
import { yupResolver } from '@hookform/resolvers/yup';
import { registration } from '../../redax/Auth/authThanks';
import { AppDispatch } from '../../redax/store';
import { NavLink } from 'react-router-dom';

type Props = {};

const RegistrationForm = (props: Props) => {
    const [emailFocused, setEmailFocused] = useState(false);
    const [nameFocused, setNameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

   const dispatch: AppDispatch = useDispatch();

    const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Enter a valid name').required('Name is required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string().min(7, 'Enter a valid password').required('Password is required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });


    const onSubmit = async (data: { name: string; email: string; password: string }) => {
  try {
    await dispatch(registration(data)); 

  } catch (error) {
    console.error('There was an error!', error);
  }
};


  return (
    <LoginFormContainer>
      <svg className='logo'>
        <use href={icons + '#icon-Logo-1'}></use>
      </svg>
      <svg className='text'>
        <use href={icons + '#icon-Logo'}></use>
      </svg>
      <LoginFormTitle>Expand your mind, reading <span>a book</span></LoginFormTitle>
          <LoginFormForm onSubmit={handleSubmit(onSubmit)}>
         <div>
          <input
            type="text"
            id="name"
            {...register('name')}
            className={errors.name ? 'error' : 'success'}
            onFocus={() => setNameFocused(true)}
            onBlur={() => setNameFocused(false)}
            autoComplete="off"
          />
          <label htmlFor="name">Name:</label>
        </div>
        {errors.name && <span id='error'>{errors.name.message}</span>}
       
        <div>
          <input
            type="text"
            id="email"
            {...register('email')}
            className={errors.email ? 'error' : 'success'}
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
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
            className={errors.password ? 'error' : 'success'}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
            autoComplete="off"
          />
          <label htmlFor="password">Password:</label>
          <svg id="eye" className={errors.password ? "error" : "ok"} width="16" height="12" onClick={togglePasswordVisibility}>
            {errors.password ? (
              <use href={icons + '#icon-pajamas_error'}></use>
            ) : (
              <use href={icons + '#icon-gg_check-o'}></use>
            )}
          </svg>
        </div>

        {errors.password ? <span id="error">{errors.password.message}</span> :
            <span id="ok">Password is secure</span>}
          </div>

        <div id="button" className='reg'>
          <button type="submit" className='registrButton'>Registration</button>
          <NavLink  to="/login">Already have an account?</NavLink>
        </div>
      </LoginFormForm>
    </LoginFormContainer>
  );
}

export default RegistrationForm;