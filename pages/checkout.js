import SubTotal from '../components/SubTotal/SubTotal';
import CheckoutProduct from '../components/CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../components/contextApi/StateProvider';

import styles from './checkout/styles.module.scss';

function Checkout() {
	const [{ basket, _ }] = useStateValue();

	return (
		<div className={styles.checkout}>
			<div className={styles.checkoutProductWrap}>
				<h2 className={styles.checkoutTitle}>Your shopping Basket</h2>
				{basket.map((item, i) => (
					<CheckoutProduct
						key={i}
						id={item.id}
						title={item.title}
						image={item.image}
						price={item.price}
						discount={item.discount}
					/>
				))}
			</div>
			<div className={styles.checkoutRight}>
				<SubTotal />
			</div>
		</div>
	);
}

export default Checkout;
