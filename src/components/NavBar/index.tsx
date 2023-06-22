import { NavLink } from "react-router-dom"
import style from './NavBar.module.css'

const navigationRoutes = [
 { to: '/', pageName: "Главная" },
 { to: 'news', pageName: "Новости библиотеки" },
 { to: 'cooworkers', pageName: "Сотрудники библиотеки" },
 { to: 'events', pageName: "Мероприятия библиотеки" }

]

function NavBar() {

 const renderLinks = navigationRoutes.map(({ to, pageName }) => <NavLink className={({ isActive }) =>
  isActive ? style.active : ""} to={to}>{pageName}</NavLink>)

 return (
  <nav className={style.navContainer}>
   {renderLinks}
  </nav>
 )
}

export default NavBar


