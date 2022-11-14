import React from 'react';
import Button from './Button';
import Image from 'next/image';
import Layout from '../layouts/Layout';

function GetCozySection() {
    const images1 = [
        {url:'https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/61cba966b768d255e6071b35_Clutch%20Global%202021-p-500.webp',
    
         width:140,
        height:140},
        {url:'https://res.cloudinary.com/expertise-com/image/upload/f_auto,fl_lossy,q_auto/w_auto/remote_media/awards/ca_san-diego_user-experience_2020_transparent.svg',
    
         width:160,
        height:140},
        {url:'https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/6036c8b7748af86c183f3830_SuperbCompanies%20Leader%20Award%202021%20Digital%20Marketing.webp',
    
         width:140,
        height:140},
        {url:'https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/618ad12798295b3339e8074b_Best-Web-Design-Companies-Badge-2-300x300.webp',
    
         width:140,
        height:140},
        
    ];
    const images2 = [
        {url:'https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/6331fe7646cb0557541386cd_BBB%20Accredited%20Business%20Horizontal%20Seal%20-%20Vector69Com.svg',
    
         width:140,
        height:52.84,
        text:"BBB rating: A+"
    
    },
        {url:'https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/6298fa400120341cd677f5d7_Web-Design-Services-San-Diego-California.webp',
    
         width:140,
        height:140},
        {url:'https://agencyvista.com/verified-agency-vista-badge.png',
    
         width:120,
        height:165.7},
        {url:'https://upcity-marketplace.s3.amazonaws.com/badge/159/basic_full_color/2e05d2b13e9e2c5f0dc9bb7292a80844.png',
    
         width:140,
        height:140},
        {url:'https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/6050fa6b0a1f01353a1cbbcc_50.00-Design-Rush-Accredited-Badge.webp',
    
         width:150,
        height:66.55},
       
    ]
  return (
    <Layout styles="h-fit bg-brown-100 cozy-gradient py-32">
<div className='flex flex-col lg:flex-row justify-between px-4 lgc:px-32'>
    <div className="flex flex-col gap- max-w-[630px] px-5 items-start">
        <p className='font-geomanist text-dark-500 uppercase font-semibolder text-2xls mb-4'>🌴🐻🇺🇸</p>
        <h1 className='text-dark-500 font-medium mt-10 mb-2.5 text-8xlg font-fraunces7'>Get Cozy</h1>
        <h4 className='font-fraunces7 font-mediumSm text-xlg text-brown-500 w-[80%]'>Design & digital marketing
in San Diego, California</h4>
  <p className='font-fraunces7 text-xls font-mediumSm mt-10'>We’re an award-winning design shop based in South Park, San Diego. We efficiently combine the best parts of user experience (UX) with creative design and execution to create effective collateral that connects with the human beings who interact with them. 🤯 </p>
<p className='font-fraunces7 text-xls font-mediumSm mt-4 mb-8'>No epic quests for inspiration. Just pragmatic collaboration and efficient results from big-agency graduates with decades of experience.</p>
<button className='hover:bg-opacity-80 transition-colors duration-300  text-lg text-white bg-brown-900 uppercase py-5 px-10 rounded-xl font-semibolder z-[100] bg-clip-padding bg-left-t ' >Why we do what we do</button>
    </div>
    <div className='grid grid-cols-2 gap-4'>
        <div className="flex flex-col gap-10">
       {images1.map((image,index)=><Image key={index} src={image.url} width={image.width} height={image.height} alt=''/>)}

        </div>
        <div className="flex flex-col gap-10 -mt-12">
        {images2.map((image,index)=>
        <div key={index} className='flex flex-col items-center gap-2'>
            <Image src={image.url} width={image.width} height={image.height} alt=''/> 
            {image.text&&<h3 className='text-dark-700 font-semibolder text-lgg1'>BBB rating: A+</h3>}
           </div> )}

        </div>

    </div>

</div>
    </Layout>
  )
}

export default GetCozySection