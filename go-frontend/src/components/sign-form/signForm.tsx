
import {FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../button";
import './signForm.scss'
import Input from "../input/input";

interface SignForm {
    type: 'sign-up' | 'sign-in' 
}
export default function SignForm({type} : SignForm) {

    interface FormValues {
        email: string;
        password: string;
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();
    
    const submit: SubmitHandler<FieldValues> = (data) => {
        console.log(data)
    }
    
    return (
        <div className="signForm">
            <form onSubmit={handleSubmit(submit)} className="signForm">
                <Input register={register} label='email' type="text" required = {true} />
                <Input register={register} label='password' type="password" required={true} />
                <Button content={type === 'sign-up' ? 'Sign Up' : 'Sign In'} />
                {/* {errors.exampleRequired && } */}
            </form>
        </div>
        
    )
}