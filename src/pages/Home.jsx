import BestRecommended from '../components/BestRecommended.jsx'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'
import Heading from '../components/Heading.jsx'
import Hero from '../components/Hero.jsx'
import Recommended from '../components/Recommended.jsx'
import Review from '../components/Review.jsx'

export default function Home() {
  return (
    <div className='bg-[#1B2316] font-[Inter] text-white'>
      <Header />
      <Hero />
      <Recommended />
      <Review />
      <BestRecommended />
      <Footer />
    </div>
  )
}
