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
		<div
			className={styles.product}
			data-count={discount > 0 ? `£${discount} off` : null}
		>
			<div className={styles.productWrap}>
				<div className={styles.productInfo}>
					<p>{title}</p>
					<div className={styles.priceWrap}>
						<p className={styles.productPrice}>
							<small>£</small>
							{discount ? (
								<span className={styles.discountPrice}>
									<del>{price}</del>
									<small>£</small>
									<strong>{price - discount}</strong>
								</span>
							) : (
								<strong>{price}</strong>
							)}
						</p>
					</div>
				</div>
				<img src={image} alt='' />
				<div className={styles.btnWrap}>
					<button onClick={addToBasket}>Add to Basket</button>
				</div>
			</div>
		</div>
	);
}

export default Product;
