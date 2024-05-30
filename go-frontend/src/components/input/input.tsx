import { useState } from 'react';
import './index.scss'
import { UseFormRegister } from 'react-hook-form';

interface InputProps {
    styleType?: 'primary' | 'secondary' | 'tertiary';
    label: string;
    type: string;
    disabled?: boolean;
    width?: number;
    height?: number;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    formValues?: any;
    register: UseFormRegister<InputProps["formValues"]>;
    required?: boolean;

}

export default function Input({ type = 'string', styleType = 'primary', required = false,  ...props }: InputProps) {

    // const [inputValue, setInputValue] = useState('i')

    // function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    //     setInputValue(e.target.value)
    // }
    
    return (
        <input
            type={type}
            value={props.value}
            onChange={props.onChange}
            className={`input-${styleType}`}
            {...props.register(props.label, {required})}
        />
    )
}