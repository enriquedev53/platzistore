import React, { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';

const Header = () => {
	const [toggle, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
}

	return (
		<>
			<nav className={styles.Nav}>
				<Image src={menu} alt="menu" className={styles.menu} />
				<div className={styles['navbar-left']}>
					<Link href="/">
						<Image src={logo} alt="logo" className={styles['nav-logo']} />
					</Link>
					<ul>
						<li>
							<a href="/">All</a>
						</li>
						<li>
							<a href="/">Clothes</a>
						</li>
						<li>
							<a href="/">Electronics</a>
						</li>
						<li>
							<a href="/">Furnitures</a>
						</li>
						<li>
							<a href="/">Toys</a>
						</li>
						<li>
							<a href="/">Others</a>
						</li>
					</ul>
				</div>
				<div className={styles['navbar-right']}>
					<ul>
						<li className={styles['navbar-email']} onClick={handleToggle}>
							platzi@example.com
						</li>
						<li className={styles['navbar-shopping-cart']}>
							<Image src={shoppingCart} alt="shopping cart" />
							<div>2</div>
						</li>
					</ul>
				</div>
				{toggle && <Menu />}
			</nav>
			{toggle && <MyOrder />}
		</>
	);
}

export default Header;

// import React, { useState } from 'react';
// import Image from 'next/image';
// import MyOrder from '@containers/MyOrder';
// import Menu from '@components/Menu';
// import menu from '@icons/icon_menu.svg';
// import logo from '@logos/logo_yard_sale.svg';
// import AppContext from '@context/AppContext';
// import shoppingCart from '@icons/icon_shopping_cart.svg';
// import styles from '@styles/Header.module.scss';

// const Header = () => {
// 	const [toggle, setToggle] = useState(false);

// 	const handleToggle = () => {
// 		setToggle(!toggle);
// 	}

// 	return (
// 		<nav className={styles.Nav}>
// 			<Image src={menu} alt="menu" className={styles.menu} />
// 			<div className={styles['navbar-left']}>
// 				<Image src={logo} alt="logo" className={styles['nav-logo']} />
// 				<ul>
// 					<li>
// 						<a href="/">All</a>
// 					</li>
// 					<li>
// 						<a href="/">Clothes</a>
// 					</li>
// 					<li>
// 						<a href="/">Electronics</a>
// 					</li>
// 					<li>
// 						<a href="/">Furnitures</a>
// 					</li>
// 					<li>
// 						<a href="/">Toys</a>
// 					</li>
// 					<li>
// 						<a href="/">Others</a>
// 					</li>
// 				</ul>
// 			</div>
// 			<div className={styles['navbar-right']}>
// 				<ul>
// 					<li className={styles['navbar-email']} onClick={handleToggle}>
// 						platzi@example.com
// 					</li>
// 					<li className={styles['navbar-shopping-cart']}>
// 						<Image src={shoppingCart} alt="shopping cart" />
// 						<div>2</div>
// 					</li>
// 				</ul>
// 			</div>
// 			{toggle && <Menu />}
// 		</nav>
// 	);
// }

// export default Header;
