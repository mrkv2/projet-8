import Logo from  '../../assets/images/LOGOfooter.svg'
import './footer.scss'



export default function Footer() {
    return (
       <footer className='container'>
        <div className="logo">
            <img src={Logo} alt="logo" />
            <div className='foot-reserveved'>
            <p className=''>&copy; 2020 Kasa.</p>
            <p className=''>All rights reserved </p>
            </div>
            </div>
            
           
        
        
       </footer>
    )
}