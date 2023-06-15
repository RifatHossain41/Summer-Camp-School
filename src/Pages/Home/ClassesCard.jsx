const ClassesCard = ({ menu }) => {
  const { name, image, available_seat, price } = menu;
  return (
    <div className="card w-96">
      <figure>
        <img
          src={image}
          alt="class"
          height="250px"
          width="300px"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Available_Seat: {available_seat}</p>
        <p>Price: ${price}</p>
      </div>
    </div>
  );
};

export default ClassesCard;
