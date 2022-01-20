import Head from 'next/head'
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Responsive Web App</title>
        <meta name="description" content="Created by CySurigao" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className='flex flex-col justify-center items-center h-screen bg-gray-200'>
        <h1 className='mb-4 font-bold text-xl'>Responsive Web Application</h1>
        <h6>Cy0x01</h6>
      </main>

      <section id='section' className='h-screen bg-red-800 text-white flex justify-center items-center'>
        <h1>Section</h1>
      </section>

      <footer id='footer' className='h-screen bg-blue-800 text-white flex justify-center items-center'>
        <h1>Footer</h1>
      </footer>
    </div>
  )
}
