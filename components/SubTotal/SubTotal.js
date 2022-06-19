import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../contextApi/StateProvider';
import { getBasketTotal } from '../contextApi/reducer';

import styles from './styles.module.scss';

const SubTotal = () => {
	const [{ basket }, _] = useStateValue();
	console.log(basket);
	const renderPriceList = () => {
		return basket.map((item) => {
			return <p>{`price: £${item.price}`}</p>;
		});
	};
	return (
		<div className={styles.subtotal}>
			<div className={styles.pricesWrap}>{renderPriceList()}</div>
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({basket.length} items):
							<strong>{value}</strong>
						</p>
					</>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'£'}
			/>
		</div>
	);
};

export default SubTotal;
