import  { useEffect, useState } from 'react';
import ClassesCard from './ClassesCard';
import Container from '../Shared/Container/Container';

const PopularClasses = () => {
  const [caste, setCaste] = useState([]);

  useEffect( () => {
    fetch('class.json')
    .then(res => res.json())
    .then(data => {
      const popularClasses = data.filter(best => best.category === 'popularClass')
      setCaste(popularClasses)})
  }, [])
  return (
    <div>
      <div>
        <h2 className="text-3xl text-center font-bold my-8">Popular Classes Section</h2>
      </div>
      <Container>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
             caste.map(menu => <ClassesCard
               key={menu._id}
               menu={menu}
              ></ClassesCard>)
            }
        </div>
      </Container>
    </div>
  );
};

export default PopularClasses;