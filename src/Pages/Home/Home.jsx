import PopularClasses from "./PopularClasses";
import PopularInstructor from "./PopularInstructor";
import Slider from "./Slider";


const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <PopularClasses></PopularClasses>
      <PopularInstructor></PopularInstructor>
    </div>
  );
};

export default Home;