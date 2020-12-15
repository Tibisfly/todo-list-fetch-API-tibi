import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useState, useEffect } from "react";
import { checkPropTypes } from "prop-types";

export function Home() {
	const [todo, setTodo] = useState(["Make the bed", "Go to the gym"]);
	const [inputValue, setInputValue] = useState("");

	function handleChange(event) {
		setInputValue(event.target.value);
	}

	const handleKeyPress = event => {
		if (event.key === "Enter" && inputValue != "") {
			// const newTodo = todo;
			// newTodo.push(value);
			// setTodo(newTodo);
			setTodo([...todo, inputValue]);
			console.log("handleKeyPress");
			setInputValue("");
		}
	};

	function deleteRow(index, event) {
		// quiero borrar una tarea y quiero identificar qué tarea en específico quiero "borrar", también necesitamos imprimir el nuevo array, sin ese todo que borramos.
		// for(let i=0; i<todo.length; i++) Victor me pregunta por qué lo quiero recorrer
		let newTodo = [...todo]; //aquí copio mi array para utilizarlo con el splice más cómodo
		let removed = newTodo.splice(index, 1); //nos devuelve un array de los elementos eliminados, me da el que eliminé
		setTodo(newTodo); //se hace el setTodo del nuevo array, sino saldría el array antes del splice
    }
    
    function getTodos(){
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
            };
            fetch("https://assets.breatheco.de/apis/fake/todos/user/tibisfly2", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    
	return (
		<div className="text-center mt-5">
			<div className="row w-100">
				<div className="col-md-12">
					<h1 className="display-2">Tibis TO DO List</h1>

					<div className="input container input-group mx-auto">
						<input
							onChange={handleChange}
							onKeyPress={handleKeyPress}
							value={inputValue}
							placeholder="What needs to be done?"
							type="text"
							className="form-control"
						/>
					</div>
					<div className="list container">
						<ul>
							{todo.map((value, index) => (
								<li className="list-group-item" key={index}>
									{value}
									<button
										type="button"
										onClick={event =>
											deleteRow(index, event)
										}>
										<i className="fas fa-trash-alt" />
									</button>
								</li>
							))}
						</ul>
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
