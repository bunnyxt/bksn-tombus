function bksn() {
  var chatline = document.getElementById('chatline');
  var lastMessage = chatline.lastElementChild;

  var oldContentWidthStr = getComputedStyle(lastMessage.lastElementChild, null)['width'];
  var oldContentWidth = oldContentWidthStr.slice(0, oldContentWidthStr.length - 2);
  var newMessageWidth = parseInt(oldContentWidth) + 50 + 72;

  var message = document.createElement('div');
  message.setAttribute('class', 'message');
  message.setAttribute('style', 'width: ' + newMessageWidth + 'px');

  var avatar = document.createElement('img');
  avatar.setAttribute('class', 'avatar');
  // random choose 1 tombus avatar
  var tombusAvatars = ['avatar1.jpg', 'avatar2.jpg', 'avatar3.jpg', 'avatar4.jpg'];
  avatar.setAttribute('src', '/src/' + tombusAvatars[Math.floor((Math.random() * tombusAvatars.length))])
  message.appendChild(avatar);

  var content = document.createElement('div');
  content.setAttribute('class', 'content');

  var title = document.createElement('div');
  title.setAttribute('class', 'title');
  // random choose 1 tombus title
  var tombusTitles = ['tombus', '三牛', '阿汤', '文献中心主任-BKSNOfficial', '路人', '三牛万年青青草', '三牛哥哥'];
  title.innerHTML = tombusTitles[Math.floor((Math.random() * tombusTitles.length))];
  content.appendChild(title);

  // solve wrapping when depth == 2 and title == 文献中心主任-BKSNOfficial
  if (title.innerHTML === '文献中心主任-BKSNOfficial' && newMessageWidth === 224) {
    title.innerHTML = '阿汤';
  }

  var innerMessage = lastMessage.cloneNode(true);
  innerMessage.setAttribute('class', 'inner-message');

  content.appendChild(innerMessage);
  message.appendChild(content);
  chatline.appendChild(message);
}

function reset() {
  var chatline = document.getElementById('chatline');
  var child = chatline.lastElementChild;
  while (child) {
    chatline.removeChild(child);
    child = chatline.lastElementChild;
  }
  chatline.appendChild(getBaseMessage());
}

function getBaseMessage() {
  var message = document.createElement('div');
  message.setAttribute('class', 'message');

  var avatar = document.createElement('img');
  avatar.setAttribute('class', 'avatar');
  avatar.setAttribute('src', '/src/avatar1.jpg')
  message.appendChild(avatar);

  var content = document.createElement('div');
  content.setAttribute('class', 'content');

  var title = document.createElement('div');
  title.setAttribute('class', 'title');
  title.innerHTML = 'tombus';
  content.appendChild(title);

  var img = document.createElement('img');
  img.setAttribute('class', 'bksn');
  img.setAttribute('src', '/src/bksn.png');
  content.appendChild(img);

  message.appendChild(content);
  return message;
}
