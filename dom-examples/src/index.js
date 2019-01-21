require('./index.css')
// const name = prompt('Who are you?')
// alert('hello ' + name)
// document.body.appendChild(document.createTextNode('Hello world'))

const h1El = document.createElement('h1');
const titelText = document.createTextNode('Hello world');
const woord = document.createTextNode('een woord');
h1El.appendChild(titelText);
document.body.appendChild(h1El)
document.getElementById('root').appendChild(woord)




// eerst: yarn add crel,
// dan:
const crel = require('crel')

const inbox = [
   {
       subject: "Hello man",
       from: "waldo@wallyworld.com",
       body: "yo man how youve been doing?"
   },
   {
       subject: "New registration",
       from: "no-reply@worldonlineforums.com",
       body: "Welcome to the new WOF..."
   },
]

function renderMessage(message) {
   return crel('li',
       crel('h1', message.subject),
       crel('a',
           { href: 'mailto:' + message.from },
           message.from),
       crel('p', message.body))
}

function renderInbox(inbox) {
   return crel('ul', inbox.map(renderMessage))
}

const view = renderInbox(inbox)
document.getElementById('root').appendChild(view)

