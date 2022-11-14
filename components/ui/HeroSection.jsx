import React from 'react';
import Image from 'next/image';
import Layout from '../layouts/Layout';
import Button from './Button';

function HeroSection() {
  return (
        <Layout styles="h-full bg-brown-100 hero-gradient">
            <div className='fixed bottom-[50%] right-8 lg:bottom-8 lg:left-8 z-[15000]'>
                <div className='w-[50px] h-[50px]  bg-[#7c4e49] p-4 rounded-full'>

   <Image className='text-white' src='/assets/man.svg' height={25} width={25} layout='responsive'/>
                </div>
                <div className='absolute w-4 bottom-0'>

   <Image className='bg-white rounded-full' src='/assets/v-icon.svg' height={1} width={1} layout='responsive'/>
                </div>
            </div>
            <div className='flex flex-col mdc:flex-row   max-w-[80%] lgc:max-w-[95%] mx-auto pt-[9.6rem] items-center h-full lgc:h-[960px]'>
                <div className='w-full -mt-[100px] flex justify-center flex-col gap-6 font-fraunces1 items-start flex-1'>
                    <h1 className='text-8xls mdc:text-10xl lg:text-10xlg bg-brown-300  bg-clip-text font-bold text-transparent noisy-100 max-w-[90%] pb-2 '>Your design team for the cost of a salary.</h1>
                    <p className='text-8xls1 mdc:text-8xl bg-brown-100 noisy-100 opacity-80  tracking-widest bg-clip-text text-transparent font-semibold mb-16 '>{"Full-service design support that growing B2B and non-profit organizations need. Are you strained because you should have a design team but you don't?"}</p>
                    <Button>see how we work & what we can do</Button>
                </div>
                <div className='w-screen xsc:w-[93vw] smc:w-[79vw] mdc:w-[63vw] lgc:w-[58vw] mt-[60px] mdc:-mr-[160px]'>

                <Image width={25} height={25} layout='responsive' srcset="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/63472dce62c72c7aebabade5_getcozy-p-500.png 500w, https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/63472dce62c72c7aebabade5_getcozy-p-800.png 800w, https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/63472dce62c72c7aebabade5_getcozy.png 1000w"  alt="" class="image-7" data-selected="true" data-label-id="0"/>
                </div>
                    

            </div>
        </Layout>
  )
}

export default HeroSection