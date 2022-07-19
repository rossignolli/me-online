/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' /> *
      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <Image
              src='https://avatars.githubusercontent.com/u/34142721?v=4'
              width='160px'
              height='160px'
              className=' rounded-full border-4 border-gray-300'
              alt='Vitor Rossignolli Profile Picture'
            />

            <h1 className='m-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text p-4 text-8xl font-extrabold text-transparent'>
              Vitor Vigarani Rossignolli
            </h1>
            <p className='font-bold text-black '>
              <a
                href='https://github.com/rossignolli/'
                className='flex items-center '
              >
                {' '}
                <Image
                  src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
                  width='30px'
                  height='30px'
                  alt='Github Logo'
                  className=' mr-2'
                />
                Github @rossignolli
              </a>
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
