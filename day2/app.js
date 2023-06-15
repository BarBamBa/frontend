

let log = (msg) => {
    console.log(msg);
}
log('hello');

// 함수에 객체 넣기

const car = {
    name: '차종은 소나타',
    msg(name) { // = msg: (name) => {} / msg: function(name){}
        console.log(name);
    }
}

car.msg(car.name); //차종은 소나타

// 함수에 함수를 전달 할 수 있음(Call Back 함수)

const 요리 = (재료) => {
    return 재료();
}

const 재료 = () => { //위의 요리 펑션의 파라메터로 들어감
    return '피자';
}

console.log(요리(재료)); //피자

// 연습: 숫자 배열에서 짝수만 필터링하는 함수
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const 짝수만 = (numbers) => {
    return numbers.filter((num) => {
        return num % 2 === 0;
    })
}
const 짝수 = 짝수만(numbers);
console.log(짝수);
console.log(numbers);

//비동기 처리

// callback 함수
const placeOrder = (menu, callback) => {
    let order;

    setTimeout(() => {
        order = `주문완료: ${menu}`;
        callback(order);
    }, 2000);
}

const 주문 = (order) => {
    console.log(order);
}

placeOrder("햄버거", 주문);

// promise 문법
const foodOrder = (food) => {
    return new Promise((해결, 실패) => {
        setTimeout(() => {
            const 주문성공 = true;
            if (주문성공) {
                해결(`${food}주문완료!`);
            } else {
                실패(`${food}주문실패!`);
            }
        }, 1000)
    });
}

foodOrder('햄버거')
    .then((res) => console.log(res)) //해결
    .catch((err) => console.log(err)); //실패


// 연습문제
function searchProduct(keyword) {
    return new Promise((resolve, reject) => {
        // 서버 API 요청을 시뮬레이션하기 위해 setTimeout 사용
        setTimeout(() => {
            const products = ['Apple', 'Banana', 'Orange'];

            const filteredProducts = products.filter((item) => {
                return item.toLowerCase().includes(keyword.toLowerCase())
            });
            
            if (filteredProducts.length !== 0 ) {
                resolve(`검색어 "${keyword}"로 검색된 상품: ${filteredProducts}`);
            } else {
                reject('상품 검색 중 오류 발생');
            }


        }, 2000);
    });
}

searchProduct('apple')
    .then(products => {
        console.log(products);
    })
    .catch(error => {
        console.error(error);
    });