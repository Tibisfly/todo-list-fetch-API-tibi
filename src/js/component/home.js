import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState, useEffect } from "react";
import { checkPropTypes } from "prop-types";

//create your first component
export function Home() {
	const [todo, setTodo] = useState(["elemento 1", "elemento 2"]);
	const [value, setValue] = useState("");

	function handleChange(event) {
		setValue(event.target.value);
	}

	const handleKeyPress = event => {
		if (event.key === "Enter") {
			// const newTodo = todo;
			// newTodo.push(value);
			// setTodo(newTodo);
			setTodo([...todo, value]);
			console.log("handleKeyPress");
			setValue("");
		}
	};

	return (
		<div className="text-center mt-5">
			<div className="row">
				<div className="container-fluid">
					<h1 className="display-2">todos</h1>
					<div className="container">
						<p>My value is {value}</p>
						<input
							onChange={handleChange}
							onKeyPress={handleKeyPress}
							value={value}
						/>
						<ul>
							{todo.map((value, index) => (
								<li key={index}>{value}</li>
							))}
						</ul>
						<br />
					</div>
				</div>
			</div>
		</div>
	);
}

// Nos hace falta añadir value en todo y que se agregue ese input cada vez que apretamos enter 	<ul>{todo.map(value)=>(<li>{value}</li>)}</ul>
// se declara la variable const con un "value" que se cambia al aplicar "setValue", por eso se usa use state
//setTodo(todo
// en el handler no necesitas retornar nada, en ningun lado coloques return.
// Los eventos se colocan sin return, se utilizan con handle<event>
//useEffect está presente cuando hay efectos colaterales (se establece un valor), React busca dispararlo siempre, programación funcional. Efecto secundario: cada vez que cambias una variable SIEMPRE.
// setTodo([...todo, value]); linea 18 a 21 javascript moderno
// falta el evento de eliminar
