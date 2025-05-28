import { useEffect, useState } from 'react'
import s from './style.module.css'
import { Routes } from 'react-router';

const Navigation = ({visible, setVisible, active, hide }) => {

    return (
        <nav className={`${s.navigate} ${active && s.active} ${hide && s.hide}`}>
            <h1 className={s.logo}>FantyI</h1>
            <ul className={s.listNav}>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#works">Works</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li onClick={() => setVisible(true)}>Contact</li>
                <li><a href="">Resume</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;