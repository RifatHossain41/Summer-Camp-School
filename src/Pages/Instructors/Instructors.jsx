import { useEffect, useState } from "react";
import InstructorsPage from "./InstructorsPage";

const Instructors = () => {
  const [mans, setMans] = useState([]);

  useEffect(() => {
    fetch("class.json")
      .then(res => res.json())
      .then(data => setMans(data));
  }, []);
  return (
        <div className="grid lg:grid-cols-3 gap-10">
        {
          mans.map(man => <InstructorsPage
            key={man._id}
            man={man}
           ></InstructorsPage>)
        }
    </div>
  );
};

export default Instructors;
