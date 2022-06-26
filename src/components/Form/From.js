import React from 'react'
import { useForm } from "react-hook-form";
import './Form.css'
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup"

const Form = ({onChange,createOrder,dataForm})  =>{

    const requiredMessage = "Este campo es obligatorio"
  
    const schema = yup.object().shape({
        name: yup.string().required(requiredMessage),
        lastname: yup.string().required(requiredMessage),
        email: yup.string().email("El email debe ser un formato válido: ejemplo@ejemplo.ejemplo").required(requiredMessage),
        remail: yup.string().email("El email debe ser un formato válido: ejemplo@ejemplo.ejemplo").oneOf([yup.ref("email")],"Los email deben ser iguales").required(requiredMessage),
        phone: yup.number().typeError("Solo debes introducir numeros").positive().integer().required(requiredMessage)
    })  

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    return (
        <>
            <form onSubmit={handleSubmit(createOrder)} onChange={onChange}>
                <div className="container mt-5 mb-5 justify-content-center">
                    <div className="card text-align:left">
                        <div className="card-body">
                        <h6 className="information mt-4">Complete los datos para terminar su compra</h6>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                    <label >Nombre*</label>
                                        <input 
                                            className="form-control" 
                                            type="text"
                                            placeholder='Martin'
                                            {...register("name")} 
                                            defaultValue={dataForm.name}
                                        />
                                    </div>
                                    {errors.name && <span className="text-danger text-small d-block mb-3">
                                        {errors.name.message}
                                    </span>}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                    <label >Apellido*</label>
                                        <input 
                                            className="form-control" 
                                            type="text"
                                            placeholder='Perez'
                                            {...register("lastname")} 
                                            defaultValue={dataForm.lastname}
                                        />
                                    </div>
                                    {errors.lastname && <span className="text-danger text-small d-block mb-3">
                                        {errors.lastname.message}
                                    </span>}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                    <label >Email*</label>
                                        <input 
                                            className="form-control" type="text"
                                            placeholder='ejemplo@algo.algo'
                                            {...register("email")}
                                             defaultValue={dataForm.email}
                                        />
                                         {errors.email && <span className="text-danger text-small d-block mb-2">
                                            {errors.email.message} 
                                        </span>}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                    <label >Repita el Email*</label>
                                        <input 
                                            className="form-control" type="text"
                                            {...register("remail")}
                                             defaultValue={dataForm.remail}
                                        />
                                         {errors.remail && <span className="text-danger text-small d-block mb-2">
                                            {errors.remail.message} 
                                        </span>}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                    <label >Teléfono*</label>
                                        <input 
                                            className="form-control" type="text"
                                            placeholder='2636363'
                                            {...register("phone")}
                                             defaultValue={dataForm.phone}
                                        />
                                         {errors.phone && <span className="text-danger text-small d-block mb-2">
                                            {errors.phone.message} 
                                        </span>}
                                    </div>
                                </div>
                            </div>
                        
                            <button type="submit"
                                className="btn btn-dark  btn-block confirm-button" >
                                    Terminar compra 
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Form