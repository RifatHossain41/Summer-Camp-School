import Container from "../../Shared/Container/Container";
import bgImg from "../../../assets/Summer-Camp-2.jpg"

const Linear = () => {
  return (
    <div>
      <Container>
        <div>
          <h2 className="text-3xl text-center font-bold my-8">Gradient Section</h2>
        </div>
          <div className="relative">
           <img className="w-full h-60" src={bgImg} alt="" />
           <div className="absolute bg-gradient-to-r from-[#474] w-1/3 h-1/2 left-5 top-12">
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-3">Life Needs To Be Delightful</h2>
                <button className="btn btn-accent">Get Enjoy</button>
              </div>
            </div>
          </div>
      </Container>
    </div>
  );
};


export default Linear;
