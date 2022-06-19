import Link from 'next/link';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import HomeIcon from '@material-ui/icons/Home';
import { useStateValue } from '../contextApi/StateProvider';
import styles from './styles.module.scss';

const Header = () => {
	const [{ basket }] = useStateValue();

	return (
		<div className={styles.header}>
			<Link href={'/'}>
				<a className={styles.headerOptionHome}>
					<HomeIcon />
				</a>
			</Link>
			<Link href={'/checkout'}>
				<a className={styles.headerOptionBasket}>
					<ShoppingBasketIcon />
					<span
						className={`${styles.headerOptionLineTwo} ${styles.headerBasketCount}`}
					>
						{basket?.length}
					</span>
				</a>
			</Link>
		</div>
		// </div>
	);
};

export default Header;
