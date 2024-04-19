import React,{useState} from 'react';
import s from '../Style/Header.module.css';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';

const Header = ({input, handleSearch}) => {

  return (
    <div className={s.navbar}>
      <div className="container">
        <div className={s.nav}>
          <div className={s.logo}>
            <Link to={"/"}><img src={logo} alt="" width={120} height={75}/></Link>
          </div>
          <form className={s.search_form}>
            <input type="text"  placeholder='  Поиск продукта' onChange={handleSearch} value={input}/>
            <button type='submit'><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
          <div className={s.nav_links}>
            <Link to={"/"}>Home</Link>
            <Link to={"monitore"}>Monitore JBEE</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
