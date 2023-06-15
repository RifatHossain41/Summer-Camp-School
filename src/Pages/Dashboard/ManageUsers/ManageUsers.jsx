import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useClasses from "../../../Hooks/useClasses";
import Swal from "sweetalert2";



const ManageUsers = () => {
  const [classes, , refetch] = useClasses();
  const [axiosSecure] = useAxiosSecure();


  const handleMakeAdmin = menu => {
    fetch(`http://localhost:4000/classes/admin/${menu._id}`, {
      method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.modifiedCount){
        refetch();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${menu.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }

  // const handleMakeInstructor = menu => {
  //   fetch(`http://localhost:4000/classes/instructor/${menu._id}`, {
  //     method: 'PATCH'
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //     if(data.modifiedCount){
  //       refetch();
  //       Swal.fire({
  //         position: 'top-end',
  //         icon: 'success',
  //         title: `${menu.name} is an Instructor Now!`,
  //         showConfirmButton: false,
  //         timer: 1500
  //       })
  //     }
  //   })
  // }
 
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
          
          <td>{menu.email}</td>
          <td>{ menu.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(menu)} className="btn btn-ghost bg-purple-500 text-white">Admin</button>
            }
             {/* { menu.role === 'instructor' ? 'instructor' : <button onClick={() => handleMakeInstructor(menu)} className="btn btn-ghost bg-indigo-500 text-white">Instructor</button>
          } */}
          </td>
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