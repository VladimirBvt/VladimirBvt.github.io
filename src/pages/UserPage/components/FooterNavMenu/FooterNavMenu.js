import iconProfile from "../../../../assets/menu-icons/menu-icon-1.svg";
import iconGeneral from "../../../../assets/menu-icons/menu-icon-2.svg";
import iconChats from "../../../../assets/menu-icons/menu-icon-3.svg";
import iconWidgets from "../../../../assets/menu-icons/menu-icon-4.svg";
import iconSettings from "../../../../assets/menu-icons/menu-icon-5.svg";

const FooterNavMenu = () => {
    return (
        <section className="footer-nav-menu">
            <img src={iconProfile} alt="profile"/>
            <img src={iconGeneral} alt="general"/>
            <img src={iconChats} alt="chats"/>
            <img src={iconWidgets} alt="widgets"/>
            <img src={iconSettings} alt="settings"/>
        </section>
    );
};

export default FooterNavMenu;
