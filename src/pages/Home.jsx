import Header from '../layouts/Header'
import Hero from '../sections/Hero'
import Service from '../sections/Service'
import Features from '../sections/Features'
import Superheros from '../sections/Superheros'
import OtherSevices from '../sections/OtherSevices'
import Subscribe from '../sections/Subscribe'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col space-y-32 pb-20">
      <Header />
      <Hero />
      <Service />
      <OtherSevices />
      <Superheros />
      <Features />
      <Subscribe />
      <Footer />
    </main>
  )
}
