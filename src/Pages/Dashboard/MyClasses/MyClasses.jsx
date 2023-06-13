import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyClasses = () => {
  const [cart, refetch] = useCart();

  const handleDelete = menu => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
       fetch(`http://localhost:4000/carts/${menu._id}`, {
        method: 'DELETE'
       })
       .then(res => res.json())
       .then(data => {
        if(data.deletedCount > 0){
          refetch();
          Swal.fire(
            'Deleted!',
            'Your class has been deleted.',
            'success'
          )
        }
       })
      }
    })
  }
 
  return (
    <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>
            #
          </th>
          <th>Image</th>
          <th>Class_Name</th>
          <th>Instructor_Name</th>
          <th>Available_Seat</th>
          <th>Price</th>
          <th>Action</th>
          <th>Action</th>
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
          <td>${menu.price}</td>
          <td>
            <button onClick={() => handleDelete(menu)} className="btn btn-ghost bg-accent text-white"><FaTrashAlt /></button>
          </td>
          <td><Link to="/dashboard/payment"><button className="btn btn-accent">PAY</button></Link></td>
        </tr>)
        }
       
      </tbody>
      
    </table>
  </div>
  );
};

export default MyClasses;