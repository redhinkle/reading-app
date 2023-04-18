import Link from "next/link"

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="menuItems">
          <li className="menuItem">
            <Link href="/">Home</Link>
          </li>
          <li className="menuItem">
            <Link href="/add-book">Add</Link>
          </li>
          <li className="menuItem">
            <Link href="/view-profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header