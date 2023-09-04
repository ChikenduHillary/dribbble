import Image from 'next/image'
import Link from "next/link"

// import AuthProviders from './AuthProviders';
import { NavLinks } from '@/constants'
// import { getCurrentUser } from '@/lib/session';

const Navbar = async () => {
  const session = null

  return (
    <nav className="flex justify-between items-center py-5 px-8 border-b border-nav-border gap-4">
      <div className="flex-1 flexStart gap-10">
        <Link href='/'>
            <Image 
                src="/logo.svg"
                width={115}
                height={43}
                alt="Flexibble"
            />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map(({href, text, key}) =>(
            <Link href={href} key={key}>
              {text}
            </Link>
          ))}
        </ul>
      </div>
      
      {/* <div className='flexCenter gap-4'>
        {session?.user ? (
          <>
            <>
              {session?.user?.image && (
                <Image 
                   src={session.user.image}
                   width={40}
                   height={40}
                   className="rounded-full"
                   alt={session.user.name}
                 />
              )}
            </>
            <Link href='/create-project'> Share Work</Link>
          </>
        ) : (
          <h1>AuthProviders </h1>
        )}
      </div> */}
    </nav>
  )
}

export default Navbar
