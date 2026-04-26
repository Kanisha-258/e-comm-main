import Rectangle6 from '../assets/Rectangle6.png'
import CartButton from './CartButton'

export default function Card({ img, title, desc, price }) {
  return (
    <div className={`md:w-[500px] md:h-[500px] h-72 md:pt-4 md:py-0 my-18`}
      style={{
        backgroundImage: `url(${Rectangle6})`,
        // backgroundSize: 'cover',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top'
      }}>
      <div className="">
        <div className="relative md:-top-28 -top-18">
          <img src={img} alt="plant image" className='w-36 h-36 md:w-84 md:h-84 mx-auto' />
          <div className="px-10 flex flex-col gap-2">
            <h2 className='md:text-3xl mt-4'>
              {title}
            </h2>
            <p className='md:text-base text-[10px] font-thin md:h-18 h-18'>{desc}</p>
            <div className="flex justify-between md:text-3xl flex-wrap">
              <span>Rs. {price}/-</span>
              <CartButton />
            </div>
          </div>
        </div>
        {/* <div className="relative -top-96">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 512 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <foreignObject x="-15" y="-0.0749512" width="542" height="495.075">
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                  backdropFilter: "blur(7.5px)",
                  clipPath: "url(#bgblur_0_2001_3_clip_path)",
                  height: "100%",
                  width: "100%"
                }}
              ></div>
            </foreignObject>
            <path
              data-figma-bg-blur-radius="15"
              d="M0.5 76.6006C0.500187 37.9722 36.7967 9.27212 74.7617 16.5605C129.45 27.0594 204.058 38.7362 263.005 38.1396C317.545 37.5877 385.935 26.6229 437.237 16.6719C475.196 9.30914 511.5 37.9917 511.5 76.6289V420C511.5 452.861 484.861 479.5 452 479.5H60C27.1391 479.5 0.500005 452.861 0.5 420V76.6006Z"
              fill="white"
              fillOpacity="0.05"
              stroke="url(#paint0_linear_2001_3)"
            />

            <defs>
              <clipPath id="bgblur_0_2001_3_clip_path" transform="translate(15 0.0749512)">
                <path d="M0.5 76.6006C0.500187 37.9722 36.7967 9.27212 74.7617 16.5605C129.45 27.0594 204.058 38.7362 263.005 38.1396C317.545 37.5877 385.935 26.6229 437.237 16.6719C475.196 9.30914 511.5 37.9917 511.5 76.6289V420C511.5 452.861 484.861 479.5 452 479.5H60C27.1391 479.5 0.500005 452.861 0.5 420V76.6006Z" />
              </clipPath>

              <linearGradient
                id="paint0_linear_2001_3"
                x1="32.5"
                y1="34.2857"
                x2="313.171"
                y2="549.31"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg>


        </div> */}
      </div>
    </ div>
  )
}
