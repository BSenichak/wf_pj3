import React, { useEffect } from "react";
import style from "./Auth.module.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../../store/AuthReducer";
import { useNavigate } from "react-router-dom"

export default function Login() {
    let dispatch = useDispatch()
    let { loading, token, error } = useSelector(state=> state.auth)

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();
    let navigate = useNavigate()

    useEffect(()=>{
        if(error){
            alert(error)
        }
        if(token){
            navigate("/")
        }
    }, [token, error])

    return (
        <div className={style.wrapper}>
            <form onSubmit={handleSubmit((data)=>dispatch(loginUser(data)))}>
                <h1>Login</h1>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    {...register("email", {
                        required: true,
                        pattern: {
                            value: /(^[a-zA-Z0-9_.]+[@]{1}[a-z0-9]+[\.][a-z]+$)/gm,
                            message: "Invalid email format",
                        },
                    })}
                />
                <span>{errors.email?.message}</span>
                <br />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    {...register("password", {
                        required: {
                            value: true,
                            message: "Password in required!",
                        },
                        minLength: {
                            value: 6,
                            message: "Min length 3 characters",
                        },
                        maxLength: {
                            value: 20,
                            message: "Too many characters",
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9]+$/,
                            message:
                                "Only characters and numbers are available",
                        },
                    })}
                />
                <span>{errors.password?.message}</span>
                <br />
                <button className={style.button}>Login</button>
            </form>
        </div>
    );
}
