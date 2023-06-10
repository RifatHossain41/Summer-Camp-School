import Container from "../Shared/Container/Container";


const InstructorsPage = ({man}) => {
  const {instructor_name, instructor_image, email} = man;
  return (
    <div>
      <Container>
      <div className="card w-70 height-[600px] bg-base-100 shadow-xl">
              <figure>
                 <img
                   src={instructor_image}
                   alt="man"
                   width="300"
                   height="300"
                 />
               </figure>
               <div className="card-body">
                 <h2 className="card-title">{instructor_name}</h2>
                 <p>{email}</p>
               </div>
               </div>
      </Container>
    </div>
  );
};

export default InstructorsPage;