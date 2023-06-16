const InstructorCard = ({ instructor }) => {
  const { instructor_name, instructor_image, email } = instructor;
  return (
    <div className="card card-side bg-slate-400 shadow-xl">
      <figure>
        <img
        className="w-40 h-40"
          src={instructor_image}
          alt="image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {instructor_name}</h2>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default InstructorCard;
