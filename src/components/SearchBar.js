import { Paper, TextField } from "@mui/material";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => setSearchTerm(event.target.value);
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      onSubmit(searchTerm);
    }
  };
  return (
    <Paper
      elevation={6}
      sx={{
        padding: "25px",
        marginBottom: 2,
      }}
    >
      <TextField
        fullWidth
        label="Search..."
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        variant="outlined"
      />
    </Paper>
  );
};

export default SearchBar;
