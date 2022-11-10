import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../layouts/Layout';
import Button from './Button';

function HeroSection() {
  return (
        <Layout styles="h-fit bg-brown-100 hero-gradient">
            <div className='flex flex-col lg:flex-row pt-28 gap-16 max-w-[80%] lgc:max-w-[95%] mx-auto items-center'>
                <div className='flex flex-col font-fraunces1 items-start gap-12 flex-1'>
                    <h1 className='text-8xls mdc:text-10xl bg-brown-300  bg-clip-text font-bold text-transparent noisy-100 max-w-[80%] pb-8'>Your design team for the cost of a salary.</h1>
                    <p className='text-8xls1 mdc:text-8xl bg-brown-100 noisy-100 opacity-80 max-w-[90%] tracking-widest bg-clip-text text-transparent font-semibold '>Full-service design support that growing B2B and non-profit organizations need. Are you strained because you should have a design team but you don't?</p>
                    <Button>see how we work & what we can do</Button>
                </div>
                <div className=' relative h-full aspect-square flex-1'>
                    <div className=''>
                <Image fill sizes="(max-width: 479px) 100vw, (max-width: 767px) 93vw, (max-width: 991px) 79vw, (max-width: 1279px) 63vw, 58vw" srcset="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/63472dce62c72c7aebabade5_getcozy-p-500.png 500w, https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/63472dce62c72c7aebabade5_getcozy-p-800.png 800w, https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/63472dce62c72c7aebabade5_getcozy.png 1000w" src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/63472dce62c72c7aebabade5_getcozy.png" alt="" class="image-7" data-selected="true" data-label-id="0"/>
                    </div>
                {/* <Image className='' src='/assets/welcome.png' width={745} height={758} layout='responsive'/> */}
                </div>

            </div>
        </Layout>
  )
}

export default HeroSection