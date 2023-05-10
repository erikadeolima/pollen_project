import React from 'react';
import { useForm } from 'react-hook-form';


function FormEntrega() {

    const { register, handleSubmit, setValue, setFocus } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form className='' onSubmit={handleSubmit(onSubmit)}>
            <input type="number" placeholder='CEP'
                {...register("CEP", { required: true, maxLength: 9 })} onBlur={checkCEP} />
            <input type="text" placeholder='Endereco'
                {...register("Endereço", { required: true, maxLength: 100 })} />
            <input type="number" placeholder='Numero'
                {...register("Número", {})} />
            <input type="text" placeholder='Complemento'
                {...register("Cidade", {})} />
            <input type="text" placeholder='Estado'
                {...register("Estado", {})} />

            <input type="submit" />
        </form>
    );

}
export default FormEntrega;