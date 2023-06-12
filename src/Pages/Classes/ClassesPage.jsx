import { useContext } from "react";
import Container from "../Shared/Container/Container";
import { AuthContext } from "../../provider/AuthProvider";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";


const ClassesPage = ({menu}) => {
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const {name, instructor_name, image, available_seat, price, _id} = menu;

  const handleClasses = menu => {
    console.log(menu)
   if(user && user.email) {
    const cartMenu = {menuItemId: _id, name, instructor_name, image, available_seat, price, email: user.email}
    fetch('http://localhost:4000/carts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(cartMenu)
    })
    .then(res => res.json())
        .then(data => {
        if(data.insertedId){
          refetch(); 
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'class add on the cart',
            showConfirmButton: false,
            timer: 1500
          })
        }
       })
   }
   else{
    Swal.fire({
      title: 'Please login',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Login now!'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login', {state: {from: location}})
      }
    })
  }
  }
  return (
    <div>
      <Container>
      <div className="card w-full height-[600px] bg-base-100 shadow-xl">
              <figure>
                 <img
                   className="w-70 h-50"
                   src={image}
                   alt=""
                 />
               </figure>
               <div className="card-body">
                 <h2 className="card-title">{instructor_name}</h2>
                 <p>{name}</p>
                 <p>Available Seat: {available_seat}</p>
                 <p>Price: {price}</p>
                <button onClick={() => handleClasses(menu)} className="btn btn-primary">Select</button>
               </div>
         </div>
      </Container>   
    </div>
  );
};

export default ClassesPage;