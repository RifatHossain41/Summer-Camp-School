import { useEffect, useState } from "react";
import Container from "../Shared/Container/Container";
import InstructorCard from "./InstructorCard";

const PopularInstructor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect( () => {
    fetch('class.json')
    .then(res => res.json())
    .then(data => {
      const popularInstructor = data.filter(ins => ins.category === 'popularInstructors')
      setInstructors(popularInstructor)})
  }, [])
  return (
    <div>
      <div>
        <h2 className="text-3xl text-center font-bold my-5">Popular Instructor Section</h2>
      </div>
      <Container>
        <div className="grid md:grid-cols-2 gap-5">
          {
            instructors.map(instructor => <InstructorCard
             key={instructor._id}
             instructor={instructor}
            ></InstructorCard>)
          }
        </div>
      </Container>
    </div>
  );
};

export default PopularInstructor;