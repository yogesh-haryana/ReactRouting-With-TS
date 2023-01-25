import { NavLink } from 'react-router-dom';
import useStyles from './NavStyles.css';

function Navbar(): JSX.Element {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.NavbarContainer}>
        <NavLink className={({ isActive }) => (isActive ? 'active' : classes.navLinks)} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active' : classes.navLinks)} to="/form">Add New User</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
