import React from "react";
import "./Carte.css";
import Heros from "../models/Heros";

//interface CarteProps {
//  id: number;
//  name: string;
//  image: string;
//  civil: string;
//  age: number;
//  ville: string;
//}

type CarteProps = {
	id: number;
	name: string;
	image: string;
	civil: string;
	age: number;
	ville: string;
  }


const Carte: React.FC<CarteProps> = ({
  id,
  name,
  image,
  civil,
  age,
  ville,
}) => {
  return (
    <div className="carte">
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <div>civil: {civil}</div>
      <div>age: {age}</div>
      <div>ville: {ville}</div>
    </div>
  );
};

export default Carte;
