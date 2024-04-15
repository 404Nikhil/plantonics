import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    "id": 1,
    "name": "Mr Jha",
    "designation": "Farmer",
    "content": "As a farmer, I find this platform incredibly useful for agricultural purposes. It's intuitive and clean, providing a distraction-free experience. Whether it's sharing insights on crop management or discussing market trends, this platform fosters a vibrant community for agricultural enthusiasts.",
    "image": "/images/testimonials/clown.jpg",
    "star": 5
  },
  {
    "id": 2,
    "name": "Mr Rao",
    "designation": "Scientist in Agriculture",
    "content": "As a scientist deeply involved in agriculture, I am thoroughly impressed with this platform. Its intuitive design and clean interface make it a valuable tool for exchanging knowledge and ideas within the agricultural community. Whether it's discussing innovative farming techniques.",
    "image": "/images/testimonials/clown.jpg",
    "star": 5
  },
  {
    "id": 3,
    "name": "Mr Rajput",
    "designation": "Weather Expert",
    "content": "Being a weather expert, I appreciate the simplicity and effectiveness of this platform. It offers a distraction-free environment for discussing weather patterns and their impact on agriculture. Whether it's analyzing rainfall data or predicting climate trends.",
    "image": "/images/testimonials/clown.jpg",
    "star": 5
  }
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="What our Client Say"
          paragraph="Here's what farmers, scientists, and weather experts have to say about their experience with us."
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
