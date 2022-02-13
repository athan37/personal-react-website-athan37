import MenuItems from "./MenuItems";
import "./Navbar.css";

const Navbar = ({items}) => {
    return <div>
        <ul className="navbar">
            {items.map((item, index) => 
                <li key={index}>
                    <MenuItems item={item}/>
                </li>)}
        </ul>
    </div>
}

export default Navbar;