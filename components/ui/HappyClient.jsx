import React from 'react';
import Layout from '../layouts/Layout';
import Image from 'next/image';

function HappyClient() {
  return (
    <Layout styles="bg-dark-500">
        <div className='flex flex-col items-center gap-16 py-16'>
     <h4 className='font-fraunces7 font-mediumSm text-brown-300 text-center text-opacity-80 text-2xlg'>More than 150 happy clients</h4>
     <ul className='flex gap-8 items-center flex-wrap'>
   <li><Image alt='' src="https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f8776ae2c425f4ec285598c_NPCA%20logo%20-%20light.svg" width={94} height={32}/></li>
<li><Image alt='' src='https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f8776ba7d82c245fddf1b2e_national%20funding%20logo%20full.svg' width={105} height={32} /></li>
<li><Image alt='' src='https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f8776ef53cdd1e1f8cac5b1_lightstream%20logo.svg' width={150} height={32}/></li>
<li><Image alt='' src='https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f8776ffe9c75f7306788487_Sapient.svg' width={87} height={32}/></li>
<li><Image alt='' src='https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f87770a7e08d5bda4246f2d_thermofisher%20logo%20full.svg' width={120} height={32}/></li>
<li><Image alt='' src='https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f87771603d57a6804b8e1b9_sony%20logo%20full.svg' width={100} height={32}/></li>
<li><Image alt='' src='https://assets.website-files.com/5b60dd35a56ec7bab0703d2d/5f8777233f953b1ce5aa8781_sdge%20logo.svg' width={52} height={32}/></li>
     </ul>
        </div>

    </Layout>
  )
}

export default HappyClient