/*
  객체를 생성하는 방법
  - 객체리터럴을 통한 생성
  - 생성자함수를 통해서 생성 (new 키워드를 이용해서 동일한 구조의 객체를 복사할때 주로 사용)
  -생성자함수를 통해서 생성된 객체 : 인스턴스
  -인스턴스 객체에는 prototype이라는 공통의 저장공간이 포함되어 있어서 자주쓰는  함수를 등록후 자유롭게 호출가능
*/
const now = new Date();
console.log(now);
//우리나라 시간대는 전세계 표준시간대에서 9시간이 더해진 시간 (그리니치 표준시간대 적용)

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'saturday'];

const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const day = now.getDay();
const hours = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();

console.log(hours);

let newHr = 0;

if (hours > 12) {
	newHr = hours - 12 + 'pm';
} else {
	newHr = hours + 'am';
}
console.log(newHr);
