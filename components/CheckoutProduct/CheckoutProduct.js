import React from 'react';
import { useStateValue } from '../contextApi/StateProvider';

import styles from './styles.module.scss';

function CheckoutProduct({ id, image, title, price, hideButton, discount }) {
	const [{ _ }, dispatch] = useStateValue();

	const removeFromBasket = () => {
		// remove item from basket
		dispatch({
			type: 'REMOVE_FROM_BASKET',
			id: id,
		});
	};
	return (
		<div className={styles.checkoutProduct}>
			<img className={styles.checkoutProductImage} src={image} />
			<div className={styles.checkoutProductInfo}>
				<p className={styles.checkoutProductTitle}>{title}</p>
				<p className={styles.checkoutProductPrice}>
					<small>£</small>
					{discount ? (
						<span className={styles.discountPrice}>
							<del>{price}</del>
							<strong>{price - discount}</strong>
						</span>
					) : (
						<strong>{price}</strong>
					)}
				</p>
				{!hideButton && (
					<button onClick={removeFromBasket}>Remove from Basket</button>
				)}
			</div>
		</div>
	);
}

export default CheckoutProduct;
