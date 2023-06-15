let 변수 = "let : 바뀔 수 있는 값";
console.log(변수);
변수 = "ㅎㅎㅎ";
console.log(변수);

const 변수2 = "const : 바뀔 수 없는 값";
console.log(변수2);
//변수2 = "ㅎㅎㅎ";
//console.log(변수2); 오류발생
const titleEl = document.getElementById('title');
console.log(titleEl);
//titleEl = "hello";  //오류발생

const pi = 3.14159; //상수 값
const _PI = Math.PI;
console.log(pi, _PI);

var a = 1;
var a = 2;
console.log(a); // 2  => 중복선언 체크 안됨

let b = 1;
//let b = 2; // 오류 => 중복선언 체크

//객체나 변수에서 상수값 선언하는 경우
const animals = ["dog", "cat"]; //객체의 형태(여기선 배열)를 바꿀 수 없음
console.log(animals);
animals[0] = "bird";
console.log(animals);
//animals = 1; 오류 => 자료형태 불변


//템플릿 문자열 : 문자열 안에 변수나 표현식을 쉽게 삽입하고 조작할 수 있는 기능 백틱 (``)사용
const name = "john";
const age = 30;
const greeting = "기본 문자열 : 안녕하세요, 저는 " + name + "이고 나이는 " + age + " 입니다."
console.log(greeting);
const greeting2 = `템플릿 문자열 : 안녕하세요, 저는 ${name}이고 나이는 ${age} 입니다.`;
console.log(greeting2);


//자바스크립트로 HTMl 쓰기
const contentEl = document.getElementById('content');
const title = "HTML이란?";
const html = `
    <h1>리액트란?</h1>
    <p>UI를 동적으로 생성하고 컴포넌트화 시켜 개발 할 수 있는
    라이브러리/프레임워크 입니다.</p>   
    <h1>${title}</h1> 
`;
contentEl.innerHTML = html;

// 표현식 계산
const x = 3, y = 10;
let sum = `합계는 : ${x + y} 입니다.`;
console.log(sum);



// 함수선언
console.log(add(3, 5));

function add(a, b) {
    return a + b;
}

// 함수표현(변수나 함수를 먼저 선언하고 사용해야 함)
const add2 = function (a, b) {
    return a * b;
}

console.log(add2(3, 5));

//-------- 화살표 함수--------
const sayHello = _name => {
    if (_name == undefined) {
        //throw '이름 입력 안함'; //에러처리
        return '이름 입력 안함';
    }
    return `Hello ${_name}`;
}

console.log(sayHello('둘리'));
console.log(sayHello());

// function profile(name, age) {
//     return `${name}의 나이는 ${age}입니다.`
//   }

const profile = (name, age) => `${name}의 나이는 ${age}입니다.`
console.log(profile('name', 30));


// ---------분할대입-----------

const pokemon = { _name: '피카츄', skill: '전기' }
let { _name, skill } = pokemon;

console.log(`${_name}는 ${skill} 스킬을 보유`);


// 배열 분할 대입
let arr = [10, 20, 30, 40];
let c, d, rest;
// c = arr[0];
// d = arr[1];
[c, d, ...rest] = arr;
console.log(c, d);
console.log(rest);

//연습문제
const student = {
    name2: 'John Doe',
    age2: 20,
    grade: 'A',
    major: 'Computer Science'
};

let { name2, age2, grade, mafor } = student;

console.log(`이름: ${name2}, 나이${age2}`);

// 기본매개변수 설정
const sayHello2 = (name = '익명') => {
    console.log(`${name}님 안녕?`);
}

sayHello2('둘리'); // "둘리님 안녕?"
sayHello2(); // "익명님 안녕?"

// 연습 문제: 숫자의 제곱 계산하기
const square = (number = 0) => {
    return number * number;
}

console.log(square()); // 출력: 0
console.log(square(5)); // 출력: 25
console.log(square(3)); // 출력: 9


// ------------ spread 연산자 --------------------
var arr1 = [1, 2, 3];
var arr2 = arr1.concat([4, 5, 6]);

console.log(arr2); // [1, 2, 3, 4, 5, 6]

var arr1 = [1, 2, 3];
var arr2 = [...arr1, 4, 5, 6, 7];

console.log(arr2); // [1, 2, 3, 4, 5, 6, 7]

const obj1 = {
    name: '둘리'
}

const obj2 = {
    age: 50
}

const obj3 = { ...obj1, ...obj2 }

console.log(obj3); // { age: 50, name: "둘리" }



let 원본배열 = [1, 2, 3];
let 카피배열 = [...원본배열,100];
카피배열[0] = 99;
console.log(원본배열, 카피배열);
카피배열 = 원본배열.concat([...카피배열]);
console.log(카피배열);

console.log(카피배열.sort((a, b) => a - b));
console.log(카피배열.sort((a, b) => b - a));