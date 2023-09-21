/*
  객체를 생성하는 방법
  - 객체리터럴을 통한 생성
  - 생성자함수를 통해서 생성 (new 키워드를 이용해서 동일한 구조의 객체를 복사할때 주로 사용)
  -생성자함수를 통해서 생성된 객체 : 인스턴스
  -인스턴스 객체에는 prototype이라는 공통의 저장공간이 포함되어 있어서 자주쓰는  함수를 등록후 자유롭게 호출가능
*/
const now = new Date();
const hours = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();

console.log(setNumbers(hours));

function setNumbers(num) {
	let result = 0;
	/*
	if (num < 10) result = '0' + num;
	else result = num;
	*/
	//조건식 ? true일때 실행할 구문 : fals일때 실행할 구문
	//삼항연산자 구문안에는 대임연산자가 들어올수 없기 때문에 괄호로 묶어서 표현식으로 변경
	num < 10 ? (result = '0' + num) : (result = num);

	return result;
}

/*
if (hours > 12) {
	newHr = hours - 12;
	if (newHr < 10) {
		newHr = '0' + newHr + 'pm';
	} else {
		newHr = newHr + 'pm';
	}
} else {
	newHr = hours;
	if (newHr > 10) {
		newHr = '0' + newHr + 'am';
	} else {
		newHr = newHr + 'am';
	}
}
*/
