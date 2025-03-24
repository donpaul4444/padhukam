import { useRef, useEffect } from "react";
import ProductCard from "../components/ProductCard";

interface Product {
  image: string[];
  name: string;
  brand: string;
  rating: number;
  price: number;
}

interface ProductCarouselProps {
  title: string;
  products: Product[];
}

const ProductCarousel = ({ title, products }: ProductCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Prevent page scrolling when hovering over the carousel
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (scrollRef.current && scrollRef.current.contains(event.target as Node)) {
        const { scrollWidth, clientWidth } = scrollRef.current;

        // If the carousel is scrollable, prevent page scrolling
        if (scrollWidth > clientWidth) {
          event.preventDefault();
        }
      }
    };

    document.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // Scroll horizontally on mouse wheel
  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    if (scrollRef.current) {
      const scrollAmount = 100; // Adjust speed
      scrollRef.current.scrollBy({
        left: event.deltaY > 0 ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-5 mt-5">
      {/* Title */}
      <div className="text-4xl font-bold mt-3">{title}</div>
      <div className="border-b-2 border-black w-[80%]"></div>

      {/* Scrollable Carousel */}
      <div
        ref={scrollRef}
        onWheel={handleScroll}
        className="relative w-[80%] overflow-x-auto scrollbar-hide flex gap-5 p-2 scroll-smooth scroll-snap-x snap-mandatory"
      >
        {products.map((product, index) => (
          <div key={index} className="shrink-0 w-[300px] snap-start">
            <ProductCard
              image={product.image[0]}
              name={product.name}
              brand={product.brand}
              rating={product.rating}
              price={product.price}
            />
          </div>
        ))}
      </div>
      <style>
        {`

          div::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default ProductCarousel;
