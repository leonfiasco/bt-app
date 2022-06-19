import { useStateValue } from '../contextApi/StateProvider';

import styles from './styles.module.scss';

function Product({ id, title, image, price, discount = 0 }) {
	const [{ basket }, dispatch] = useStateValue();
	console.log(basket);

	const addToBasket = () => {
		//dispatching item to the data layer
		dispatch({
			type: 'ADD_TO_BASKET',
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				discount: discount,
			},
		});
	};

	return (
		<div className={styles.product}>
			<div className={styles.productInfo} key={id}>
				<p>{title}</p>
				<p className={styles.productPrice}>
					<small>£</small>
					<strong>{price}</strong>
				</p>
			</div>
			<img src={image} alt='' />
			<button onClick={addToBasket}>Add to Basket</button>
		</div>
	);
}

export default Product;
