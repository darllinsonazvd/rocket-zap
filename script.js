const messages = document.querySelector('.messages');
const messageInput = document.querySelector('.input-wrapper input');

messages.lastElementChild.scrollIntoView();

function sendMessage() {
  if (messageInput.value) {
    const newMessage = document.createElement('div');
    newMessage.classList.add('message');
    newMessage.classList.add('you');

    const newMessageTitle = document.createElement('div');
    const title = document.createTextNode(
      `Você - ${new Date().getHours()}:${new Date().getMinutes()}`,
    );
    newMessageTitle.appendChild(title);
    newMessageTitle.classList.add('top');

    const newMessageBody = document.createElement('div');
    const messageContent = document.createTextNode(messageInput.value);
    newMessageBody.appendChild(messageContent);
    newMessageBody.classList.add('body');

    newMessage.appendChild(newMessageTitle);
    newMessage.appendChild(newMessageBody);

    messages.appendChild(newMessage);
    messageInput.value = '';
    messages.lastElementChild.scrollIntoView();
  }
}
