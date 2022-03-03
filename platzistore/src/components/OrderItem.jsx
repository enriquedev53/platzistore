import React from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';

const OrderItem = ({ product }) => {
	return (
		<div className={ styles.OrderItem }>
			<figure>
				<Image src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
				width={940}
				height={650}
				alt="bike" />
			</figure>
			<p>{product?.title}</p>
			<p>${product?.price}</p>
			<Image src={close} alt="close" />
		</div>
	);
}

export default OrderItem;
