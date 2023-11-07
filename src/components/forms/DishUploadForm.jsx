// this Component is not ready for use

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const DishUploadForm = () => {
  const { register, handleSubmit, errors, setValue } = useForm();

  useEffect(() => {
    register("dishImage", { required: true });
  }, [register]);

  const onSubmit = (data) => {
    console.log(data);
    // Here you would handle submission to your API
  };

  const onFileChange = (e) => {
    const file = e.target.files[0];
    setValue("dishImage", file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "YOUR_CLOUDINARY_UPLOAD_PRESET");

    axios
      .post(
        "https://api.cloudinary.com/v1_1/YOUR_CLOUDINARY_CLOUD_NAME/image/upload",
        formData
      )
      .then((response) => {
        const data = response.data;
        const fileURL = data.secure_url; // You get image url here
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="dishName"
        ref={register({ required: true })}
        placeholder="Dish Name"
      />
      {errors.dishName && <p>This field is required</p>}

      <input
        name="dishPrice"
        ref={register({ required: true })}
        placeholder="Dish Price"
      />
      {errors.dishPrice && <p>This field is required</p>}

      <textarea
        name="dishDescription"
        ref={register({ required: true })}
        placeholder="Dish Description"
      />
      {errors.dishDescription && <p>This field is required</p>}

      <input type="file" name="dishImage" onChange={onFileChange} />
      {errors.dishImage && <p>This field is required</p>}

      <input type="submit" />
    </form>
  );
};

export default DishUploadForm;
