import PopularClasses from "./PopularClasses";
import PopularInstructor from "./PopularInstructor";
import Slider from "./Slider";
import Linear from "./Linear/Linear";


const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <PopularClasses></PopularClasses>
      <PopularInstructor></PopularInstructor>
      <Linear></Linear>
    </div>
  );
};

export default Home;