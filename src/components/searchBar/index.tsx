import React, { useState } from "react";
import { Input } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

function SearchBar({ placeholder = "" }) {
  // states
  const [val, setVal] = useState("");

  // url location
  const { search } = useLocation();
  const navigate = useNavigate();

  // handle
  const handleSearch = (value) => {
    if (search) {
      // if on user in on seach-page
      // the call api here
      alert("api call");
    } else {
      //redirect to seact-page and forward values as search-params
      navigate(`search?stock=${value}`);
    }
  };

  return (
    <div className="row">
      <div className="col-12 col-md-5 mx-auto text-center">
        <span className="d-block py-4 fs-1 text-white">Find stocks</span>
        <Input.Search
          size="large"
          value={val}
          className={"rounded overflow-hidden"}
          placeholder={placeholder}
          onChange={(e) => setVal(e.target.value)}
          onSearch={handleSearch}
        />
      </div>
    </div>
  );
}

export default SearchBar;
