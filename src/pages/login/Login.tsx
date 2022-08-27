import React from 'react'
import s from './Login.module.css'
import {useFormik} from "formik";

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password:'',
            rememberMe: false,
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            return errors
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} >
            <div className={s.login}>
                <h1>Sing in</h1>
                <input
                    type="text"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.errors.email && <div style={{color:'red'}}>{formik.errors.email}</div>}
                <input type="text"
                       name="password"
                       onChange={formik.handleChange}
                       value={formik.values.password}
                />
                <span className={s.rememberMe}>
                    <input
                        type="checkbox"
                        name="rememberMe"
                        onChange={formik.handleChange}
                        checked={formik.values.rememberMe}
                    />
                    remember me
                </span>
                <div>Forgot Password?</div>
                <button>Sing In</button>
                <div>Already have an account?</div>
                <div>Sing In</div>
            </div>
        </form>
    )
}