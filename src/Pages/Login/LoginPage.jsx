import './Login.css';
import React from 'react';
import { useForm } from 'react-hook-form';

function LoginPage(){
      const { register, handleSubmit, formState: { errors } } = useForm();
      const onSubmit = data => console.log(data);
      console.log(errors);
      
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="email" placeholder="Usuário" {...register("Usuário", {required: true, maxLength: 80})} />
          <input type="password" placeholder="Senha" {...register("Senha", {required: true, maxLength: 10})} />
    
          <input type="submit" />
        </form>
      );
}

export default LoginPage;