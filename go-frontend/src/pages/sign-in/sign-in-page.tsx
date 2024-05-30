
import { FieldValues } from 'react-hook-form';
import './index.scss'
import SignInForm from "./sign-in-form/signInForm";

export default function SignInPage() {
    
    function logIn(data: FieldValues) {
        console.log(data)
    }
    return (
        <div className="sign-page">
            <SignInForm submit={logIn} />
        </div>
    )
}