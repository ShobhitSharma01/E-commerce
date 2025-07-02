import React, { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Navbar.css"
interface Option {
  value: string;
  label: string;
}
const DropDown = () => {
  const [options, setOptions] = useState<Option[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories")
      .then(res => {
        const formatted = res.data.map((cat: string) => ({
        
          value: cat,
          label:  cat.charAt(0).toUpperCase() + cat.slice(1),

        }
      ));
        setOptions(formatted);
        
      })
      .catch(err => console.error("Category fetch error:", err));
  }, []);

  const handleSelect = (option: Option | null) => {
    
    if (option) navigate(`/category/${option.value}`);
  };

  return (
    <div className="search-dropdown">
      <Select
        options={options}
        onChange={handleSelect}
        isClearable
        placeholder="Select category...."
      />
    </div>
  );
};

export default DropDown;
