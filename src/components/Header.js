import {Link} from 'react-router-dom';

export default function Header(){
  return(
    <nav>
      <section className='navLogo'>
        <img src='./pictures/navLogo.png' alt='Little Lemon' />
      </section>
      <ul>
        {
          ['Home','About','Menu','Reservations', 'Order Online', 'Login'].map((str, index) => {
            return(
              <li key={index}>
                <Link to={str==='Reservations'?'/book':str==='Home'?'/':`/`}>{str}</Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

// #${str.toLowerCase()}