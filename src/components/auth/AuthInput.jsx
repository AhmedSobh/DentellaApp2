import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdError } from "react-icons/md";
import { useFormContext } from "react-hook-form";
import { findInputError } from "./findInputError";
import { isFormInvalid } from "./isFormInvalid";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const AuthInput = ({
  Icon,
  id,
  type,
  placeholder,
  validation,
  name,
  value,
  onChange,
  label,
}) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  useEffect(() => {
    // Set default values when the component mounts
    setValue(name, value);
  }, [setValue, name, value]);

  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <>
  
      <div className="relative">
        <div className="flex flex-col mt-2">
          <label htmlFor={id} className="font-bold">
            {label}
          </label>

          <input
            id={id}
            placeholder={placeholder}
            type={type === "password" && isPasswordVisible ? "text" : type}
            className="w-[300px] md:w-[330px] border border-[#c8c7cc] rounded-lg
          outline-none py-3 px-9 my-2"
            onChange={onChange}
            {...register(`${name}`, validation)}
          />
        </div>
        {placeholder === "password" ? (
          <div
            className="absolute top-[66%] right-0 transform translate-x-[-50%] translate-y-[-50%] text-2xl text-[#5A6067] cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
          </div>
        ) : null}
        <Icon className="absolute top-[66%] left-5 transform translate-x-[-50%] translate-y-[-50%] text-2xl text-[#5A6067] " />
      </div>
      <AnimatePresence mode="wait" initial={false}>
        {isInvalid && (
          <InputError
            message={inputError.error.message}
            key={inputError.error.message}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const InputError = ({ message }) => {
  return (
    <motion.p
      className="w-fit flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
      {...framer_error}
    >
      <MdError />
      {message}
    </motion.p>
  );
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};

export default AuthInput;
