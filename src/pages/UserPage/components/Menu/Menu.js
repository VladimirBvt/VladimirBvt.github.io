import iconProfile from "../../../../assets/menu-icons/menu-icon-1.svg";
import iconGeneral from "../../../../assets/menu-icons/menu-icon-2.svg";
import iconChats from "../../../../assets/menu-icons/menu-icon-3.svg";
import iconWidgets from "../../../../assets/menu-icons/menu-icon-4.svg";
import iconSettings from "../../../../assets/menu-icons/menu-icon-5.svg";
import VoiceAssistant from "../../../../components/VoiceAssistant/VoiceAssistant";

const Menu = () => {

  return (
    <section className="section-menu">
      <div className="menu">
        <div className="menu__item">
          <img src={iconProfile} alt="profile" className="menu__icon" />
          Профиль
        </div>
        <div className="menu__item">
          <img src={iconGeneral} alt="general" className="menu__icon" />
          Главная
        </div>
        <div className="menu__item">
          <img src={iconChats} alt="chats" className="menu__icon" />
          Чаты
        </div>
        <div className="menu__item">
          <img src={iconWidgets} alt="widgets" className="menu__icon" />
          Виджеты
        </div>
        <div className="menu__item">
          <img src={iconSettings} alt="settings" className="menu__icon" />
          Настройки
        </div>

        {/* <a href="#" className="menu__item menu__item">
          <div className="menu__icon-bg"></div>
          Настройки
        </a>
        <a href="#" className="menu__item menu__item-1">
          <div className="menu__icon-bg-1"></div>
          Профиль
        </a> */}

      </div>
      <div className="button-voice-assistant-wrapper">
        <VoiceAssistant />
      </div>
    </section>
  );
};

export default Menu;
