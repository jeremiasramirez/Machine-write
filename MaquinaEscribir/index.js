 



let edad = document.getElementById("old")
let view = document.getElementById("view")
 
 

 	edad.addEventListener("keyup",function(e){
 		let els = [edad.value]
 		for(let i=0;i<els.length; i++){
 			view.textContent = els[i];
 			if(edad.value.includes('  ')){
 				edad.value = ''
 				view.textContent = 'No doble space'

 			}
 		}
		view.classList.add("greens")
 	},false);
	 







