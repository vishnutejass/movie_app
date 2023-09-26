import React from "react";
import styles from "./Navbar.module.css";


//string interpolation"$"

class Navbar extends React.Component{
    render(){
        return(
            <>
           <div className={styles.Nav}>

            <div className={styles.Title}>
                VISHNU-FAV
            </div>
            <div className={styles.Cartcon}>
                <img  className= {styles.cartIcon} alt="Cart Icon" src="https://cdn-icons-png.flaticon.com/128/891/891462.png" />
                <span className={styles.Cartcnt} >3</span>
            </div>
           </div>
            </>
        )
    }
}

export default Navbar;
