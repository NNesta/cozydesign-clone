import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../layouts/Layout';

function Footer() {
  return (
    <Layout styles='bg-brown-100'>
    <div className='flex flex-col gap-4 max-w-[90%] mx-auto'>
      <div className='flex flex-col sm:flex-row justify-between items-center my-16'>
      <div className='flex flex-col lgc:flex-row gap-8 items-center'>
        <Link href='/'><Image alt='' width={73} height={50} src='https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f8782865afd27755f3cb5bd_Cozy_logo_denim.svg'/></Link>
        <ul className='flex flex-col mdc:flex-row gap-8 items-center py-8'>
          <li className='font-fraunces7 mr-8 mt-1 text-brown-900 text-lgg font-mediumSm'><Link href='/'>Services</Link></li>
        
          <li className='font-fraunces7 mr-8 mt-1 text-brown-900 text-lgg font-mediumSm'><Link href='/'>Work</Link></li>
        
          <li className='font-fraunces7 mr-8 mt-1 text-brown-900 text-lgg font-mediumSm'><Link href='/'>Blog</Link></li>
        
          <li className='font-fraunces7 mr-8 mt-1 text-brown-900 text-lgg font-mediumSm'><Link href='/'>Contact</Link></li>
        </ul>

      </div>
      <div className='flex flex-col lgc:flex-row items-center gap-8'>
       <div className='flex items-center '>
     <Image src='https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f862ba8b2efe0fc2b486af2_emoji%402x.webp' width={20} height={20} />
     <Link href='' className='text-red-550 text-lgs1 ml-2 font-fraunces7 font-mediumSm '>
      San Diego Digital Designers
     </Link>
     
       </div>
       <ul className='flex items-center gap-2'>
         <li className='bg-colorIcon-tw h-6 rounded-[3px] hover:bg-opacity-70 transition-opacity duration-300 aspect-square flex items-center justify-center'><Link href='/'><Image alt='social icon' width={12} height={12} src='https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b60dd35a56ec709b2703dcf_twitter-icon-white.svg'/></Link></li>
         <li className='bg-colorIcon-ld h-6 rounded-[3px] hover:bg-opacity-70 transition-opacity duration-300 aspect-square flex items-center justify-center'><Link href='/'><Image alt='social icon' width={12} height={12} src='https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b7ca6c2fa8225b032800f4b_logo%20linkedin.svg'/></Link></li>
         <li className='bg-colorIcon-fb h-6 rounded-[3px] hover:bg-opacity-70 transition-opacity duration-300 aspect-square flex items-center justify-center'><Link href='/'><Image alt='social icon' width={12} height={12} src='https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b60dd35a56ec76cb2703dcb_facebook-icon-white.svg'/></Link></li>
         <li className='bg-colorIcon-in h-6 rounded-[3px] hover:bg-opacity-70 transition-opacity duration-300 aspect-square flex items-center justify-center'><Link href='/'><Image alt='social icon' width={12} height={12} src='https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b60dd35a56ec72b67703dcc_instagram-icon-white.svg'/></Link></li>
         <li className='bg-colorIcon-yt h-6 rounded-[3px] hover:bg-opacity-70 transition-opacity duration-300 aspect-square flex items-center justify-center'><Link href='/'><Image alt='social icon' width={12} height={12} src='https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/603d6382bef83b84cdeb5671_icn_youtube-white.svg'/></Link></li>
         <li className='bg-colorIcon-cl h-6 rounded-[3px] hover:bg-opacity-70 transition-opacity duration-300 aspect-square flex items-center justify-center'><Link href='/'><Image alt='social icon' width={12} height={12} src='https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/633246b3d2509ffd71749f81_clutch.svg'/></Link></li>
         <li className='bg-colorIcon-em h-6 rounded-[3px] hover:bg-opacity-70 transition-opacity duration-300 aspect-square flex items-center justify-center'><Link href='/'><Image alt='social icon' width={12} height={12} src='https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b807bd69a836145c6f39016_icon%20envelope.svg'/></Link></li>
       </ul>
      </div>
</div>
<div className='flex flex-col lgc:flex-row justify-between items-center py-16 border-t-2 border-brown-900'>
  <div className='flex flex-col mdc:flex-row items-center gap-8'>
<div className='flex flex-col items-center gap-2'>
    <Image alt='' src='https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/6331fe7646cb0557541386cd_BBB%20Accredited%20Business%20Horizontal%20Seal%20-%20Vector69Com.svg' width={140} height={53}/>
    <h3 className='text-dark-700 font-semibolder text-lgg1'>BBB rating: A+</h3>
</div>
<Image alt='' width={140} height={73} src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/634dd43d0cf9ec7420324d59_bod-new_shield-logo-member.png"/>
<div className='bg-white rounded-tr-[25px] rounded-bl-[25px] overflow-hidden flex items-center w-52 h-[50px] '>
 
    <div className='aspect-square flex items-center justify-center h-full relative  bg-dark-600 rounded-tr-[25px]'>
      
    <Image alt='c-icon' src='/assets/c-icon.svg' width={25} height={25}/>
  </div>
  <div className='flex flex-col w-full items-center justify-center'>
   <div className='flex gap-2 items-center justify-center'>
     <p className='text-dark-600 text-xls1 '>5.0</p>
     <Link href='/'>
     <ul className='flex gap-1'>
      {[1,1,1,1,1].map((_,index)=><li key={index}><Image alt='icons' src='/assets/star.svg' width={16} height={16}/></li>)}
     </ul></Link>
   </div>
     <Link href='/' className='text-mds tracking-[-.2px] mt-1 whitespace-nowrap text-dark-600 hover:underline decoration-dark-600'>Based on 16 Clutch reviews</Link>
  </div>
</div>
</div>
<div className='flex flex-col sm:flex-row items-center gap-8 pt-16 lgc:pt-0'>
  <p className='text-xs text-dark-700 font-mediumSm mr-4 font-fraunces7'>
Made with <Image alt='' className='inline' src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b60dd35a56ec704b0703e39_heart-icon-color.svg" width={11} height={10}/> in beautiful, sunny San Diego. ©2021</p>
<ul className='flex gap-4 items-center justify-end'>
          <li className='font-fraunces7 mt-1 text-brown-900 text-lgg font-mediumSm'><Link href='/'>Privacy</Link></li>
        
          <li className='font-fraunces7 mt-1 text-brown-900 text-lgg font-mediumSm'><Link href='/'>Photo credit</Link></li>

        </ul>
</div>
</div>
    </div>
    </Layout>
  )
}

export default Footer