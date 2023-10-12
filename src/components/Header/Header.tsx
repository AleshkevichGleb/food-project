import {FC} from 'react';
import "./Header.css";
import {BsFillBookmarkHeartFill} from "react-icons/bs"
import { useFavorites } from '../../hooks/useFavorites';

const Header:FC = () => {
    const {favorites} = useFavorites();
    return (
        <header className='header'>
            <BsFillBookmarkHeartFill/>
            <span>{favorites.length}</span>
        </header>
    );
};

export default Header;