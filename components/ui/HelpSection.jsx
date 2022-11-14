import React from 'react';
import Layout from '../layouts/Layout';
import Link from 'next/link';

function HelpSection() {
  return (
    <Layout styles="bg-brown-900">
        <Link href='/' className=''>
        <div className='flex items-center justify-center h-52 lgc:px-[4%] text-center'>
    <h3 className='font-fraunces7 text-brown-300 mt-12 mb-0.5 text-7xls font-bold px-12'>🙋 How can we help?</h3>
        </div>
        </Link>
        
    </Layout>
  )
}

export default HelpSection