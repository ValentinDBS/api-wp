import Link from 'next/link'
import Searchbar from './Searchbar'
import Image from 'next/image'
import { IoMdArrowDropdown } from "react-icons/io"

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <div className="left-nav">
            <li>
              <Link href="/">
                <Image 
                  src="/images/valorant-logo.webp"
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
              </Link>
            </li>
            <li>
              <Link href="/">
                Agents
              </Link>
            </li>
            <li>
              <Link href="/">
                Rôles <IoMdArrowDropdown />
              </Link>
            </li>
          </div>
          <Searchbar />
        </ul>
      </nav>
        
    </header>
  )
}

export default Header