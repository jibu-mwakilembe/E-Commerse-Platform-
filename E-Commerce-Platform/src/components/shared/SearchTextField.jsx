import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";

function SearchTextField({ onChange, placeholder }) {
  return (
    <div>
      <TextField
        variant="outlined"
        fullWidth
        slotProps={{
          input: {
            startAdornment: <SearchIcon />,
          },
        }}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchTextField;
