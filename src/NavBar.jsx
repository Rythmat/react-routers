import {  Link} from "react-router-dom";
const NavBar = () => {

  return (
    <div id="navbar">
        <Link to='/blue'>BLUE</Link>
        <Link to='/red'>RED</Link>
        <Link to='/green'>GREEN</Link>
        <Link to='/yellow'>YELLOW</Link>
        <Link to='/'>WHITE</Link>
    </div>
  )

}

export default NavBar;