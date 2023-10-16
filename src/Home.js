import React, { useState } from 'react';
import "./Home.css";
import Product from './Product';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function Home() {
  const [searchInput, setSearchInput] = useState(""); // State for search input
  const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products
  const[{ basket, user}, dispatch] = useStateValue();


    const navigate = useNavigate();

    const navigateToHome = ()=>{
        navigate("/")
    }
    const navigateToorderpage = ()=>{
      navigate("/order")
  }

    const navigateToCheckout = ()=>{
        navigate("/checkout")
    }

    // const navigateToSignIn = ()=> {
    //     navigate("/login")
    // }

    const handleAuthentication = () => {
        if(user){
            auth.signOut();
            alert('Logged out successfully')
        }
        if(!user){
            navigate('/login')
        }
    }
  // Your list of products
  const products = [
    // Product objects here
    {
      id: "12321341",
      title: "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
      price: 11.96,
      rating: 5,
      image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
    },
    {
      id: "49538094",
      title: "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
      price: 239.0,
      rating: 4,
      image: "https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg",
    },
    {
      id: "4903850",
      title: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
      price: 199.99,
      rating: 3,
      image: "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",
    },
    {
      id: "23445930",
      title: "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
      price: 98.99,
      rating: 5,
      image: "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",
    },
    {
      id: "3254354345",
      title: "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
      price: 598.99,
      rating: 4,
      image: "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg",
    },
    {
      id: "57568421",
      title: "Apple iPhone 14 Pro Max (128 GB) - Space Black",
      price: 699.99,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/610pghkO81L._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      id: "90829332",
      title: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
      price: 1094.98,
      rating: 4,
      image: "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",
    },
    {
      id: "4878202",
      title: "Mens Court Vision Lo Nn Sneaker",
      price: 600.99,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/41B9Go5uuuL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: "931772901",
      title: "ASUS ROG Zephyrus Duo 16 (2022) Dual Screen Laptop",
      price: 1200.99,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/71JFMDI0tOL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      id: "82836352",
      title: "Casaliving Minta LHS 4 Seater L Shape Sofa Set for Living Room (Black Fabric)",
      price: 20.99,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/61OSGSM8MwL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      id: "63298273",
      title: "MamyPoko Pants Extra Absorb Diapers, Large (L), 46 Count, 9-14 kg MamyPoko Pants Extra Absorb Diapers, Large (L), 46 Count, 9-14 kg",
      price: 6.99,
      rating: 5,
      image: "https://images-eu.ssl-images-amazon.com/images/I/71F76QIs2xL._AC_UL450_SR450,320_.jpg",
    },
    {
      id: "632803828",
      title: "boAt Newly Lauched Wave Elevate Smart Watch with 1.96",
      price: 69.99,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/71to+uN06pL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg",
    },
    {
      id: "84736522",
      title: "Men's Oversized Cottonblend Half Sleeve Printed Tshirt",
      price: 30.99,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/61CxYdukSIL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: "34827191",
      title: "TP-link N300 WiFi Wireless Router TL-WR845N | 300Mbps Wi-Fi Speed",
      price: 56.99,
      rating: 5,
      image: "https://images-eu.ssl-images-amazon.com/images/I/41fQ5NSkEWL._AC_UL600_SR600,400_.jpg",
    },
    {
      id: "29182031",
      title: "boAt Stone 180 5W Bluetooth Speaker with Upto 10 Hours",
      price: 109.99,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/71YXa2+AyNL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      id: "32101929",
      title: "GIVA 925 Sterling Silver Zircon Drizzle Drop Earrings",
      price: 209.99,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/6184nfAmwTL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: "32101929",
      title: "Amazon Brand - Jam & Honey Penguin, Plush/Soft Toy for Boys, Girls and Kids, Super-Soft, Safe, Great Birthday Gift",
      price: 9.99,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/61A2ddWFQxL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: "32101929",
      title: "Toy Drone With Hq Wifi Camera Remote Control For Kids Quadcopter With Gesture Selfie, Flips Bounce Mode, App One Key",
      price: 99.99,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/51Q76e81tlL._AC_UL480_QL65_.jpg",
    },
  ];

  // Function to handle changes in the search input
  const handleSearchInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    // Filter products based on the search input
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // Helper function to group products into rows of three
  const groupProductsIntoRows = (productsArray, itemsPerRow) => {
    const rows = [];
    for (let i = 0; i < productsArray.length; i += itemsPerRow) {
      rows.push(productsArray.slice(i, i + itemsPerRow));
    }
    return rows;
  };

  return (
    <div className="home">
      <div className="home_container">
      <div className='header'>
        <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Banner" onClick={navigateToHome} />
        
        
        {/* Search bar */}
        <div className="header_search">
        <input className="header_searchInput"
          type="text"
          placeholder="Search for products..."
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        </div>
        <div className="header__nav">
                <div onClick={handleAuthentication} className="header__option">
                    <span className="header_optionLineOne">Hello {user?.email}</span>
                    <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
                <div className="header__option" onClick={navigateToorderpage}>
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
<img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/CEPC/PC-Acc/GW/TOD_1500x600_withoutmock._CB596626071_.jpg"></img>
        {/* Render filtered products or all products */}
        {searchInput === "" ? (
          groupProductsIntoRows(products, 3).map((row, rowIndex) => (
            <div className="home_row" key={rowIndex}>
              {row.map((product) => (
                <Product
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  image={product.image}
                />
              ))}
            </div>
          ))
        ) : (
          filteredProducts.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.image}
            />
          ))
        )}
      </div>
      
    </div>
    
  );
}

export default Home;
