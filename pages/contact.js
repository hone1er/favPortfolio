import Head from 'next/head';
import { useState } from 'react';

export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleMessage() {
    console.log(firstName, lastName, email, message);
  }
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta name='description' content="EBMUD's art portfolio" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex min-h-screen flex-col items-center p-0'>
        <div>
          <h1 className='mt-24 text-3xl'>Hit me up</h1>
          <p className='mt-6 mb-12'>
            Tell me what you&apos;re looking for and I will see what I can cook
            up
          </p>
        </div>
        <form className='mx-auto w-full max-w-lg'>
          <div className='-mx-3 mb-6 flex flex-wrap'>
            <div className='mb-6 w-full px-3 md:mb-0 md:w-1/2'>
              <label
                className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
                htmlFor='grid-first-name'
              >
                First Name
              </label>
              <input
                className='mb-3 block w-full appearance-none rounded border  bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'
                id='grid-first-name'
                type='text'
                placeholder='Jane'
                onChange={(e) => setFirstName(e.target.value)}
              />
              <p className='invisible text-xs italic text-red-500'>
                Please fill out this field.
              </p>
            </div>
            <div className='w-full px-3 md:w-1/2'>
              <label
                className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
                htmlFor='grid-last-name'
              >
                Last Name
              </label>
              <input
                className='block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'
                id='grid-last-name'
                type='text'
                placeholder='Doe'
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className='-mx-3 mb-6 flex flex-wrap'>
            <div className='w-full px-3'>
              <label
                className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
                htmlFor='grid-password'
              >
                E-mail
              </label>
              <input
                className='mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'
                id='email'
                type='email'
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className='text-xs italic text-gray-600'>
                Include details/pics/offer
              </p>
            </div>
          </div>
          <div className='-mx-3 mb-6 flex flex-wrap'>
            <div className='w-full px-3'>
              <label
                className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
                htmlFor='grid-password'
              >
                Message
              </label>
              <textarea
                className=' no-resize mb-3 block h-48 w-full resize-none appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'
                id='message'
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <p className='font-sans text-xs italic text-gray-600'>
                Response usually within 1-2 weeks
              </p>
            </div>
          </div>
          <div className='md:flex md:items-center'>
            <div className='md:w-1/3'>
              <button
                className='focus:shadow-outline rounded bg-gray-500 py-2 px-4 font-bold text-white shadow hover:bg-gray-700 focus:outline-none'
                type='button'
                onClick={handleMessage}
              >
                Send
              </button>
            </div>
            <div className='md:w-2/3'></div>
          </div>
        </form>
      </main>
    </div>
  );
}
