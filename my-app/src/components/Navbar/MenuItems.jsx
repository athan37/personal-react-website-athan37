import "./Navbar.css";
const MenuItems = ({item}) => {
    return <a href={item.url}>
        <button className="navbar-button">{item.name}</button>
    </a>
}

export default MenuItems;