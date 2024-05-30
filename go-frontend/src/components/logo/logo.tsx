import './index.scss'
import logo from '/logo-black.svg'
export default function Logo() {
    
    return (
        <div className={'logo'}>
            <img src={logo} alt="logo" />
            <div>GO</div>
        </div>
    )
}