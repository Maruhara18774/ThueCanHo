import React from 'react'
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

/*Nơi chứa các navbar-item (Có thể Tạo - Xóa - Sửa)*/ 
export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Account',
        path: '/account',
        icon: <FaIcons.FaUserAlt/>,
        cName: 'nav-text'
    },
    {
        title: 'Trending',
        path: '/trending',
        icon: <FaIcons.FaSortAmountUp/>,
        cName: 'nav-text'
    },
]