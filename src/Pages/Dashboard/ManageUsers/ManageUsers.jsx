import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";



const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const {data: students = [], refetch} = useQuery(['students'], async() => {
    const res = await fetch('http://localhost:4000/students')
    return res.json();
  })



  const handleMakeAdmin = user => {
    fetch(`http://localhost:4000/students/admin/${user._id}`, {
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
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }

  const handleMakeInstructor = user => {
    fetch(`http://localhost:4000/students/instructor/${user._id}`, {
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
          title: `${user.name} is an Instructor Now!`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }
 
  const handleDelete = (user) => {
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
        axiosSecure.delete(`/students/${user._id}`)
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
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          students.map((user, index) =>  <tr
           key={user._id}
          >
          <td>
            {index + 1}
          </td>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={user.image} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
            </div>
          </td>
          <td>{user.name}</td>
          
          <td>{user.email}</td>
          <td>{ user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-purple-500 text-white">Admin</button>
            }
             { user.role === 'instructor' ? 'instructor' : <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost bg-indigo-500 text-white">Instructor</button>
          }
          </td>
          <td>
            <button onClick={() => handleDelete(user)} className="btn btn-ghost bg-accent text-white"><FaTrashAlt /></button>
          </td>
        </tr>)
        }
       
      </tbody>
      
    </table>
  </div>
  );
};

export default ManageUsers;