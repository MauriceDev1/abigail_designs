import Head from 'next/head'
import { Inter } from '@next/font/google'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'
import Blog from '../components/Blog'
import Products from '../components/Products'
import Testimonials from '../components/Testimonials'
import Portfolio from '../components/Portfolio'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <About />
        <Products />
        <Portfolio />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </>
  )
}
