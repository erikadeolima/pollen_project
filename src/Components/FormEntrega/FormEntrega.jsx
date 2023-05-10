import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

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
            <label>
                <input type="text" placeholder='CEP'
                    {...register("cep")} onBlur={checkCEP} />
            </label>

            <label>
                <input type="text" placeholder='Endereco'
                    {...register("endereco")} />
            </label>
            <label>
                <input type="text" placeholder='Bairro'
                    {...register("bairro")} />
            </label>

            <label>
                <input type="number" placeholder='Numero'
                    {...register("numero")} />
            </label>

            <label>
                <input type="text" placeholder='Complemento'
                    {...register("complemento")} />
            </label>

            <label>
                <input type="text" placeholder='Cidade'
                    {...register("cidade")} />
            </label>

            <label>
                <input type="text" placeholder='Estado'
                    {...register("estado")} />
            </label>
            
        </form>
    );
}
export default FormEntrega;
