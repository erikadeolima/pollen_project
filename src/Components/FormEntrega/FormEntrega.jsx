import React from 'react';
import { useForm } from 'react-hook-form';


function FormEntrega() {

    const { register, handleSubmit, setValue } = useForm();

    const onSubmit = (e) => {
        console.log(e);
    }

    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        console.log(cep);

        fetch('https://viacep.com.br/ws/${cep}/json/)').then(res => res.json()).then(data => {
            console.log(data);
            setValue('endereco', data.logradouro);
            setValue('bairro', data.bairro)
            setValue('cidade', data.localidade);
            setValue('estado', data.uf);
        });
    }

    return (
        <form className='formulario-entrega' onSubmit={handleSubmit(onSubmit)}>
            <label>
                <input type="number" placeholder='CEP'
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
            <button type="submit">Enviar</button>
        </form>
    );

}
export default FormEntrega;