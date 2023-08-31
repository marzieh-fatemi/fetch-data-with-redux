import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

function CardComponent() {
    const data = useSelector((state) => state.users);

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {data &&
        data.users.map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <div className="card">{item.title}</div>
          </Grid>
        ))}
    </Grid>
  );
}

export default CardComponent;
