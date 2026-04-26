import bag from '../assets/bag.png'
export default function CartButton() {
  return (
    <button className='rounded-xl border p-2 hover:cursor-pointer'>
      <img src={bag} alt="bag-icon" className='md:h-[24px] md:w-[24px] w-[12px] h-[12]'/>
    </button>
  )
}
