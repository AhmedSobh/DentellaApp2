import React, { useEffect, useState } from "react";
import FormModel from "../../components/auth/FormModel";
import AuthInput from "../../components/auth/AuthInput";
import {
    email_validation,
    name_validation,
    password_validation,
} from "../../components/auth/inputValidation";
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { FormProvider, useForm } from "react-hook-form";
import AuthButton from "../../components/auth/AuthButton";
import { Link, useNavigate } from "react-router-dom";
import Google from "../../assets/google.svg";
import Facebook from "../../assets/Facebook (1).svg";
import { userLogin } from "../../redux/auth/authActions";
import { useDispatch, useSelector } from "react-redux";
import AuthDropdown from "../../components/auth/AuthDropdown";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
    const methods = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userType, setUserType] = useState("patient");

    const onSubmit = methods.handleSubmit(async (data) => {
        try {
            const response = await dispatch(userLogin({ ...data, userType }));
            if (!response.error) {
                toast.success("Login successful");

                localStorage.setItem("userData", JSON.stringify({ ...data, userType }));

                navigate("/");
            } else {
                toast.error("Incorrect email or password");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again later.");
        }
    });

    return (
        <>
            <ToastContainer />
            <FormProvider {...methods}>
                <FormModel>
                    <div className="flex flex-col items-center md:items-start mt-6">
                        <form
                            onSubmit={methods.handleSubmit(onSubmit)}
                            noValidate
                            autoComplete="off"
                        >
                            <AuthDropdown value={userType} onUserTypeChange={setUserType} />
                            {userType === "doctor" ? (
                                <AuthInput
                                    {...email_validation}
                                    Icon={MdOutlineEmail}
                                    label={"email"}
                                />
                            ) : (
                                <AuthInput {...name_validation} Icon={IoPersonOutline} />
                            )}
                            <AuthInput
                                {...password_validation}
                                Icon={CiLock}
                                label={"Enter Your Password"}
                            />

                            <div className="flex gap-x-16">
                                <div className=" flex items-center gap-x-2">
                                    <label className="text-sm md:text-base">Remember me</label>
                                    <input type="checkbox" />
                                </div>
                                <span className="text-sm md:text-base">Forget Password?</span>
                            </div>
                            <AuthButton text={"Login"} submit={onSubmit} />
                        </form>
                        <div className="flex flex-col items-center">
                            <div className="flex gap-x-4 md:ml-12 my-2">
                                <img src={Google} alt="google" className="w-8 md:w-10 " />
                                <img src={Facebook} alt="facebook" className="w-8 md:w-10 " />
                            </div>

                            <p className="text-center text-sm md:text-base md:ml-12">
                                Don't have an account?
                                <Link to="/register" className="text-blue-500">
                                    Register
                                </Link>
                            </p>
                        </div>
                    </div>
                </FormModel>
            </FormProvider>
        </>
    );
};

export default Login;
