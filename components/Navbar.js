import Image from 'next/image'
import Link from 'next/link';
import LanguageSelector from './LanguageSelector'

const Navbar = ({header, locales, locale, story}) => {
  
  return <header className="py-2 px-3 bg-white w-100 flex inset-x-0 top-0 bg-opacity-50 justify-between items-center">
      <Link href="/">
        <a>

      <Image width="150" height="41,5" src={header?.logo.filename} className="bg-white" />
        </a>
      </Link>
      <div className="flex items-center justify-end">
        <nav>
          <LanguageSelector locale={locale} locales={locales} story={story} />
        </nav>
      </div>
  </header>
}

export default Navbar;