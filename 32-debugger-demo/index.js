document.addEventListener("DOMContentLoaded", () => {

// URL to the list of all Futurama Quotes on the API
const baseUrl = "http://futuramaapi.herokuapp.com/api/quotes"

// div in the index.html file to which we will append all the quote divs we create
const quotesList = document.querySelector("#quotes-list")

// function to fetch all quotes from the API and convert them into JSON
getAllQuotes = () => fetch(baseUrl).then(resp => resp.json())

// clears all existing quotes from the page and renders each quote
// that we get back from the API onto the page, taking the JSON from
// getAllQuotes as an argument
renderAllQuotes = quotes => {
  quotesList.innerHTML = ""
  quotes.forEach(quote => quotesList.appendChild(createQuoteDiv(quotes)))
}

// creates a div containing a p tag with the quote text  inside, an img tag with
// a picture of the character who said the quote as its source, set to hidden
// by default, and a button with an event listener attached to show/hide the
// image, filling each element with the appropriate string from the quote object
// passed in as an argument. This approach allows us to define an event listener
// on the button as we create it and also pass the image element to it as an argument
// at the same time, rather than having to define seperate functions later that do
// this for us.
// NOTE: because the event object will be passed into the anonymous arrow function
// we have defined in our event listener below by default, and the toggleImage
// function is being run inside the scope of that arrow function, we can then
// access the event inside the toggleImage function without passing it in as an
// argument, providing we call event.preventDefault() inside the toggleImage function.
createQuoteDiv = quote => {
  // debugger
  let quoteDiv = document.createElement('div')
  let quoteText = document.createElement('p')
  quoteText.innerText = quote.quote
  let quoteImage = document.createElement("img")
  quoteImage.src = quote.img
  quoteImage.style.display = "none"
  quoteImage.style.maxHeight = "300px"
  let quoteButton = document.createElement("button")
  quoteButton.innerText = "Show Character"
  quoteButton.addEventListener("click", () => toggleImage(quoteImage))
  quoteDiv.append(quoteText, quotebutton, quoteImage)
  return quote
}

// toggles the display css property of the image to block/none and updates
// the text inside the button as appropriate - NOTE: because we passed the image
// tag into the arrow function inside the event listener, when we call that arrow
// function it knows which image tag we are referring to, as that image tag was
// bound as the specific argument for that function call inside the arrow function.
toggleImage = (image) => {
  event.preventDefault()
  if (image.style.display == "none") {
    image.style.display = "Block"
    event.target.innerText = "Hide Character"
  } else {
    image.style.display = "none"
    event.target.innerText = "Show Character"
  }
}

// function that gets all the quotes from the API and then renders each
// quote div on the page
getAndRenderAllQuotes = () => getAllQuotes().then(renderAllQuotes)

// runs the getAndRenderAllQuotes function when the body of the html document
// finishes loading
document.body.onload = getAndRenderAllQuotes()

})
