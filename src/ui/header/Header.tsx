import styles from './header.module.css'
import Link from "next/link";
import HeaderButtonMenu from "@/ui/header/HeaderButton";

export default function () {
    return (
        <header className={styles.header}>
            <div className={styles.header__wrapper}>
                <Link href={""} className={styles.brand}>Home</Link>
                <nav className={styles.nav}>
                    <HeaderButtonMenu/>
                </nav>
            </div>
        </header>
    )
}
