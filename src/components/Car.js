import React from "react";
import cars from "../cars.json";
// import material ui components here //
import { Container, Paper, Chip, Typography } from "@material-ui/core";
// Container, Paper, Chip //

const Car = props=> {
let id = props.match.params.id;
let Car = cars.find(car => id == car.id);
return (

<div className="car-container" key={props.match.params.id}>
<h1>A specific car</h1>
<Container className="car-container">
<Paper className="car-paper">
<Typography variant="h5">{Car.Name}</Typography>
<div className="chip-container">
<Chip label={`id: ${Car.id}`}></Chip>
<Chip label={`Name: ${Car.Name}`}></Chip>
<Chip label={`Cylinders: ${Car.Cylinders}`}></Chip>
<Chip label={`Year: ${Car.Year}`}></Chip>
<Chip label={`Displacement: ${Car.Displacement}`}></Chip>
<Chip label={`Horsepower: ${Car.Horsepower}`}></Chip>
<Chip label={`Weight (lbs): ${Car.Weight_in_lbs}`}></Chip>
<Chip label={`Acceleration: ${Car.Acceleration}`}></Chip>
<Chip label={`Origin: ${Car.Origin}`}></Chip>
</div>
</Paper>
</Container>
</div>
)
};

export default Car;
