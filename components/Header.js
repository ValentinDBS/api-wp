import Link from 'next/link'
import Searchbar from './Searchbar'
import { IoMdArrowDropdown } from "react-icons/io"

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <div className="left-nav">
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/">Agents</Link></li>
            <li><Link href="/">Rôles <IoMdArrowDropdown /></Link></li>
          </div>
          <Searchbar />
        </ul>
      </nav>
        
    </header>
  )
}

export default Header