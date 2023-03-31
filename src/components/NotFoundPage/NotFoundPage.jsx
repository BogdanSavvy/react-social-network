import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import style from "./NotFoundPage.module.scss";


const NotFoundPage = () => {
   return (
      <div className={`${style.page}`}>
         <div className={`${style.page__container}`}>
            <h2 className={`${style.page__error}`}>Oops.... 404</h2>
            <p className={`${style.page__subtitle}`}>Page Not Found :(</p>
            <button type='submit' className={`${style.page__goHome}`}> <NavLink to='/profile'><FontAwesomeIcon icon={faHouse} /> Home</NavLink> </button>
         </div>
      </div>
   )
}


export default NotFoundPage;