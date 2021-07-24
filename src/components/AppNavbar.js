import classes from './AppNavbar.module.css';

function AppNavbar() {

    return (
        <div className={classes.navbar}>
            <h1 className={classes.navbar_brand}>ShoppingList</h1>
            <ul className={classes.nav}>
                <li className={classes.nav_item}><a className={classes.nav_link} href="http://github.com">GitHub</a></li>
                <li className={classes.nav_item}>|</li>
                <li className={classes.nav_item}><a className={classes.nav_link} href="http://facebook.com">Facebook</a></li>
            </ul>
        </div>
    );
}

export default AppNavbar;