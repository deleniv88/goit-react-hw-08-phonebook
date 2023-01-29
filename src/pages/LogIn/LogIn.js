import { LoginForm } from "components/LoginForm/LoginForm";
import { LoginContainer, Main } from "./LogIn.styled";

export default function LogIn() {
    return (
        <Main>
            <LoginContainer>
                <h2>To see your contact list, please login</h2>
                <LoginForm />
            </LoginContainer>
        </Main>
    )
}