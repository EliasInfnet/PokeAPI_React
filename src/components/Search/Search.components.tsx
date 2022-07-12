import { TextField } from "@mui/material";
import { useState } from "react";

function Search() {

  const [search, setSearch] = useState('')

  const handleChange = (e: any) => {
    setSearch((prev) => e.target.value)    
  }

  return (
    <>
      <TextField id="outlined-basic" onChange={handleChange} label="Outlined" variant="outlined" />
      {search}
    </>
  );
}

export default Search;