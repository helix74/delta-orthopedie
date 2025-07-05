"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const images = [
  "/images/carousel/img1.jpg",
  "/images/carousel/img2.jpg",
  "/images/carousel/img3.jpg",
];

export default function ImageCarousel() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    mode: "snap",
  });

  return (
    <div ref={sliderRef} className="keen-slider h-[400px] rounded-xl overflow-hidden shadow-lg bg-white">
      {images.map((src, idx) => (
        <div className="keen-slider__slide flex items-center justify-center bg-gray-100" key={idx}>
          <img
            src={src}
            alt={`Prothèse ${idx + 1}`}
            className="object-cover h-full w-auto max-h-[400px] rounded-xl"
          />
        </div>
      ))}
    </div>
  );
} 