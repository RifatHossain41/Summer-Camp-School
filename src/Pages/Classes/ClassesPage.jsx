import Container from "../Shared/Container/Container";


const ClassesPage = ({menu}) => {
  const {name, instructor_name, image, available_seat, price} = menu;
  return (
    <div>
      <Container>
      <div className="card w-full height-[600px] bg-base-100 shadow-xl">
              <figure>
                 <img
                   className="w-70 h-50"
                   src={image}
                   alt=""
                 />
               </figure>
               <div className="card-body">
                 <h2 className="card-title">{instructor_name}</h2>
                 <p>{name}</p>
                 <p>Available Seat: {available_seat}</p>
                 <p>Price: {price}</p>
                <button className="btn btn-primary">Select</button>
               </div>
         </div>
      </Container>   
    </div>
  );
};

export default ClassesPage;