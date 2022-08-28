import React from 'react'
import s from './Login.module.css'
import {useFormik} from "formik";
import {useAppDispatch} from "../../hooks/useTypeHooks";
import {LoginTC} from "../../features/auth-reducer";

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {

    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (!values.email) {
                errors.password = 'Required'
            } else if (values.password.length < 3) {
                errors.password = 'Must be 3 characters or more'
            }

            return errors
        },
        onSubmit: values => {
            dispatch(LoginTC(values))
            alert(JSON.stringify(values, null, 2));
            formik.resetForm();
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={s.login}>
                <h1>Sing in</h1>
                <input
                    type="email"
                    {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email && <div style={{color: 'red'}}>{formik.errors.email}</div>}
                <input type="password"
                       {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password &&
                    <div style={{color: 'red'}}>{formik.errors.password}</div>}
                <span className={s.rememberMe}>
                    <input
                        type="checkbox"
                        checked={formik.values.rememberMe}
                        {...formik.getFieldProps('rememberMe')}
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