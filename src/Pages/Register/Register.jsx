import React from "react";
import { useForm } from "react-hook-form";
const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


  return (
    <>
      <div className="hero bg-base-50 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-700 to-purple-300 bg-clip-text text-transparent">Register now!</h1>
            <p className="py-6">
               If You don't have an account please register first . We are happy to see you in our website. We are the best seller in the industry and we are happy to help you.
            </p>
          </div>
          <div className="card bg-gradient-to-r from-purple-600 to-purple-300 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  {...register("firstName", { required: true, maxLength: 20 })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required:'Email is required'})}
                />
                {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true, maxLength: 8})}
                />
                {errors.password && <p className="text-red-600">PassWord is required and max length is 8 charecter</p>}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
