import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const image_hosting_token=import.meta.env.VITE_IMGBB_KEY;

const AddClass = () => {
  const {user} = useAuth();
  const [ axiosSecure ] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}
  `

  const emailValue = user.email;

  const onSubmit = data => {

    const formData = new FormData();
    formData.append('image', data.image[0])
    
    fetch(image_hosting_url, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(imgResponse => {
      if(imgResponse.success){
        const imgURL = imgResponse.data.display_url;
        const {name, instructor_name, email, price, available_seat} = data;
        const newClass = {name, instructor_name, email, price: parseFloat(price), available_seat: parseFloat(available_seat), image:imgURL}
        console.log(newClass)
        axiosSecure.post('/classes', newClass)
        .then(data => {
          console.log(data.data)
          if(data.data.insertedId){
            reset();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Class Added Successfully',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      }
    })
  };

  return (
    <div className="w-full px-10">
    <form onSubmit={handleSubmit(onSubmit)}>
     <div className="form-control w-full mb-4">
        <label className="label">
          <span className="label-text font-semibold">Class Name*</span>
        </label>
        <input type="text" placeholder="Enter Class Name" 
        {...register("name", {required: true}) } 
        className="input input-bordered w-full " />
      </div>
     <div className="form-control w-full mb-4">
        <label className="label">
          <span className="label-text font-semibold">Instructor Name*</span>
        </label>
        <input type="text" placeholder="Instructor Name" 
        {...register("instructor_name", {required: true}) } 
        className="input input-bordered w-full " />
      </div>
     <div className="form-control w-full mb-4">
        <label className="label">
          <span className="label-text font-semibold">Email*</span>
        </label>
        <input type="email" placeholder="email"
        {...register("email", {required: true} ) }
        className="input input-bordered w-full " value={emailValue} readOnly/>
      </div>
     <div className="form-control w-full mb-4">
        <label className="label">
          <span className="label-text font-semibold">Price*</span>
        </label>
        <input type="number" placeholder="Price" 
        {...register("price", {required: true}) } 
        className="input input-bordered w-full " />
      </div>
     <div className="form-control w-full mb-4">
        <label className="label">
          <span className="label-text font-semibold">Available Seat*</span>
        </label>
        <input type="number" placeholder="Available Seat" 
        {...register("available_seat", {required: true}) } 
        className="input input-bordered w-full " />
      </div>
      <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Image*</span>
          </label>
          <input type="file" {...register("image", {required: true}) } className="file-input file-input-bordered w-full " />
        </div>
       
      <input className="btn btn-secondary mt-4" type="submit" value="Add Class" />
    </form>
  </div>
  );
};

export default AddClass;