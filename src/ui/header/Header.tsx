import Links from '@/components/Header/Links'
import styles from './header.module.css'
export default function () {
	return (
		<header className={styles.header}>
			<nav className='m-auto'>
				<ul className={styles.headerList}>
					<Links />
				</ul>
			</nav>
		</header>
	)
}
