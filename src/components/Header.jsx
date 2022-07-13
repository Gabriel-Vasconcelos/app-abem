import { Link } from 'react-router-dom';
import logo from '../assets/logo-abem.png';

export default function Header(){
    return(
        <header className="w-full py-4 bg-gray-100 shadow-lg">
            <div className="container mx-auto sm:px-28 px-4  flex items-center justify-between h-[8vh] relative">
                <Link to="/">
                    <img className='w-32 relative'
                    src={logo} 
                    alt="logo da abem"
                    title='logo da abem' />
                </Link>

                <ul className='flex gap-x-8'>
                    <li>
                        <Link  className='text-abem-900 text-lg font-medium hover:text-abem-400 hover:underline transition-all' 
                        to="/duvidas">Dúvidas</Link>
                    </li>
                    <li>
                        <Link className='text-abem-900 text-lg font-medium hover:text-abem-400 hover:underline transition-all'
                        to="/doe">Doe</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}