import { RegisterForm } from "components/RegisterForm/RegisterForm";
import css from '../RegisterPage/Register.module.css';
import registerImg from '../../default/register.png';

export default function RegisterPage() {
    const register = registerImg;
    return (
        <div className={css.main}>
            <div className={css.registerContainer}>
                <div className={css.block}>
                    <h2>Don't have an account?</h2>
                    <h2>Please register!</h2>
                    <RegisterForm />
                </div>
            </div>
           
            <div>
                <img className={css.registerImg} src={register} alt="contactUs" />
            </div>
        </div>
    )
}