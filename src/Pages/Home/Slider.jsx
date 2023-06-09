import Container from "../Shared/Container/Container";
import img1 from "../../assets/summer-1.jpg";
import img2 from "../../assets/summer-2.jpg";
import img3 from "../../assets/summer-3.jpg";
import img4 from "../../assets/summer-4.jpeg";

const Slider = () => {
  return (
    <div>
      <Container>
        <div className="carousel w-full h-[600px]">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={img1} className="w-full" />
            <div className="absolute flex items-center h-full left-0 top-0 ">
              <div className="text-white space-y-5 pl-12 w-2/5">
                <h2 className="text-4xl font-bold">
                  Get ready for an exciting summer camp
                </h2>
                <p>
                  Sport camp you will improve your game and have a blast doing
                  it.
                </p>
                <button className="btn btn-secondary">Get Started</button>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={img2} className="w-full" />
            <div className="absolute flex items-center h-full left-0 top-0 ">
              <div className="text-white space-y-5 pl-12 w-2/5">
                <h2 className="text-4xl font-bold">
                  Get ready for an exciting summer camp
                </h2>
                <p>
                  Sport camp you will improve your game and have a blast doing
                  it.
                </p>
                <button className="btn btn-secondary">Get Started</button>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={img3} className="w-full" />
            <div className="absolute flex items-center h-full left-0 top-0 ">
              <div className="text-white space-y-5 pl-12 w-2/5">
                <h2 className="text-4xl font-bold">
                  Get ready for an exciting summer camp
                </h2>
                <p>
                  Sport camp you will improve your game and have a blast doing
                  it.
                </p>
                <button className="btn btn-secondary">Get Started</button>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={img4} className="w-full" />
            <div className="absolute flex items-center h-full left-0 top-0 ">
              <div className="text-white space-y-5 pl-12 w-2/5">
                <h2 className="text-4xl font-bold">
                  Get ready for an exciting summer camp
                </h2>
                <p>
                  Sport camp you will improve your game and have a blast doing
                  it.
                </p>
                <button className="btn btn-secondary">Get Started</button>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Slider;
