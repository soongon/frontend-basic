// '눌러서 데이터가져오기' 버튼 클릭 시 API 를 통해 데이터를 가져오기
document.querySelector('#container button').addEventListener(
  'click', () => {
    fetchDataFromServerAsync();
    console.log('데이터 가져왔습니다..');
  }
);

// async ~ await : ES7
async function fetchDataFromServerAsync() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const json = await response.json();
    console.log(json);
  } catch (err) {
    console.log(err);
  }
}


// promise
function fetchDataFromServer() {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
}