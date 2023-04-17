import Link from "next/link"
const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/add-book'>Add</Link></li>
                <li><Link href='/view-profile'>Profile</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header