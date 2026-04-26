import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import bgImage from '../assets/bg-imagge.jpg';
import plant1 from '../assets/plant1.png';
import plant2 from '../assets/plant2.png';
import plant3 from '../assets/plant3.png';
import dp from '../assets/review-user-image.png';
import Button from './Button';
import CartButton from './CartButton';
import Header from './Header';
import Heading from './Heading';
import StarRating from './StarRating';
import { useState } from 'react';
import { heroProductData } from '../data/heroProductData.js'


export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex(prev =>
      prev === 0 ? heroProductData.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex(prev =>
      prev === heroProductData.length - 1 ? 0 : prev + 1
    )
  }

  const currentProduct = heroProductData[currentIndex]
  return (
    <div style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'bottom',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      width: '100%'
    }}
      className='h-[250vh]'
    >
      <div>
        {/* Text Section */}
        <div className="md:relative left-8 top-24 md:w-2xl md:p-2 p-6">
          <h1 className='md:text-8xl text-3xl'>Earth’s Exhale</h1>
          <p className='md:text-xl text-sm py-2'>"Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.</p>

          <div className='py-1 flex gap-6'>
            <Button>Buy Now</Button>

            <button className='indie-flower-regular flex justify-center items-center gap-4 text-xl hover:cursor-pointer'>
              <svg width="36" height="36" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="37" cy="37" r="36" stroke="white" stroke-width="2" />
                <path opacity="0.75" d="M49.5 34.4019C51.5 35.5566 51.5 38.4434 49.5 39.5981L33 49.1244C31 50.2791 28.5 48.8357 28.5 46.5263L28.5 27.4737C28.5 25.1643 31 23.7209 33 24.8756L49.5 34.4019Z" fill="white" />
              </svg>

              Live Demo...
            </button>
          </div>
        </div>

        {/* Image Section */}
        <>
          <ImageBox img={currentProduct.img} plantName={currentProduct.plantName} petName={currentProduct.petName} onNext={handleNext} index={currentIndex} onPrev={handlePrev} />
        </>

        {/* Feedback Section */}
        <div className="md:w-md md:relative md:mx-auto mx-2 md:md:mx-4 right-[550px] top-64 rounded-[45px] border border-white/20 py-8 px-6 bg-white/5 backdrop-blur-[8.5px]">
          <div className='flex gap-4 py-2'>
            <img src={dp} alt="user-image" className='rounded-full h-16 w-16 object-cover' />
            <span className='p-1'>
              <h2 className="">Ronnie Hamill</h2>
              <StarRating rating={4.5} />
            </span>
          </div>
          <p className="md:text-base text-sm">I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.</p>
        </div>

        <div className="md:relative top-96">
          <Heading text={`Our Trendy plants`} className={`pt-4`} />

          <Box heading={`For Your Desks Decorations`} price={599} img={plant2} subHeading={`I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!`} direction="flex-row" />

          <Box heading={`For Your Desks Decorations`} price={399} img={plant3} subHeading={`The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming`} />

        </div>
      </div>
    </div>
  )
}


const Box = ({ direction = "flex-row-reverse", price, heading, img, subHeading }) => <div className='md:pt-32 mt-4'>
  <div className={`md:flex border bg-white/5 backdrop-blur-[8.5px] w-5/6 mx-auto rounded-[45px] border-white/20 md:justify-center justify-between sm:px-16 md:h-80 pb-4 ${direction}`}>
    <div className="md:w-1/2 md:-top-36 relative flex ">
      <img src={img} alt="plant2" className='md:h-[450px] object-cover h-[200px]' />
    </div>
    <div className="md:w-1/2 items-start justify-center px-4 flex flex-col gap-3">
      <h1 className='md:text-3xl text-base'>{heading}</h1>
      <p className="md:text-base text-sm">{subHeading}</p>
      <span>Rs. {price}/-</span>
      <div className="flex gap-4">
        <Button>Explore</Button>
        <CartButton />
      </div>
    </div>
  </div>
</div>



const ImageBox = ({ img, plantName, petName, onPrev, onNext, index }) => <div className="md:absolute md:m-0 m-4 md:w-[500px] md:h-[600px] w-[250px] h-[250px] right-12 top-32">
  <svg width="100%" height="100%" viewBox="0 0 512 644" fill="none" xmlns="http://www.w3.org/2000/svg" className='-z-10'>
    <foreignObject x="-15" y="5.84302" width="542" height="653.157">
      <div xmlns="http://www.w3.org/1999/xhtml" className="bg-white/5 backdrop-blur-[8.5px] w-full h-full" style={{ clipPath: 'url(#bgblur_0_2001_3_clip_path)' }}></div>
    </foreignObject>
    <path data-figma-bg-blur-radius="15" d="M0.5 83.0605C0.500043 42.5076 40.3416 13.3325 79.6914 23.3125C133.868 37.053 205.805 51.7767 263.007 51C315.825 50.2828 381.619 36.4687 432.31 23.4746C471.644 13.3916 511.5 42.537 511.5 83.1016V584C511.5 616.861 484.861 643.5 452 643.5H60C27.1391 643.5 0.5 616.861 0.5 584V83.0605Z" fill="white" fillOpacity="0.05" stroke="url(#paint0_linear_2001_3)" />
    <defs>
      <clipPath id="bgblur_0_2001_3_clip_path" transform="translate(15 -5.84302)">
        <path d="M0.5 83.0605C0.500043 42.5076 40.3416 13.3325 79.6914 23.3125C133.868 37.053 205.805 51.7767 263.007 51C315.825 50.2828 381.619 36.4687 432.31 23.4746C471.644 13.3916 511.5 42.537 511.5 83.1016V584C511.5 616.861 484.861 643.5 452 643.5H60C27.1391 643.5 0.5 616.861 0.5 584V83.0605Z" />
      </clipPath>
      <linearGradient id="paint0_linear_2001_3" x1="32.5" y1="46" x2="459.5" y2="630" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" />
      </linearGradient>
    </defs>
  </svg>


  <div className="md:text-lg md:absolute relative px-16 md:bottom-15 bottom-64 w-full">
    <img src={img} alt="plant" className='md:w-[460px] md:h-[460px] w-72 mx-auto' />
    <h2 className="text-xs md:text-base">{petName}</h2>
    <span className='flex justify-between items-center md:py-4 py-1'>
      {index !== 0 ? <MdKeyboardArrowLeft size={35} onClick={onPrev} className="hover:cursor-pointer" /> : null}
      <h1 className='md:text-3xl text-sm text-nowrap'>{plantName}</h1>
      <MdKeyboardArrowRight size={35} onClick={onNext} className="hover:cursor-pointer" />
    </span>

    <Button className={`md:text-base text-sm`}>Buy Now</Button>

    <div className="mt-4 flex justify-center">
      <svg width="57" height="6" viewBox="0 0 57 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="21" height="6" rx="3" fill="white" />
        <circle cx="37" cy="3" r="3" fill="white" />
        <circle cx="54" cy="3" r="3" fill="white" />
      </svg>
    </div>
  </div>
</div>