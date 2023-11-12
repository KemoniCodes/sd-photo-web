import Image from 'next/image';
import Link from 'next/link';
import DarkLogo from '../../../public/sdSubMarkDark.png';
export default function Navbar() {
  return (
    <>
      <nav className='flex'>
        <div className="logo mx-auto mt-0 z-[1]">
          <Link href={'/'} className='fixed'>
            <Image src={DarkLogo} width={50} alt='dark logo' />
          </Link>
        </div>
        <ul className="navlist fixed right-0 mr-[27px] z-10">
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