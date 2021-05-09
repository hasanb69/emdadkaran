import React from 'react'
import {ReactComponent as Logo} from '../../assest/emdadkaran.svg'
import {Link} from 'react-router-dom'
import './header.style.css'
const Header=()=>{
    return(
     <div className="header">
        <Link to='/' >

            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link to='/order'>
                سفارشها
            </Link>
            <Link to='/ordertracking'>
                   پیگری سفارشات
            </Link>
            <Link to='/profile'>
                پروفایل
            </Link>
            <Link to='/signup'>
                ثبت نام
            </Link>
            <Link to='/shop'>
                خدمات
            </Link>
        </div>

     </div>
     
     )

}

export default Header