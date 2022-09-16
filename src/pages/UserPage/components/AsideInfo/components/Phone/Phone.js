import phoneIcon from "../../../../../../assets/phone-icon.svg";

const Phone = () => {
	return (
		<div className="phone">
			<div className="phone__title">Недавние</div>
			<div className="phone__items">
				<div className="phone__item">
					Алексей
					<img src={phoneIcon} alt="phone"/>
				</div>
				<div className="phone__item">
					Юлия
					<img src={phoneIcon} alt="phone"/>
				</div>
			</div>
		</div>
	)
}

export default Phone;
