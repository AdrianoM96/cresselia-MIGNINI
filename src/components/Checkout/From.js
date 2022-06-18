import React from 'react'
import { useForm } from "react-hook-form";
import './Form.css'

const Form = ({onChange,createOrder,dataForm})  =>{

    const { register, handleSubmit, formState: { errors } } = useForm();
    const patterns = {
        emailPattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
        phonePattern : /^[0-9]+$/i
    }
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
                                            placeholder='Adriano'
                                            {...register("name", { 
                                                required: {
                                                    value: true,
                                                    message: 'Este campo es obligatorio '
                                                }
                                            })} 
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
                                    <label >Email*</label>
                                        <input 
                                            className="form-control" type="text"
                                            placeholder='ejemplo@algo.algo'
                                            {...register("email", { 
                                                pattern: { 
                                                    value : patterns.emailPattern,
                                                    message : 'Este correo no cumple con un formato de email valido: ejemplo@algo.algo'
                                                },
                                                required: {
                                                    value: true,
                                                    message: 'Este campo es obligatorio '
                                                }
                                            })}
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
                                    <label >Teléfono*</label>
                                        <input 
                                            className="form-control" type="text"
                                            placeholder='2636363'
                                            {...register("phone", { 
                                                pattern: { 
                                                    value : patterns.phonePattern,
                                                    message : 'Ingrese un numero de teléfono válido'
                                                },
                                                required: {
                                                    value : true,
                                                    message : 'Este campo es obligatorio'
                                                }
                                            })}
                                             defaultValue={dataForm.phone}
                                        />
                                         {errors.phone && <span className="text-danger text-small d-block mb-2">
                                            {errors.phone.message} 
                                        </span>}
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-dark  btn-block confirm-button" >
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