import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = (props) => {
    return (
        <div className={styles.footer}>
            <Link to='/restaurants' className={styles.footerLink}>
                <img className='linkImage' src='https://fillmurray.com/g/200/300' alt=''></img>
                <span>RESTAURANTS</span>
            </Link>
            <Link to='/offices' className={styles.footerLink}>
                <img className='linkImage' src='https://fillmurray.com/g/200/300' alt=''></img>
                <span>OFFICES</span>
            </Link>
            <Link to='/residential' className={styles.footerLink}>    
                <img className='linkImage' src='https://fillmurray.com/g/200/300' alt=''></img>
                <span>RESIDENTIAL</span>
            </Link>
            <Link to='/retail' className={styles.footerLink}>
                <img className='linkImage' src='https://fillmurray.com/g/200/300' alt=''></img>
                <span>RETAIL</span>
                </Link>
            <Link to='/current' className={styles.footerLink}>
                <img className='linkImage' src='https://fillmurray.com/g/200/300' alt=''></img>
                <span>CURRENT</span>
            </Link>
        </div>
    )
}

export default Footer;