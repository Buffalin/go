
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "@components/button";
import './signUpForm.scss'
import Input from "@components/input";

interface SignFormProps {
    submit: (data: FieldValues) => void
}
export default function SignUpForm(props: SignFormProps) {

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
        props.submit(data)
    }

    return (
        <div className="signUpFormContainer">
            <form onSubmit={handleSubmit(submit)} className="signUpForm">
                <Input register={register}
                    label='Email'
                    showLabel={true}
                    type="text"
                    required={true}
                    styleType="secondary" />
                <Input register={register}
                    label='Password'
                    showLabel={true}
                    type="password"
                    required={true}
                    styleType="secondary" />
                <Button content='Sign Up' />
                {/* {errors.exampleRequired && } */}
            </form>
        </div>

    )
}