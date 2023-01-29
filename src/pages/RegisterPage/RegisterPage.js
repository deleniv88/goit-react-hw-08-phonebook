import { RegisterForm } from "components/RegisterForm/RegisterForm";
import css from '../RegisterPage/Register.module.css';

export default function RegisterPage() {
    return (
        <div className={css.main}>
            <div>
                <div className={css.block}>
                    <h2>Don't have an account?</h2>
                    <h2>Please register!</h2>
                    <RegisterForm />
                </div>
            </div>
        </div>
    )
}