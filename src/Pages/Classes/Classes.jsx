import { useEffect, useState } from "react";
import ClassesPage from "./ClassesPage";


const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("class.json")
     .then(res => res.json())
     .then(data => setClasses(data))
  }, [])
  return (
    <div>
      {
        classes.map(menu => <ClassesPage
          key={menu._id}
          menu={menu}
         ></ClassesPage>)
      }
    </div>
  );
};

export default Classes;