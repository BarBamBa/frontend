const foods = ["김밥", "만두", "순대"];
for (let i = 0; i < foods.length; i++) {
    console.log(foods[i]);
}
foods.map((값) => {
    return console.log(값);
})

//mmap()로 array 복사하기
let newFoods = foods.map((값) => {
    console.log(`새로운 ${값}`);
    return `새로운 ${값}`;
})
console.log(newFoods);


//외부에서 펑션 선언 후 반복문돌리기
foodFunction = function (값) {
    console.log(`새로운 ${값}!`);
    return `새로운 ${값}!`;
}

let newFoods2 = foods.map(foodFunction);


//filter() ==> 일치하는 자료 가져오기
let likeFoods = foods.filter((item, i) => {
    console.log(`${i} : ${item}`);
    return item !== "만두";
});
console.log(likeFoods);


//연습문제 : map() 함수로 names 배열의 각 이름에 ‘님’자가 추가되도록 하시오.
const names = ['둘리', '길동', '짱구'];

const newNames = names.map((item) => { // == names.map(function(item) {})
    return `${item}님`
})
console.log(newNames);



// ----------- 객체 반환 -------------
const createPerson = (name, age) => {
    return {
        name, // name4 = name4
        age, // age4 = age4
        greet() { // greet : function(){} / greet: () => {}
            console.log("Hello, " + name);
        }
    }
}

const person1 = createPerson('K', 30);
console.log(person1);
person1.greet();

