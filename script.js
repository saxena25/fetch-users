// console.log('Hello Working Fine');

let display = document.querySelector('.display');
let btn = document.querySelector('.btn');

btn.addEventListener('click', fetchData);

async function fetchData(){
    try {
        let res = await fetch('https://reqres.in/api/users?page=1');
        let data = await res.json();
        let finalRes = data.data;
        // console.log(finalRes)
        displayData(finalRes);
    } catch (error) {
        alert('Oops! Something Went Wrong !Refresh Page')
    }
}


function displayData(data){
    data.forEach((e)=>{
        let div = document.createElement('div');
        div.className = 'box';
        
        let name = document.createElement('h3');
        name.innerText = e.first_name + ' ' + e.last_name;

        let email = document.createElement('p');
        email.innerText = e.email;

        let image = document.createElement('img');
        image.src = e.avatar;
        image.className = 'avatar'

        div.append(image, name, email);
        display.append(div)
    })
}