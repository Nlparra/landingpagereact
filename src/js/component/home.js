import React from "react";
import { Navbar } from "./Navbar";
import { Jumbo } from "./Jumbo";
import { Cards } from "./Cards";
import { Footer } from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<div className="card-group container mt-5">
				<Jumbo />
				<Cards className={"ml mr-1 card mt-5"} />
				<Cards className={"ml m-3 card mt-5"} />
				<Cards className={"ml m-3 card mt-5"} />
				<Cards className={"ml ml-1 card mt-5"} />
			</div>
			<Footer />
		</div>
	);
}
