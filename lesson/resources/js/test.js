// <script> 태그는 작성하지 않음

// 창 종류 3가지 : 
// 1. alert - 확인 버튼만 있음
alert("이건 alert"); // = window.alert("이건 alert");

// 2. confirm - 예/아니오 버튼이 있음 // 확인/취소 //true/false
var confirmValue = confirm("컨펌 창");
alert(confirmValue);
console.log(confirmValue);
document.write(confirmValue);
// 3. prompt - 입력을 하고 확인/취소 가능 // 입력값이 return됨
var promptValue = prompt("이건 프롬프트");
alert(promptValue);
console.log(promptValue);
document.write(promptValue);