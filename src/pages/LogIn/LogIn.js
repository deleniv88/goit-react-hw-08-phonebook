import { LoginForm } from "components/LoginForm/LoginForm";
import { LoginContainer } from "./LogIn.styled";

export default function LogIn(){
    return(
        <LoginContainer>
            <h2>To see your contact list, please Log In</h2>
            <LoginForm/>
        </LoginContainer>
    )
}