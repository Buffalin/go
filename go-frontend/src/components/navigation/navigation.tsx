import { Link } from 'react-router-dom'
import './index.scss'
export default function Navigation() {
    
    return (
        <div>
            <nav>
                <ul>
                    <li><Link className='navigationLink' to={'/home'}>Home</Link></li>
                    <li><Link className='navigationLink' to={'/sign-in'}> Sign In</Link></li>
                    <li><Link className='navigationLink' to={'/sign-up'}>Sign Up</Link></li>
                </ul>
            </nav>
        </div>
    )
}