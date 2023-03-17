let myDate0 = new Date();

console.log(myDate0);

// new Date(milleseconds);
// 1970년 1월 1일 00:00:00 UTC (타임스탬프) + ~밀리초
let myDate1 = new Date(1000);

console.log(myDate1);

// new Date('YYYY-MM-DD');
let myDate2 = new Date('1997-07-29');

console.log(myDate2);

// new Date(YYYY, MM, DD, hh, mm, ss, ms);
// new Date(YYYY, MM, 1, 0, 0, 0, 0);
// month는 0부터 시작!
// Date.getTime()
let myDate3 = new Date(2017, 4, 18, 19, 11, 16);

console.log(myDate.getTime());

// getDate() => 일자
// getDay() => 요일