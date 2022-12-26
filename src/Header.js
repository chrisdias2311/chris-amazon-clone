import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const[{ basket }, dispatch] = useStateValue();


    const navigate = useNavigate();

    const navigateToHome = ()=>{
        navigate("/")
    }

    const navigateToCheckout = ()=>{
        navigate("/checkout")
    }

    const navigateToSignIn = ()=> {
        navigate("/login")
    }

    return (
        <div className='header'>
            <img
              className="header_logo"
              src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' 
              onClick={navigateToHome}
            />

            <div className="header_search">
                <input className="header_searchInput" type="text"></input>
                <SearchIcon className="header_searchIcon"/>
            </div>    

            <div className="header__nav">
                <div className="header__option">
                    <span className="header_optionLineOne">Hello</span>
                    <span onClick={navigateToSignIn} className="header_optionLineTwo">Sign In</span>
                </div>
                <div className="header__option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
                <div onClick={navigateToCheckout} className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header_optionLineTwo header_basketCount">{basket.length}</span>
                </div>
            </div>
        </div>
    )
}

export default Header;


// 1:11