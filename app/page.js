import { CarouselDemo } from "./(routes)/_components/Carousel";
import Header from "./(routes)/_components/Header";

export default function Home({ children }) {
  return (
    <div>
      <div className="">
        <Header />
        <div className="px-10">
        <CarouselDemo />
        </div>
      </div>
    </div>
  );
}
