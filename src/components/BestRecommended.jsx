import { useState } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { productData } from '../data/productData.js';
import Heading from './Heading';

export default function BestRecommended() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex(prev =>
      prev === 0 ? productData.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex(prev =>
      prev === productData.length - 1 ? 0 : prev + 1
    )
  }

  const currentProduct = productData[currentIndex]

  return (
    <div>
      <Heading text="Our Best o2" className="py-6" />

      <Product
        key={currentIndex}
        img={currentProduct.img}
        heading={currentProduct.heading}
        desc={currentProduct.desc}
        index={currentIndex + 1}
        total={productData.length}
        onPrev={handlePrev}
        onNext={handleNext}
      />


      <div className='flex justify-center my-6'>
        <svg width="57" height="6" viewBox="0 0 57 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="21" height="6" rx="3" fill="white" />
          <rect width="21" height="6" rx="3" fill="white" />
          <circle cx="37" cy="3" r="3" fill="white" />
          <circle cx="54" cy="3" r="3" fill="white" />
          <circle cx="54" cy="3" r="3" fill="white" />
        </svg>
      </div>

    </div>
  )
}

const Product = ({ img, heading, desc, index, total, onPrev, onNext }) => (
  <div
    className="md:mx-12 mx-4 mt-10 md:flex justify-center items-start gap-6 md:p-12 p-6 md:h-[450px] h-[450px] bg-[#272e22] border-[#4b5048] text-white/90 rounded-4xl border"
  // style={{
  //   backgroundImage: `url(${rectangle9})`,
  //   backgroundSize: '100% 100%',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'center top'
  // }}
  >
    <div className="md:w-1/2 flex md:justify-end justify-center relative md:-top-28">
      <img
        src={img}
        alt={heading}
        className="md:w-[500px] md:h-[500px] w-44 h-44 transition-all duration-300"
      />
    </div>

    <div className="md:w-1/2 flex flex-col gap-4 md:mt-18">
      <h2 className="md:text-3xl font-semibold">{heading}</h2>

      <div className="md:text-lg h-22">
        {desc.map((para, i) => (
          <p key={i} className="md:text-base text-[9px] py-1">
            {para}
          </p>
        ))}
      </div>

      <div className="flex justify-between flex-wrap gap-4 mt-4">
        <button className="px-6 py-2 border border-white rounded-lg cursor-pointer hover:bg-white/10 transition-all">
          Explore
        </button>

        <span className="flex gap-2 items-center text-sm md:text-base">
          <MdOutlineKeyboardArrowLeft
            className="hover:cursor-pointer hover:scale-110 transition-transform"
            size={30}
            onClick={onPrev}
          />
          {index} / {total}
          <MdOutlineKeyboardArrowRight
            className="hover:cursor-pointer hover:scale-110 transition-transform"
            size={30}
            onClick={onNext}
          />
        </span>
      </div>
    </div>
  </div>
)
