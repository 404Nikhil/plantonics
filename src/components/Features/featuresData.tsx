import { Feature } from "@/types/feature";
import Image from "next/image";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
 <Image 
 height={55}
 width={55}
 src="/images/testimonials/ai-svgrepo-com.svg" 

 />
    ),
    title: "AI Disease Prediction",
    paragraph: "Lorem Ipsum is simply dummy text of the printing and industry.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 2,
    icon: (
      <Image 
      height={55}
      width={55}
      src="/images/testimonials/plant-svgrepo-com.svg" 
     
      />
    ),
    title: "Yield Prediction",
    paragraph: "Lorem Ipsum is simply dummy text of the printing and industry.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 3,
    icon: (
      <Image 
      height={55}
      width={55}
      src="/images/testimonials/weather-svgrepo-com.svg" 
     
      />
    ),
    title: "Agriculture Feed and Weather Forecast",
    paragraph: "Lorem Ipsum is simply dummy text of the printing and industry.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 4,
    icon: (
      <Image 
      height={55}
      width={55}
      src="/images/testimonials/shop-svgrepo-com.svg" 
     
      />
    ),
    title: "Marketplace Integration",
    paragraph: "Lorem Ipsum is simply dummy text of the printing and industry.",
    btn: "Learn More",
    btnLink: "/#",
  },
];
export default featuresData;
