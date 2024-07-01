import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import FormModel from "../../components/auth/FormModel";
import AuthInput from "../../components/auth/AuthInput";
import {
    dentistID_validation,
    email_validation,
    name_validation,
    num_validation,
    password_validation,
} from "../../components/auth/inputValidation";
import { MdOutlineEmail, MdPhone } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { HiIdentification } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import AuthButton from "../../components/auth/AuthButton";
import AuthDropdown from "../../components/auth/AuthDropdown";

import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/auth/authActions";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
    const dispatch = useDispatch();
    const methods = useForm();
    const navigate = useNavigate();
    const [userType, setUserType] = useState("patient");


    const onSubmit = methods.handleSubmit(async (data) => {
        data.email = data.email.toLowerCase();
        try {
            const response = await dispatch(registerUser({ ...data, userType }));

            if (response.error) {
                toast.error(response.error.message || "Registration failed");
            } else {
                toast.success("Registration successful");
                navigate("/login");
            }
        } catch (error) {
            toast.error(error.message || "An error occurred during registration");
        }
    });



    return (
        <FormProvider {...methods}>
            <FormModel>
                <div className="flex flex-col items-center md:items-start ">
                    <form
                        onSubmit={methods.handleSubmit(onSubmit)}
                        noValidate
                        autoComplete="off"
                    >
                        <AuthDropdown onUserTypeChange={setUserType} value={userType} />
                        <AuthInput {...name_validation} Icon={IoPersonOutline} />

                        {userType === "doctor" && (
                            <AuthInput {...dentistID_validation} Icon={HiIdentification} />
                        )}
                        <AuthInput {...email_validation} Icon={MdOutlineEmail} />
                        <AuthInput {...num_validation} Icon={MdPhone} />
                        <AuthInput {...password_validation} Icon={CiLock} />

                        <AuthButton
                            text={"Register"}
                            submit={methods.handleSubmit(onSubmit)}
                        />
                    </form>
                </div>
                <p className="text-center text-sm md:text-base md:mr-32">
                    Don You have an account?
                    <Link to="/login" className="text-blue-500">
                        Login
                    </Link>
                </p>
            </FormModel>
            <ToastContainer />
        </FormProvider>
    );
};

export default Register;
