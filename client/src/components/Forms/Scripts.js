import React from 'react'

export default function Script() {
    const modal =  
    document.querySelector('.modal'); 
const btn =  
    document.querySelector('#btn') 
const close =  
    document.querySelector('.modal-close') 

btn.addEventListener('click', 
                   function () { 
modal.style.display = 'block' 
}) 

close.addEventListener('click', 
                     function () { 
modal.style.display = 'none' 
}) 

window.addEventListener('click', 
                      function (event) { 
if (event.target.className ===  
    'modal-background') { 
  modal.style.display = 'none' 
} 
}) 

}
