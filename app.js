const mySpecialButton = document.getElementById('my-special-button');
const theSection = document.getElementById('my-special-section');
const theInput = document.getElementById('my-special-input');
const nametag = document.getElementById('nametag');







mySpecialButton.addEventListener('click', () => {
    // post-click logic goes here!

    theSection.textContent = theInput.value
    
    theInput.value = '';
    

})

const mySpecialButtonpink = document.getElementById('my-special-buttonpink')
const mySpecialButtongreen = document.getElementById('my-special-buttongreen')
const mySpecialButtonblue = document.getElementById('my-special-buttonblue')

mySpecialButtonpink.addEventListener('click', () => {
    // post-click logic goes here!

  
    nametag.style.backgroundColor = 'pink'

})


mySpecialButtongreen.addEventListener('click', () => {
    // post-click logic goes here!

  
    nametag.style.backgroundColor = 'green'

})


mySpecialButtonblue.addEventListener('click', () => {
    // post-click logic goes here!

  
    nametag.style.backgroundColor = 'blue'

})