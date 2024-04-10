import React from "react";
import NavBar from "./navbar";
import jumbotron from "./jumbotron";
import cards from "./cards";
import Jumbotron from "./jumbotron";
import Cards from "./cards";

//create your first component 
const Home = () => {       
	return (
		<>
		<NavBar/>
		  <div className="container-fluid">
		   <div>
	         <Jumbotron/>
		     <Cards/>
		   </div>
		  </div>
		</> 

		
       
	);
};




export default Home;
