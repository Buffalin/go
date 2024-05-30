
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "@components/button";
import './signInForm.scss'
import Input from "@components/input";

interface SignFormProps {
    submit: (data: FieldValues) => void
}
export default function SignInForm(props: SignFormProps) {

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
        <div className="signInFormContainer">
            <form onSubmit={handleSubmit(submit)} className="signInForm">
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
                <Button content='Sign In' />
                {/* {errors.exampleRequired && } */}
            </form>
        </div>

    )
}