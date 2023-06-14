const firstPnode = document.querySelector('#content .text');
const pNodes = document.querySelectorAll('#content .text');
const thirdPnode = document.querySelector('#content > p:nth-child(3)');

document.querySelector('#main button').addEventListener(
  'click', () => {
    //console.log('button clicked..');
    //firstPnode.innerHTML = '바뀐 텍스트..';
    //pNodes[1].innerHTML = '바뀐 텍스트';
    //thirdPnode.innerHTML = '바뀐 텍스트....';

    // 새로운 <p> 태그 생성
    const newParagraph = document.createElement('p');
    newParagraph.innerHTML = '새로 만든 태그에요..';
    document.querySelector('#main').appendChild(newParagraph);
  }
);
// #content > p:nth-child(3)

