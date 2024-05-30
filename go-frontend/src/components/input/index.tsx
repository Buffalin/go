import './index.scss'
import { UseFormRegister } from 'react-hook-form';

interface InputProps {
    styleType?: 'primary' | 'secondary' | 'tertiary'
    label: string
    showLabel?: boolean
    type: string
    disabled?: boolean
    width?: number
    height?: number
    placeholder?: string
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    formValues?: any
    register: UseFormRegister<InputProps["formValues"]>
    required?: boolean
    id?: string
    style?: React.CSSProperties
}

export default function Input({
    type = 'string',
    styleType = 'primary',
    required = false,
    showLabel = false,
    register,
    ...props }: InputProps) {


    return (
        <div className='inputContainer'>
            {showLabel ? <label>{props.label}</label> : null}
            <input
                type={type}
                value={props.value}
                className={`input-${styleType} input`}
                {...props}
                {...register(props.label, { required })}
                style={props.style}
            />
        </div>

    )
}