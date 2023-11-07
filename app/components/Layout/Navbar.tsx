import Image from 'next/image';
import Link from 'next/link';
import DarkLogo from '../../../public/sdSubMarkDark.png';
export default function Navbar() {
  return (
    <>
      <nav className='flex'>
        <div className="logo mx-auto mt-0">
          <Link href={'/'}>
            <Image src={DarkLogo} width={50} alt='dark logo' />
          </Link>
        </div>
        <ul className="navlist">
          <li>projects</li>
          <li>portraits</li>
          <li>personal</li>
          <li>motion</li>
          <li>shop</li>
          <li>about</li>
        </ul>
      </nav>
    </>
  );
}