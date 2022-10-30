import React, { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function SearchBar() {
  // state
  const [input, setInput] = useState("");

  // method
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <Input
      size="large"
      className={"rounded overflow-hidden"}
      prefix={<SearchOutlined className={"me-2"} />}
      placeholder="f.e APPl or Apple"
      onChange={(e: string) => handleChange(e)}
    />
  );
}

export default SearchBar;
