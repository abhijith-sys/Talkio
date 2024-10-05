import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./NavBar.module.css"

const NavBar = () => {
    return (
        <div className={styles.navBar}>
           <Link to={`/`}><h1 className={styles.Logo} >Talkiyo</h1></Link>  
            <div className={styles.navigations}>
                <Link to={`/`}> <h4 className={styles.heading} >HOME</h4></Link>
                <Link to={`/about`}> <h4 className={styles.heading} >ABOUT US</h4></Link>
                <Link to={`/plans`}> <h4 className={styles.heading} >PLANS</h4></Link>
                <Link to={`/contact`}> <h4 className={styles.heading}>CONTACT</h4></Link>
                <Link to={`/privacy`}><h4 className={styles.heading}>PRIVACY POLICY</h4></Link>
                <Link to={`/terms`}><h4 className={styles.heading}>TERMS & CONDITION</h4></Link>
                <a className={styles.dwnldlink} href="https://shorturl.at/ydKUX"><div className={styles.downldBtn}> Download App</div></a>
            </div>
        </div>
    )
}

export default NavBar
