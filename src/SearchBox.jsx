import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function Searchbox() {
  const [city, setCity] = useState("");

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("City:", city);
  };

  return (
    <div className="SearchBox">
      <h3>Search for the Weather</h3>

      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
          fullWidth
        />

        <br /><br />

        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
