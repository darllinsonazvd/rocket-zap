const messages = document.querySelector('.messages');
const messageInput = document.querySelector('.input-wrapper input');

messages.lastElementChild.scrollIntoView();

function sendMessage() {
  let newMessage = document.createElement('div');
  newMessage.classList.add('message');
  newMessage.classList.add('you');

  let newMessageTitle = document.createElement('div');
  let title = document.createTextNode(`Você - ${new Date().getHours()}:${new Date().getMinutes()}`);
  newMessageTitle.appendChild(title);
  newMessageTitle.classList.add('top');

  let newMessageBody = document.createElement('div');
  let messageContent = document.createTextNode(messageInput.value);
  newMessageBody.appendChild(messageContent);
  newMessageBody.classList.add('body');

  newMessage.appendChild(newMessageTitle);
  newMessage.appendChild(newMessageBody);

  messages.appendChild(newMessage);
  messages.lastElementChild.scrollIntoView();
}
