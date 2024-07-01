import { FaAngleDown } from "react-icons/fa6";
import useDropdown from "../../hooks/CustomDropDown";

const AuthDropdown = ({ onUserTypeChange, value }) => {
    const { open, active, dropdownRef, handleToggle, handleSelect } = useDropdown();

    const handleUserTypeChange = (selectedType) => {
        onUserTypeChange(selectedType);
        handleSelect(selectedType);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <div
                className="flex justify-between items-center w-[300px] md:w-[330px]  border border-[#c8c7cc] py-3 px-4 my-2 rounded-lg"
                onClick={handleToggle}
            >
                <span className="font-semibold text-lg">{value}</span>
                <FaAngleDown size={23} />
            </div>
            {open && (
                <div className="absolute left-0  border-2 border-blue-500  w-[300px] md:w-[330px] rounded-lg z-50 bg-white">
                    {["doctor", "patient"].map((item, index) => (
                        <p
                            key={index}
                            className={`cursor-pointer  py-1 px-3 ${active === item ? "bg-blue-500  text-white" : null
                                }`}
                            onClick={() => handleUserTypeChange(item)}
                        >
                            {item}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AuthDropdown;
