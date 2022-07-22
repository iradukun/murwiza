import { CgQuote } from 'react-icons/cg'

interface TestimonialProps{
    imgSrc: string,
    reviewerName: string,
    text: string,
    about: string
}
const Testimonial = ({imgSrc = '', reviewerName, text, about}: Partial<TestimonialProps>) => {
  return (
    <div className="flex flex-row gap-3 text-black w-[90%] m-auto">
        <img src={imgSrc} alt={`${reviewerName}'s review`} className="h-[12.75rem] w-[18.75rem]"/>
        <div className="flex flex-col justify-between relative p-4 gap-6">
            <CgQuote fill="rgb(81 80 80)" className='h-10 w-10 absolute -top-3 -left-3'/>
            <p>{text}</p>
            <div className='font-bold'>
                <span className='block'>{reviewerName}</span>
                <span className='block'>{about}</span>
            </div>
            <CgQuote fill="rgb(81 80 80)" className='h-10 w-10 absolute bottom-3 -right-3 rotate-180'/>
        </div>
    </div>
  )
}

export default Testimonial