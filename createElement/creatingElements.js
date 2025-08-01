const para = document.createElement('p'); 
para.id = "fruits-total";
const paraText = document.createTextNode('Total Fruits: 4'); 

para.appendChild(paraText); 



const div = document.getElementsByTagName('div'); 

const secondDiv = div[1]; 
// secondDiv.appendChild(para); 

const fruits = document.querySelector('.fruits');
secondDiv.insertBefore(para, fruits); 

//heading 

const heading = document.createElement('h3'); 

heading.style.fontStyle = 'italic';

const headingText = document.createTextNode('Buy high quality organic fruits online'); 

heading.appendChild(headingText); 

const firstDiv = div[0]; 

const mainHeading = document.querySelector('#header'); 
firstDiv.appendChild(heading); 