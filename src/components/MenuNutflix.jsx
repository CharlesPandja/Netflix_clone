import React from 'react';
import LogoNutflix from '../assets/LogoNutflix.png';
import ImgBrowseHeader from './ImgBrowseHeader.jsx';
import notificationImg from '../assets/notification.png';
import rechercheImg from '../assets/recherche.png';
import avatarImg from '../assets/avatar.png';
import { useNavigate, NavLink, Form } from 'react-router-dom';
import { useContext } from 'react';
import { ShowInterfaceContext } from '../hooks/ShowInterfaceContext.jsx';
import AccountSelection from './AccountSelection.jsx';
import ProfilIcon from '../assets/gestionProfils.png';
import UserIcon from '../assets/userAccount.png';
import HelpIcon from '../assets/help.png';

const MenuNutflix = () => {
    const { isVisible, handleAuthentication } = useContext(ShowInterfaceContext);

    const navigate = useNavigate();

    function handleLogo() {
        navigate('/browse')
    }
    return (
        <header className="flex justify-between items-center w-full py-4 px-8 bg-black/80 fixed top-0 left-0 z-20">
            <nav className="gap-8 flex justify-center items-center">
                <div>
                    <img onClick={handleLogo} className="w-[130px] cursor-pointer" src={LogoNutflix} alt="Nutflix Logo" />
                </div>
                <ul className="flex justify-center items-center gap-4">
                    <li className="text-sm text-white cursor-pointer hover:text-neutral-300"><NavLink to="/browse" className={({ isActive }) => isActive ? 'font-semibold' : ''} end>Accueil</NavLink></li>
                    <li className="text-sm text-white cursor-pointer hover:text-neutral-300"><NavLink to="/browse/genre/series" className={({ isActive }) => isActive ? 'font-semibold' : ''}>Séries</NavLink></li>
                    <li className="text-sm text-white cursor-pointer hover:text-neutral-300"><NavLink to="/browse/genre/movies" className={({ isActive }) => isActive ? 'font-semibold' : ''}>Films</NavLink></li>
                </ul>
            </nav>
            <div className="flex justify-center items-center gap-3">
                <ImgBrowseHeader source={rechercheImg} name="Search Icon" />
                <ImgBrowseHeader source={notificationImg} name="Notification Icon" />
                <ImgBrowseHeader onSelect={handleAuthentication} source={avatarImg} name="User Avatar" />
            </div>
            {isVisible && <div className="p-6 bg-black/80 absolute top-14 right-10">
                <div>
                    <AccountSelection source={ProfilIcon} name="Gestion profils" text="Gérer les profils" />
                    <AccountSelection source={UserIcon} name="Compte" text="Compte" />
                    <AccountSelection source={HelpIcon} name="Aide" text="Centre d'aide" />
                    <Form action="logout" method="post">
                        <button className="cursor-pointer text-white text-sm hover:underline">Se déconnecter</button>
                    </Form>
                </div>
            </div>}
        </header>
    )
}

export default MenuNutflix;
