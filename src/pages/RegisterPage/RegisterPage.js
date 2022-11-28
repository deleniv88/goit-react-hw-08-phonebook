import { RegisterForm } from "components/RegisterForm/RegisterForm";
import css from '../RegisterPage/Register.module.css';
import contactUs from '../../default/contactUs.jpeg';

export const RegisterPage = () => {
    const us = contactUs;
    return (
        <div>
            <div className={css.registerContainer}>
                <h2>Don't have an account? Please register!</h2>
                <RegisterForm />
                <div>
                    <img className={css.registerImg} src={us} alt="contactUs" />
                </div>
            </div>
        </div>
    )
}