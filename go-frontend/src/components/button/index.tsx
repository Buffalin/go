import { ReactNode } from 'react'
import './index.scss'

interface ButtonProps {
    styleType?: 'primary' | 'secondary' | 'tertiary',
    content: string |  ReactNode
}
export default function Button({styleType = 'primary', content}: ButtonProps) {
    
    return (
        <button className={`button-${styleType}`}>
            <div>
                <span>{content}</span>
            </div>
        </button>
    )
}