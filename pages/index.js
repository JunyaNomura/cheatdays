import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Hero from '../components/Hero'
import Service from '../components/Service'
import About from '../components/About'
import Contact from '../components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Cheat Days</title>
        <meta name="description" content="Cheat Days" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="web-gl"></div>
      <main className="text-center max-w-4xl mx-auto my-4 px-4">
        <Hero />
        <Service />
        <About />
        <Contact />
      </main>
    </>
  )
}
