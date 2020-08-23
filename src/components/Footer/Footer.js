import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.module.scss';

const Footer = (props) => {
    return (
        <div>
            <Link to='/restaurants' className='restaurants footer-link'>
                <img className='link-image' src='' alt=''></img>
                <span>RESTAURANTS</span>
            </Link>
            <Link to='/offices' className='offices footer-link'>
                <img className='link-image' src='' alt=''></img>
                <span>OFFICES</span>
            </Link>
            <Link to='/residential' className='residential footer-link'>    
                <img className='link-image' src='' alt=''></img>
                <span>RESIDENTIAL</span>
            </Link>
            <Link to='/retail' className='retail footer-link'>
                <img className='link-image' src='' alt=''></img>
                <span>RETAIL</span>
                </Link>
            <Link to='/current' className='current footer-link'>
                <img className='link-image' src='' alt=''></img>
                <span>CURRENT</span>
            </Link>
        </div>
    )
}

export default Footer;