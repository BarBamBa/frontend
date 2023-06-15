
const titleId = document.getElementById('title');
console.log(titleId);


const containers = document.getElementsByClassName('container');
console.log(containers);


// querySelector ('css선택자') - CSS방식
const containerEl = document.querySelector('.container');
console.log(containerEl); //제일 위의 하나만 선택

// querySelectorAll ('css선택자') - CSS방식[배열]
const containersEl = document.querySelectorAll('.container');
console.log(containersEl); //모두 선택
console.log(containersEl[0]);

// DOM 생성
const divEl = document.createElement('div');
const pEl = document.createElement('p');
pEl.innerText = 'p태그 입니다.';
console.log(pEl);

// append -- 뒤에 추가
divEl.appendChild(pEl);
console.log(divEl);

// prepend -- 앞에 추가
const h2El = document.createElement('h2');
h2El.innerText = '생성된 제목';
divEl.prepend(h2El);
console.log(divEl);

containersEl[1].appendChild(divEl);

//버튼 요소 추가
const btnEl = document.createElement('button');

// 버튼명 변경
btnEl.textContent = '버튼';

// containersEl[0]에 버튼 추가
containersEl[0].append(btnEl);

// 버튼에 이벤트 추가
btnEl.addEventListener('click', () => {
    // 클릭하면 함수 실행
    console.log(h2El.parentNode);
    console.log(h2El.parentElement);
    h2El.parentElement.removeChild(h2El);
    
});

// class 추가
btnEl.classList.add('btn');
console.log(btnEl);