import './FormEntrega.css';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import PrimaryButton from '../PrimaryButton/PrimaryButton';

function FormEntrega() {
    const { register, handleSubmit, setValue, setFocus } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = (event) => {
        console.log(event);
    }

    const checkCEP = (event) => {
        const cep = event.target.value.replace(/\D/g, '');
        console.log(cep);
        setLoading(true);

        axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(({ data }) => {
            console.log(data);
            setValue('endereco', data.logradouro);
            setValue('bairro', data.bairro)
            setValue('cidade', data.localidade);
            setValue('estado', data.uf);
            setLoading(false);
        }).catch(() => setLoading(false));
        setFocus('numero');

    }

    return (
        <form className='formulario-entrega' onSubmit={handleSubmit(onSubmit)}>
            <input className='inputForms' type="text" placeholder='CEP'
                {...register("cep")} onBlur={checkCEP}
            />
            <input className='inputForms' type="text" placeholder='Rua'
                {...register("endereco")}
            />
            <input className='inputForms' type="text" placeholder='Bairro'
                {...register("bairro")}
            />
            <input className='inputForms' type="text" placeholder='Número'
                {...register("numero")}
            />
            <input className='inputForms' type="text" placeholder='Complemento'
                {...register("complemento")}
            />
            <input className='inputForms' type="text" placeholder='Cidade'
                {...register("cidade")}
            />
            <input className='inputForms' type="text" placeholder='Estado'
                {...register("estado")}
            />
            <PrimaryButton
                btn="Finalizar" 
                title="meu_carrinho"
            />
        </form>
    );
}
export default FormEntrega;
