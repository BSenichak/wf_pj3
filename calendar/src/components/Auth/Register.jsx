import React, { useEffect } from "react";
import style from "./Auth.module.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/AuthReducer";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const { loading, error, token } = useSelector((state) => state.auth);
    let dispatch = useDispatch()

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
            <form onSubmit={handleSubmit((data) => dispatch(registerUser(data)))}>
                <h1>Register</h1>
                <label htmlFor="login">Login</label>
                <input
                    type="text"
                    id="login"
                    {...register("login", {
                        required: {
                            value: true,
                            message: "Login in required!",
                        },
                        minLength: {
                            value: 3,
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
                <span>{errors.login?.message}</span>
                <br />

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
                    type="text"
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

                <label htmlFor="confirmPassword">Confirm password</label>
                <input
                    type="text"
                    id="confirmPassword"
                    {...register("confirmPassword", {
                        required: true,
                        validate: (value) => {
                            if (value !== watch("password")) {
                                return "Passwords do not match";
                            }
                        },
                    })}
                />
                <span>{errors.confirmPassword?.message}</span>
                <br />

                <button className={style.button}>Register</button>
            </form>
        </div>
    );
}
