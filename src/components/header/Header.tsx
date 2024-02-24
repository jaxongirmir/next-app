import Link from 'next/link'
import { FC } from 'react'
import styles from './Header.module.scss'
import { useRouter } from 'next/router'
import { title } from 'process'

const Header: FC = () => {
  const { pathname } = useRouter()
  const links = [
    { title: 'Home', path: '/', id: 1 },
    { title: 'About Page', path: '/about', id: 2 },
  ]
  console.log(pathname)
  return (
    <div className={styles.header}>
      {/* <Link href="/" className={pathname === '/' ? styles.active : ''}>
        Home
      </Link>
      <Link
        href="/about"
        className={pathname === '/about' ? styles.active : ''}
      >
        About page
      </Link> */}
      {links.map(link => (
        <Link
          key={link.id}
          href={link.path}
          className={pathname === link.path ? styles.active : ''}
        >
          {link.title}
        </Link>
      ))}
    </div>
  )
}

export default Header
