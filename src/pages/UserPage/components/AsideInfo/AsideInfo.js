import calendar from "../../../../assets/calendar-block-image.png";
import Phone from "./components/Phone/Phone";
import VoiceAssistant from "../../../../components/VoiceAssistant/VoiceAssistant";

const AsideInfo = () => {
  return (
		<aside className="aside-info">
			<div className="calendar-wrapper">
				<img className="calendar-image" src={calendar} alt="calendar" />
			</div>
			<div className="elements-aside-wrapper">
				<div className="phone-wrapper">
					<Phone />
				</div>

				<VoiceAssistant />
			</div>
		</aside>
	)
};

export default AsideInfo;
