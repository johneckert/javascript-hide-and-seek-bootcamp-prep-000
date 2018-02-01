function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  const lis = document.getElementsByClassName("ranked-list");
  for (let i = 0; i < lis.length; i++) {
    let rank = parseInt(lis[i].innerHTML);
    rank + n;
    lis[i].innerHTML = rank;
  }
}

function deepestChild() {
  let deepest = function(currentNode) {
    if (currentNode.children.length == 0) {
      return currentNode;
    }

    return deepest(currentNode.children[0]);
  };

  const startNode = document.querySelector("#grand-node");
  let bottom = deepest(startNode);
  return bottom;
}
