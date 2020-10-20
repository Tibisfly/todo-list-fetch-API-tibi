import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState, useEffect } from "react";
import { checkPropTypes } from "prop-types";

//create your first component
export function Home() {
	const [todo, setTodo] = useState(["elemento 1", "elemento 2"]);
	const [value, setValue] = useState([" "]);

	return (
		<div className="text-center mt-5">
			<div className="row">
				<div className="container-fluid">
					<h1 className="display-2">todos</h1>
					<div className="container">
						<p>My value is {value}</p>
						<input
							onChange={event =>
								setTodo(todo + setValue(event.target.value))
							}
						/>
						<p>{todo}</p>
                        
						<br />
					</div>
				</div>
			</div>
		</div>
	);
}

// Nos hace falta añadir value en todo y que se agregue ese input cada vez que apretamos enter 	<ul>{todo.map(value)=>(<li>{value}</li>)}</ul>
