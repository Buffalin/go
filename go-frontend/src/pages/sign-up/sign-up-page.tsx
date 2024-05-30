
import { FieldValues } from 'react-hook-form'
import './index.scss'
import SignUpForm from './sign-up-form/signUpForm'

export default function SignUpPage() {
    
    function signUp(data: FieldValues) {
        console.log(data)
    }
    return (
        <div className="sign-page">
            <SignUpForm submit={signUp} />
        </div>
    )
}