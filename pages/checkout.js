import React from 'react';
// import Subtotal from './Subtotal';
// import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from '../components/contextApi/StateProvider';

import styles from './checkout/styles.module.scss';

function Checkout() {
	const [{ basket, _ }] = useStateValue();
	return (
		<div className={styles.checkout}>
			<h2 className={styles.checkout_title}>Your shopping Basket</h2>

			{/* <div className='checkout_right'>
				<Subtotal />
			</div> */}
		</div>
	);
}

export default Checkout;
