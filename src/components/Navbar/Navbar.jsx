import {menuItemsData} from "../../utils/menuItemsData";
import MenuItems from "./MenuItems";
import styles from "./Navbar.module.css"
const Navbar = () => {
  const depthLevel = 0;

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {menuItemsData.map((menu, index) =>{
          return <MenuItems items={menu} key={index} depthLevel={depthLevel}></MenuItems>
        })}
      </ul>
    </nav>
  );
};
export default Navbar;