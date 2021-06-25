(function(){	
//variables a utilizar
	var lista =document.getElementById("lista"), //variable para almacenar la lista 
		addTask =document.getElementById("addTask"), // variable para almacenar el input de texto de las tareas
		btnAdd =document.getElementById ("btnAdd"); // variable para alamacenar el boton 
		
//Funciones
	//funcion para agregar tareas 
	var agregarTarea = function(){
		var tarea =  addTask.value; //en una nueva variable guardaremos el valor que tenga "addTask", es decir, lo que este escrito en el input de texto 
			newTask = document.createElement("li"), // creamos un elemento de lista "li"
			enlace = document.createElement("a"), // creamos un elemento de enlace "a"
			contenido = document.createTextNode(tarea);
			
		if (tarea === ""){ //esto es una validacion la cual esta conectada con el css 
			newTask.setAttribute("placeholder", "Agregar una tarea valida");
			newTask.className="error";
			return false;
		}
		
		enlace.appendChild(contenido); //agregamos el contenido al enlace
		enlace.setAttribute("href", "#"); //le establecemos un atributi href
		newTask.appendChild(enlace); //agregamos el enlace (a) a la nueva tarea (li)
		lista.appendChild(newTask); //agregamos la nueva tarea a la lista 
		addTask.value= ""; //con esta linea podremos limpiar lo escrito en el task de la tarea 
		
		//el siguiente ciclo permitira selecciona toda la tarea recien agregada y al ser "clikeada" se eliminara 
		for (var i=0; i<= lista.children.length -1; i++){
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}
	};
//funcion para regresar el placeholder a su estructura original (sin embargo hay que revisar ya que no esta funcionando)
	var comprobarInput = function(){
		addTask.className = "";
		addTask.setAttribute("placeholder", "Agrega tu tarea");
		//alert("comprobar input");
	};
	var deleteTask = function(){
		this.parentNode.removeChild(this);
	};
	
//Eventos
	btnAdd.addEventListener("click", agregarTarea);//generamos el evento para agregar una tarea 
	addTask.addEventListener("click", comprobarInput); //comprobaremos que la caja de texto no este vacia 
			//evento para Borrar elementos de la lista 
	for (var i=0; i<= lista.children.length -1; i++){
		lista.children[i].addEventListener("click", deleteTask);
	}
}());