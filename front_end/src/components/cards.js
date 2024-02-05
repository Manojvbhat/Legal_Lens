import React from "react";
import Card from "./Card";
import Heading from './Heading';
// import {Route,Routes,Navlinks} from "react-router-dom";
// import People from "../screen/People";
// import Lawyer from "../screen/Lawyer";
// import Judge from "../screen/Judge";

export default function Cards()
{
	return (
		<div>
			<Heading></Heading>
			<div className="flex justify-center my-11  mx-auto">
			<Card image_url={process.env.PUBLIC_URL + "/judge.png"} text="Judge"></Card>
			<Card image_url={process.env.PUBLIC_URL + "/female_lawyer.png"} text="Lawyer"></Card>
			<Card image_url={process.env.PUBLIC_URL + "/people_icon.jpeg"} text="People"></Card>
			</div>
		</div>
	)
}