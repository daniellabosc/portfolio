import data from './data'
//import {IoIosColorPalette} from 'react-icons/io'
//import { useModalContext } from '../../context/modal-context'
import './navbar.css'

const Navbar = () => {
  //const {showModalHandler} = useModalContext();

  return (
    <nav>
      <div className="container nav__container">
        <ul className='nav__menu'>
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
         {/* <button id='theme__icon' onClick={showModalHandler}><IoIosColorPalette/></button>  */}
         <ul className='nav__menu'>
            <li><a href="mailto:margaretphillips003@gmail.com">margaretphillips003@gmail.com</a></li>
            <li><a href="https://www.linkedin.com/in/margaretphillips/">https://www.linkedin.com/in/margaretphillips/</a></li>
         </ul>
      </div>
    </nav>
  )
}

export default Navbar