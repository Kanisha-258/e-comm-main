import Heading from './Heading.jsx'
import Card from '../components/Card.jsx'
import { topSellingData } from '../data/topSellingData.js'

export default function Recommended() {

  return (
    <div className=''>
      <Heading className="mt-18" text={"Our Top Selling Plants"} />
      <div className="px-4 py-8 sm:grid grid-cols-2 content-center md:gap-18 md:grid-cols-3 mx-auto pt-24">
        {topSellingData.map((cardData, index) => (
          <Card {...cardData} key={index} />
        ))}
      </div>
    </div>
  )
}
