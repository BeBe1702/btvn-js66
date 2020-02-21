var context ={
	data : null
}
const getData = async () => {
	let api = await fetch(' http://dummy.restapiexample.com/api/v1/employees')
	console.log(api);
	let data = await api.json() ;
	context.data = data.data ;
	console.log(context.data);
}

// getData() ;
const viewData = async () => {
	await getData()
	let root = document.getElementById('root');
	console.dir(root);
	context.data.forEach((value,i)=>{
		let dt = `
			<div id ="user${i}">
			<li>ID : ${value.id} </li>
			<li>Name : ${value.employee_name} </li>
			<li>Age : ${value.employee_age} </li>
			<div class = "unview">Salary : ${value.employee_salary} </div>
			<br>
			</div>
		`
		

		root.innerHTML += dt ;
	})
}

// viewData() ;

	const showSalary = async () =>{
		await viewData()
		for(let i = 0; i < context.data.length ; i++)
		{
		let info = document.getElementById(`user${i}`);
		// console.dir(info)
		info.children[1].addEventListener('mouseover', () => {
			info.children[3].classList.toggle('view');

		})
	}
}

	// showSalary();
	const createNewEmployees = async () => {
		await showSalary()
		let ID = document.getElementById("userId");
		let Name = document.getElementById("userName");
		let Age = document.getElementById("userAge");
		
		 let submit = document.getElementById('submit');
		 submit.addEventListener('click', () => {
		 	let add = `
			<li>ID :${ID.value}</li>
			<li>Name : ${Name.value} </li>
			<li>Age : ${Age.value} </li>
		`
		
		 	document.getElementById('root').innerHTML += add ;
		 })
		 console.dir(ID)
	}
createNewEmployees();