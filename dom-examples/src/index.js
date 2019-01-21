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
    const messageView = document.createElement('li')
 
    const subjectView = document.createElement('h1')
    subjectView.appendChild(document.createTextNode(message.subject))
 
    const fromView = document.createElement('a')
    fromView.appendChild(document.createTextNode(message.from))
 
    const bodyView = document.createElement('p')
    bodyView.appendChild(document.createTextNode(message.body))
 
    messageView.appendChild(subjectView)
    messageView.appendChild(fromView)
    messageView.appendChild(bodyView)
 
    return messageView
 }
 
 function renderInbox(inbox) {
    const inboxView = document.createElement('ul')
 
    for (let i = 0; i < inbox.length; i++) {
        const message = inbox[i]
        inboxView.appendChild(renderMessage(message))
    }
 
    return inboxView
 }
 
 const view = renderInbox(inbox)
 document.getElementById('root').appendChild(view)