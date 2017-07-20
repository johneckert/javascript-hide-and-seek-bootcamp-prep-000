function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  var element = document.getElementById('nested');
  return element.querySelector('.target');
}

function increaseRankBy(n) {
  var n = parseInt(n);
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString();
  }
}

function deepestChild() {
  let divs = document.querySelector('#grand-node');
  while (divs.querySelector('div') != null) {
    divs = divs.querySelector('div')
  }
  return divs;
}
