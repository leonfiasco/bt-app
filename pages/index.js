import Product from '../components/Product/Product';

import styles from '../components/Home/styles.module.scss';

function Home() {
	return (
		<div className={styles.home}>
			<div className={styles.homeContainer}>
				<div className={styles.homeRow}>
					<Product
						id='12321341'
						title='The Mamba Mentality: How I Play'
						price={19.99}
						image='https://m.media-amazon.com/images/I/81qy7sYwR6L._AC_UY218_.jpg'
						rating={5}
					/>
					<Product
						id='3254354345'
						title='All-new Echo Dot (4th generation) | Smart speaker with Alexa | Charcoal'
						price={69.99}
						discount={2}
						image='https://m.media-amazon.com/images/I/71UGFF-EzFL._AC_UY218_.jpg'
						rating={4}
					/>
				</div>

				<div className={styles.homeRow}>
					<Product
						id='49538094'
						title='LG 42LF652V Smart 42 Inch TV with webOS [Energy Class A+]'
						price={451.61}
						image='https://images-na.ssl-images-amazon.com/images/I/511HWXSo3JL._AC_.jpg'
						rating={5}
						discount={100}
					/>
					<Product
						id='4903850'
						title='Kindle Paperwhite | Waterproof, High-Resolution Display 8GB—with Ads—Black'
						price={99.99}
						image='https://m.media-amazon.com/images/I/51DVu7YNt7L._AC_UY218_.jpg'
						rating={3}
					/>
					<Product
						id='23445930'
						title='Red Dead Redemption 2 (PS4)'
						price={21.0}
						image='https://m.media-amazon.com/images/I/91C8piUiI0L._AC_UY218_.jpg'
						rating={4}
						discount={5}
					/>
				</div>

				<div className={styles.homeRow}>
					<Product
						id='90829332'
						title='Wilson Evolution EMEA Basketball'
						price={39.99}
						image='https://images-na.ssl-images-amazon.com/images/I/71t4eIPns4L._AC_SX679_.jpg'
						rating={5}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
