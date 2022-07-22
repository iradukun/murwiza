import Carousel from 'better-react-carousel'
import Testimonial from "./Testimonial";
import dummyData from "../../dummyData.json";

interface TestimonialsProps{
    data: object
}

const Testimonials = ({data}: Partial<TestimonialsProps>) => {
    return (
        <div className="Testimonials">
            <h2 className="text-black text-2xl font-black mb-2">
                Testimonials
            </h2>
            {!dummyData?.testimonials ? (
                <p>Loading...</p>
            ) : (
                <Carousel
                    showDots={true}
                    autoplay={4000}
                    loop={true}
                    scrollSnap={true}>
                    {dummyData.testimonials.map(
                        (testimonial: object, i: number) => {
                            return (
                                <Carousel.Item>
                                    <Testimonial
                                        {...testimonial}
                                        key={`testimonial-${i}`}
                                    />
                                </Carousel.Item>
                            );
                        }
                    )}
                </Carousel>
            )}
        </div>
    );
};

export default Testimonials;
