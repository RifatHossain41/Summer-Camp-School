import useCart from "../../../Hooks/useCart";


const MyClasses = () => {
  const [cart] = useCart();
  return (
    <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>
            
          </th>
          <th>Image</th>
          <th>Class_Name</th>
          <th>Instructor_Name</th>
          <th>Available_Seat</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {
          cart.map((menu, index) =>  <tr
           key={menu._id}
          >
          <td>
            {index + 1}
          </td>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={menu.image} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
            </div>
          </td>
          <td>{menu.name}</td>
          <td>{menu.instructor_name}</td>
          <td>
           {menu.available_seat}
          </td>
          <td>{menu.price}</td>
          <td>
            <button className="btn btn-ghost btn-xs">details</button>
          </td>
        </tr>)
        }
       
      </tbody>
      
    </table>
  </div>
  );
};

export default MyClasses;