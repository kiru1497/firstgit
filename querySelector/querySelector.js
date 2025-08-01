const mainheading = document.querySelector("#main-heading"); 
mainheading.style.textAlign = 'center'; 

const fruits = document.querySelector('.fruits'); 
fruits.style.backgroundColor = 'gray'; 
fruits.style.padding = '30px'; 
fruits.style.margin = '30px'; 
fruits.style.width = "50%"; 
fruits.style.borderRadius = '5px'; 
fruits.style.listStyleType = 'none'; 

const basketHeading = document.querySelector('h2');
basketHeading.style.marginLeft = '30px'; 

const fruitItems = document.querySelectorAll('.fruit');
for (let i = 0; i < fruitItems.length; i++)
{
    fruitItems[i].style.backgroundColor = "white"; 
    fruitItems[i].style.padding = '30px'; 
    fruitItems[i].style.margin = '30px'; 
    fruitItems[i].style.borderRadius = '3px'; 
} 


// Write answer to the questions asked below:
const evenFruitItems = document.querySelectorAll('.fruit:nth-child(even)'); 
for (let i = 0; i < evenFruitItems.length; i++)
{
    evenFruitItems[i].style.backgroundColor = 'brown'; 
    evenFruitItems[i].style.color = 'white'; 
}

basketHeading.style.color = 'brown'; 