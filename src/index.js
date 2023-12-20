//Using getElementById

// document.getElementById(`page_title`)
// grabs the h1 element from html
//this tests if it worked
// const h1 = document.getElementById(`page_title`)


// Using QUERYSELECTOR
	// can grab by node title by just putting in single backward quote
	const h1 = document.querySelector(`h1`)

	// can grab by specific id by placing # in front of id name
const h12 = document.querySelector(`#page_title`)
	
// can grab y specific class by placing a . in front of class name
	
console.log(h1)
console.log(h12)

h1.style.color = 'green'

// grab a p tag 
// will grab the first corresponding p tag

const p1 = document.querySelector(`p`)

console.log(p1)
// change the text within a p tag in the DOM
p1.innerHTML = "blah"  //allows you to add html tags   DO NOT USE THIS  creates security issues
p1.textContent = "text content" //  USE THIS ONE  
p1.innerText = "inner text" //same as textContent

// CREATE NEW ELEMENTS AND ADD TO DOM

const ol = document.querySelector(`ol`)
//const li = document.createElement(`li`)
//li.textContent = "This is the first list item!"

// CREATE MULTIPLE ELEMENTS USING A FOR LOOP

for (let i = 0; i < 5; i++) {
	const li = document.createElement(`li`)
	// have to attach it to the correct parent element
	
	li.textContent = i + 1
	ol.appendChild(li)
}
const letters = [`a`, `b`, `c`, `d`, `e`]

letters.forEach((letter) => {
	console.log(letter)
	const li = document.createElement(`li`)
	
li.textContent = letter
ol.append(li)
})

console.log(ol)

// remove an html tag from a document

const p_last = document.querySelector(`.removable`)
console.log(p_last)
p_last.remove()



