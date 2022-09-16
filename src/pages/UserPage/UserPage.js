import AsideInfo from "./components/AsideInfo/AsideInfo"
import FooterNavMenu from "./components/FooterNavMenu/FooterNavMenu"
import General from "./components/General/General"
import Header from "./components/Header/Header"
import Menu from "./components/Menu/Menu"

const UserPage = () => {
	return (
		<>
			<Header />
			<main className="main">
				<Menu />
				<General />
				<AsideInfo />
			</main>
			<FooterNavMenu />
		</>
	)
}

export default UserPage