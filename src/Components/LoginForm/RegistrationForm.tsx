import React, { useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';


import { LoginFormContainer, LoginFormForm, LoginFormTitle, Logo } from './LoginForm.styled';
import icons from '../../img/symbol-defs.svg';
import { yupResolver } from '@hookform/resolvers/yup';
import { registration } from '../../redax/Auth/authThanks';
import { AppDispatch } from '../../redax/store';
import { NavLink } from 'react-router-dom';

type Props = {};

const RegistrationForm = (props: Props) => {
 

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [inputChanged, setInputChanged] = useState<{ [key: string]: boolean }>({
      name: false,
      email: false,
      password: false,
  });
  
    const handleInputChange = (fieldName: string) => {
    setInputChanged(prevState => ({
      ...prevState,
      [fieldName]: true,
    }));
  };

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

  } catch (error: any) {
    console.log('There was an error!', error);
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
            id="name"
            {...register('name')}
            className={inputChanged.name ? (errors.name ? 'error' : 'success') : ''}
            autoComplete="off"
            onChange={() => handleInputChange('name')}
          />
          <label htmlFor="name">Name:</label>
        </div>
        {errors.name && <span id='error'>{errors.name.message}</span>}
       
        <div>
          <input
            type="text"
            id="email"
            {...register('email')}
            className={inputChanged.email ? (errors.email ? 'error' : 'success') : ''}
            autoComplete="off"
            onChange={() => handleInputChange('email')}
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
              className={inputChanged.password ? (errors.password ? 'error' : 'success') : ''}
            autoComplete="off"
            onChange={() => handleInputChange('password')}
            />
            
            <label htmlFor="password">Password:</label>
            {!inputChanged.password ?
              <svg id="eye" width="18" height="13" onClick={togglePasswordVisibility}>
                {passwordVisible ? (
                  <use href={icons + '#icon-eye'}></use>
                ) : (
                  <use href={icons + '#icon-eye-off'}></use>
                )}
              </svg> :
              <svg id="eye" className={errors.password ? "error" : "ok"} width="16" height="12" onClick={togglePasswordVisibility}>
                {errors.password ? (
                  <use href={icons + '#icon-pajamas_error'}></use>
                ) : (
                  <use href={icons + '#icon-gg_check-o'}></use>
                )}
              </svg>
            }
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