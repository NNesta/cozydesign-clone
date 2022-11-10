import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const showNav=()=>{
    if(window.scrollY<=lastScroll)
    {
       setShow(false)
    }
    else{
     setShow(true)
    }
      setLastScroll(window.scrollY)
  }
  useEffect(()=>{
    console.log(window.scrollY)
    if(window !== 'undefined'){
      window.addEventListener('scroll',showNav)
    }
    return ()=>{
      window.removeEventListener('scroll', showNav)
    }

  }, [lastScroll])
  return (
    <div className={`w-screen fixed top-0 h-24 navbar--bg z-[500] ${show&&'-z-50'} duration-300 ease-in-out`}>
     <div className='w-full flex gap-8 justify-center lg:justify-between items-center max-w-[90%] mx-auto'>
       <Link className='relative w-24 aspect-square' href='/'><Image src='/assets/logo-1.svg' fill alt='logo-nav'/></Link>
       <Image alt='' className='block mdc:hidden' height={80} width={80} src="/assets/menu.png"/>
        <ul className='hidden mdc:flex gap-16 font-fraunces7 '>
            <li className='hover:text-brown-500 text-brown-100 hover:-translate-y-1 ease-in duration-300 text-2xl font-semibold'><Link href='/'>Get Cozy</Link></li>
            <li className='hover:text-brown-500 text-brown-100 hover:-translate-y-1 ease-in duration-300 text-2xl font-semibold'><Link href='/'>What we do</Link></li>
            <li className='hover:text-brown-500 text-brown-100 hover:-translate-y-1 ease-in duration-300 text-2xl font-semibold'><Link href='/'>Our work</Link></li>
            <li className='hover:text-brown-500 text-brown-100 hover:-translate-y-1 ease-in duration-300 text-2xl font-semibold'><Link href='/'>The blog</Link></li>
            <li className='hover:text-brown-500 text-brown-100 hover:-translate-y-1 ease-in duration-300 text-2xl font-semibold'><Link href='/'>Say hi</Link></li>
        </ul>
     </div>
    </div>
  )
}

export default Navbar