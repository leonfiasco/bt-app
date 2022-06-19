import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../contextApi/StateProvider';
import { getBasketTotal } from '../contextApi/reducer';

import styles from './styles.module.scss';

const SubTotal = () => {
	const [{ basket }, _] = useStateValue();
	return (
		<div className={styles.subtotal}>
			<CurrencyFormat
				renderText={(value) => (
					<>
						{console.log(value)}
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
