import { useStateValue } from '../contextApi/StateProvider';

import styles from './styles.module.scss';

function Product({ id, title, image, price, discount = 0 }) {
	const [{ _ }, dispatch] = useStateValue();

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
				<div className={styles.priceWrap}>
					<div className={styles.productPrice}>
						<small>£</small>
						<strong>{price}</strong>
					</div>
					{discount > 0 && (
						<div className={styles.discountPrice}>
							<small>£</small>
							<small>{discount}</small> off
						</div>
					)}
				</div>
			</div>
			<img src={image} alt='' />
			<button onClick={addToBasket}>Add to Basket</button>
		</div>
	);
}

export default Product;
