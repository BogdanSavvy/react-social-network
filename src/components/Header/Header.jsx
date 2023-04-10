import Logo from "./Logo/Logo";
import Notification from "./Notification/Notification";
import MiniProfile from "./MiniProfile/MiniProfile";
import Search from "./Search/Search";

import style from './Header.module.scss';


const Header = (props) => {
   return(
      <header className={style.header}>
         <div className={style.header__container}>
            <Logo />
            <Search />
            <Notification />
            <MiniProfile name="Pepe" />
         </div>
      </header>
   )
}

export default Header;

