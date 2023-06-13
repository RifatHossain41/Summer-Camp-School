import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useClasses from "../../../Hooks/useClasses";
import Swal from "sweetalert2";


const ManageUsers = () => {
  const [classes, , refetch] = useClasses();
  const [axiosSecure] = useAxiosSecure();
 
  const handleDelete = (menu) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/classes/${menu._id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
             Swal.fire(
              "Deleted!",
              "Your file has been deleted.", 
              "success");
           }
        });
      }
    });
  };

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
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          classes.map((menu, index) =>  <tr
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
          
          <td>${menu.email}</td>
          <td></td>
          <td>
            <button onClick={() => handleDelete(menu)} className="btn btn-ghost bg-accent text-white"><FaTrashAlt /></button>
          </td>
        </tr>)
        }
       
      </tbody>
      
    </table>
  </div>
  );
};

export default ManageUsers;