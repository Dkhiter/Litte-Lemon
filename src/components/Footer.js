import {Link} from 'react-router-dom';

export default function Footer() {

  return(
    <footer>
      <section className='fooLogo'>
        <img src='./pictures/fooLogo.png' alt='Logo' />
      </section>
      <strong>Doormat Navigation</strong>
      <ul className='doormat'>
        <li>
            <Link to={'/'}>Home</Link>
        </li>
        <li>
            <Link to={'/'}>About</Link>
        </li>
        <li>
            <Link to={'/menu'}>Menu</Link>
        </li>
        <li>
            <Link to={'/'}>Reservlitions</Link>
        </li>
        <li>
            <Link to={'/'}>>Order Online</Link>
        </li>
        <li>
            <Link to={'/'}>Login</Link>
        </li>
      </ul>
      <section className='contact'>
        <strong>Contact</strong>
        <p>Address</p>
        <p>Phone no.</p>
        <p>E-mail</p>
      </section>
      <section className='socialMedia'>
        <strong>Social Media Links</strong>
        <p>Twitter</p>
        <p>Facebook</p>
        <p>Instagram</p>
      </section>
    </footer>
  )
}