import useClasses from "../../../Hooks/useClasses";


const ManageClasses = () => {
  const [classes] = useClasses();
  return (
    <div className="lg:overflow-x-auto">
    <table className="table bg-orange-200">
      {/* head */}
      <thead>
        <tr>
          <th>
            #
          </th>
          <th>Class_Image</th>
          <th>Class_Name</th>
          <th>Instructor_Name</th>
          <th>Instructor_Email</th>
          <th>Available_Seat</th>
          <th>Price</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          classes.map((allClass, index) =>  <tr
           key={allClass._id}
          >
          <td>
            {index + 1}
          </td>
          <td>
            <div className="flex items-center justify-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={allClass.image} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
            </div>
          </td>
          <td>{allClass.name}</td>
          
          <td>{allClass.instructor_name}</td>
          <td>{allClass.email}</td>
          <td>$ {allClass.price}</td>
          <td>{allClass.available_seat}</td>
          <td>
           <button className="btn btn-active btn-secondary">
            <select>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="denied">Denied</option>
            </select>
           </button>
          </td>
          <td>
            <button className="btn btn-success">Approve</button>
            <button className="btn btn-warning">Deny</button>
            <button className="btn btn-error">Feedback</button>
          </td>
          
        </tr>)
        }
       
      </tbody>
      
    </table>
  </div>
  );
};

export default ManageClasses;