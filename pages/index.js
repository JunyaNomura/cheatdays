import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Hero from '../components/Hero'
import Service from '../components/Service'
import About from '../components/About'
import Contact from '../components/Contact'
import Introduction from '../components/Introduction'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../components/Footer'

import { useEffect, useRef, useState } from 'react'
import FOG from 'vanta/dist/vanta.fog.min';
import * as THREE from 'three';

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(
  //       FOG({
  //         el: vantaRef.current,
  //         THREE,
  //         mouseControls: true,
  //         touchControls: true,
  //         gyroControls: false,
  //         minHeight: 200.00,
  //         minWidth: 200.00,
  //         blurFactor: 0.15,
  //         speed: 0.48
  //       })
  //     )
  //   }
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    }
  }, [vantaEffect]);
  return (
    <>
      <Head>
        <title>Cheat Days</title>
        <meta name="description" content="Cheat Days" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div id="web-gl"></div>
        <div 
          ref={vantaRef}
        >
          <main className="text-center max-w-4xl mx-auto px-4">
            <Hero />
            <Introduction />
            <Service />
            <About />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}
