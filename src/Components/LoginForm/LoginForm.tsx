import React from 'react'
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';

import { LoginFormContainer, LoginFormForm, LoginFormTitle } from './LoginForm.styled'
import icons from '../../img/symbol-defs.svg'
import { yupResolver } from '@hookform/resolvers/yup';


type Props = {}

const LoginForm = (props: Props) => {

     const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string().min(7, 'Password must be at least 7 characters').required('Password is required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data:any) => {
    // Відправка даних на backend
    fetch('your-backend-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Обробка успішної відповіді з backend
      // Наприклад, автоматична авторизація і переадресація
      // Приклад:
      // history.push('/recommended');
    })
    .catch(error => {
      // Обробка помилки від backend
      console.error('There was an error!', error);
      // Відображення повідомлення користувачеві про помилку
    });
    };
    

    return (
        <LoginFormContainer>
             <svg width="42" height="18">
                    <use href={icons + '#icon-Logo-1'}></use>
                  </svg>
            <LoginFormTitle>Expand your mind, reading <span>a book</span></LoginFormTitle>
             <LoginFormForm onSubmit={handleSubmit(onSubmit)}>
              <div>
            <input type="text" id="email" {...register('email')} />
            <label htmlFor="email">Mail:</label>
                {errors.email && <span>{errors.email.message}</span>}
              </div>
              <div>    
            <input type="password" id="password" {...register('password')} />
            <label htmlFor="password">Password:</label>
             <svg id="eye" width="16" height="12">
                    <use href={icons + '#icon-eye-off'}></use>
                  </svg>
                {errors.password && <span>{errors.password.message}</span>}
              </div>
          <div>
            <button type="submit">Submit</button>
            <a>Don’t have an account?</a>
          </div>   
            </LoginFormForm>
      </LoginFormContainer>
  )
}

export default LoginForm