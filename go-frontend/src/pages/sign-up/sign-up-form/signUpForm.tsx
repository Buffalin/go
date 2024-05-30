
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "@components/button";
import './signUpForm.scss'
import Input from "@components/input";
import Box from "@/components/box";
import { Link } from "react-router-dom";

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
            <div className="signUpLogo">Lets <span className="signUpLogo-up">GO</span> with us!</div>
            <form onSubmit={handleSubmit(submit)} className="signUpForm">
                <Box gap='30px' style={{ padding: '0px', alignContent: 'space-between' }}>
                    <Input register={register}
                        label='Name'
                        showLabel={true}
                        type="text"
                        required={true}
                        styleType="secondary" />
                    <Input register={register}
                        label='Last Name'
                        showLabel={true}
                        type="text"
                        required={true}
                        styleType="secondary" />
                </Box>
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
                <div style={{ marginTop: '32px' }}>Already have a GO account? <Link to={'/sign-in'}>Sign In</Link></div>
            </form>
        </div>

    )
}