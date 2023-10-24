import Logo from  '../../assets/images/LOGOfooter.svg'
import './footer.css'



export default function Footer() {
    return (
       <footer className='container'>
        <div className="logo">
            <img src={Logo} alt="logo" />
            <p className='foot-resereved'>&copy; 2020 Kasa. All rights reserved </p>
            </div>
            
           
        
        
       </footer>
    )
}