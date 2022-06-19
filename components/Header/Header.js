import Link from 'next/link';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../contextApi/StateProvider';
import styles from './styles.module.scss';

const Header = () => {
	const [{ basket, user }, dispatch] = useStateValue();

	return (
		<div className={styles.header}>
			<div className={styles.headerNav}>
				{/* stops the page redirecting to login form when a user signs out 
        if user not found then go to login page */}

				{/* <Link to='/checkout'> */}
				<a className={styles.headerOptionBasket}>
					<ShoppingBasketIcon />
					<span
						className={`${styles.headerOptionLineTwo} ${styles.headerBasketCount}`}
					>
						{basket?.length}
					</span>
				</a>
				{/* </Link> */}
			</div>
		</div>
	);
};

export default Header;
