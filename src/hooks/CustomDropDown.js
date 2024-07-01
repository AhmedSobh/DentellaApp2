import { useState, useEffect, useRef } from "react";

const useDropdown = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Select Type User");
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleSelect = (item) => {
    setActive(item);
    setOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return { open, active, dropdownRef, handleToggle, handleSelect };
};

export default useDropdown;
