import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const FormWithZod = () => {
  const form = useForm();
  const {
    register,
    handleSubmit,
    setError, //backend throws error
    formState: { errors, isSubmitting },
  } = useForm({
    //defult values
    defaultValues: {
      email: "test@gmail.com",
      password: 12456789,
    },
    resolver: zodResolver(schema),
  });
  const [show, setShow] = useState(false);

  const submitFunction = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      //   throw new Error();
      console.log(data);
    } catch (err) {
      //for backend error
      setError("root", { message: "the email is already taken" });
    }
  };

  const showPassword = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <form
        className="flex flex-col gap-2 text-xl text-white "
        onSubmit={handleSubmit(submitFunction)}
      >
        <label htmlFor="email">email</label>
        <input
          type="text"
          className="p-2 rounded-lg text-black"
          {...register("email")}
        />
        {errors.email && (
          <div className="text-red-400">{errors.email.message}</div>
        )}
        <label htmlFor="password">Password</label>
        <div className="relative">
          <input
            type={`${show ? "text" : "password"}`}
            className="p-2 rounded-lg text-black"
            {...register("password")}
          />
          <button
            className="text-black text-sm cursor-pointer hover:bg-blue-500 px-1 py-1 hover:text-white hover:rounded-md absolute top-2 right-3"
            onClick={(e) => showPassword(e)}
          >
            {show ? "Hide" : "Show"}
          </button>
        </div>
        {errors.password && (
          <div className="text-red-400">{errors.password.message}</div>
        )}
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </form>
      {errors.root && <div className="text-red-400">{errors.root.message}</div>}
    </div>
  );
};

export default FormWithZod;
