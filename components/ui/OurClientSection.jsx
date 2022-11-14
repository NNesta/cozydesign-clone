import React from 'react';
import Image from 'next/image';
import Layout from '../layouts/Layout';

function OurClientSection() {
  return (
    <Layout styles="bg-brown-100">
   <div className="flex flex-col gap-8 max-w-full overflow-x-hidden lgc:max-w-[1200px] mx-auto py-4 px-4">
      <div className='flex flex-col gap-8 items-center py-4 lgc:py-32'>
    <h1 className='text-dark-500 font-semibold font-fraunces7 text-xlg1 lgc:text-8xls text-center'>❤️ from our clients</h1>
      <hr  className='w-12 h-1 bg-brown-500 opacity-80'/>
      </div>
    <div className='relative grid lgc:grid-rows-2 gap-6 z-10 w-full lgc:w-10/12 -mt-4 mx-auto '>
      <div className='absolute hidden lgc:flex inset-0 justify-center items-center z-[1000]'>
        <div className=' p-2 rounded-full border-brown-100 border-2 border-opacity-25'>
        <div className='p-2 rounded-full border-brown-100 border-2'>
        <div className='bg-brown-100 rounded-full p-6'>

        <Image alt='' className='rounded-full ' width={32} height={32} src='https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b60dd35a56ec72df4703e47_chat-icon-black.svg'/>
        </div></div>
      </div></div>
       <div className='grid lgc:grid-cols-2 gap-6 lgc:w-10/12 mx-auto mt-2'>
        <div className='py-20 pr-10 pl-16 noisy-100 flex flex-col gap-8 items-end text-right lgc:mt-52 rounded-t-[80%] rounded-bl-[100%] bg-dark-500'>
           <Image alt='client 1' className='self-center' src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5b770510976c9e1777077786_susie.webp" width={74} height={74}/>
           <h4 className='text-brown-300 font-fraunces7 text-xls2 font-semibold'>{'“One of the top design professionals…”'}</h4>
           <p className='text-brown-100 font-fraunces7 text-xls3 font-mediumSm '>{"I connect with hundreds of talented folks on a regular basis, and I can say with complete confidence that Lee is one of the best UX designers in Aquent/Vitamin T's global network"}</p>
           <h4 className='font-geomanist text-lgs font-semibolder uppercase tracking-[4px]'>SUSIE POLLASKY</h4>
           <p className='text-lgs font-geomanist font-mediumSm text-brown-100 opacity-70'>Now: Leadership Recruiting @ Product Design
at Facebook</p>

        </div>
        <div className='p-20 noisy-100 flex flex-col gap-8 items-start text-left rounded-t-[100%] rounded-br-[50%] bg-dark-700'>
           <Image alt='client 2' className='self-center' src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/604fb5a50fc9931734c91126_1517679695814.webp" width={74} height={74}/>
           <h4 className='text-brown-300 font-fraunces7 text-xls2 font-semibold'>{'“They’re a very well-rounded organization…”'}</h4>
           <p className='text-brown-100 font-fraunces7 text-xls3 font-mediumSm'>{"Cost per conversion and all of those metrics have dropped significantly. We used to pay an average of $100 per lead that converts… now we have that  down to about $20. Sessions and contacts have also gone up astronomically, at least threefold. Organic search and social media referrals have all continued to skyrocket. We’re really pleased."}</p>
           <h4 className='font-geomanist text-lgs font-semibolder uppercase tracking-[4px]'>MARTIN SPRITZER</h4>
           <p className='text-lgs font-geomanist font-mediumSm text-brown-100 opacity-70'>General Manager @ iQuoteXpress</p>

      
       </div>
       
    </div>
       <div className='grid lgc:grid-cols-2  gap-6 w-full lgc:w-10/2 mx-auto mb-52'>
        <div className='p-20 noisy-100 flex flex-col gap-8 items-end text-right bg-brown-500 rounded-tl-[100%] rounded-b-[60%] bg-50'>
           <Image alt='client 3' className='self-center' src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/604fb7dda4eebc035f1c0beb_1565729526231.webp" width={74} height={74}/>
           <h4 className='text-brown-100 font-fraunces7 text-xls font-semibold'>{"“They're just good people.”"}</h4>
           <p className='text-brown-100 font-fraunces7 text-xls3 font-mediumSm'>{"They were a pleasure to work with and I'm really happy with the results. They pretty much nailed it."}</p>
           <h4 className='font-geomanist text-lgs font-semibolder uppercase tracking-[4px]'>ERIC WEISS</h4>
           <p className='text-lgs font-geomanist font-mediumSm text-brown-100 opacity-70'>Founder @ Full Cycle Product Development</p>

        </div>
        <div className='p-20 noisy-100 flex flex-col gap-8 items-start bg-brown-900 rounded-tr-[100%] rounded-b-[60%] bg-50'>
           <Image alt='client 4' className='self-center' src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/604fb8a427acfd62e2c3148c_Michael%20Weisfeld-p-500.webp" width={74} height={74}/>
           <h4 className='text-brown-100 font-fraunces7 text-xls font-semibold text-left'>{'“The project was successful”'}</h4>
           <p className='text-brown-100 font-fraunces7 text-xls3 font-mediumSm'>{"They strive to come up with good design, and they focus on all the right things. The quality of their work is high, and all the deliverables are very well-organized and professional."}</p>
           <h4  className='font-geomanist text-lgs font-semibolder uppercase tracking-[4px]'>MICHAEL WEISFELD</h4>
           <p className='text-lgs font-geomanist font-mediumSm text-brown-100 opacity-70'>Director of Digital Marketing @ National Funding</p>

      
       </div>
       
    </div>
   </div>
   </div>
    </Layout>
  )
}

export default OurClientSection