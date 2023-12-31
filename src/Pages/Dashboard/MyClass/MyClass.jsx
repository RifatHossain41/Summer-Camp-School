import useAuth from "../../../Hooks/useAuth";
import useClasses from "../../../Hooks/useClasses"

const MyClass = () => {
  const {user} = useAuth()
  const [classes] = useClasses();
  
  const myClass = classes.filter(obj => {
    return obj.email === user.email
  });

  return (
    <div className="lg:overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>
            #
          </th>
          <th>Class_Image</th>
          <th>Class_Name</th>
          <th>Instructor_Name</th>
          <th>Email</th>
          <th>Price</th>
          <th>Available_Seat</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          myClass.map((user, index) =>  <tr
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
          
          <td>{user.instructor_name}</td>
          <td>{user.email}</td>
          <td>$ {user.price}</td>
          <td className="text-center">{user.available_seat}</td>
          <td>
           <button className="btn btn-info">
            <select>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="denied">Denied</option>
            </select>
           </button>
          </td>
          <td><button className="btn btn-accent">Update</button></td>
          
        </tr>)
        }
       
      </tbody>
      
    </table>
  </div>
  );
};

export default MyClass;