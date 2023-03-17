// 미술관 티켓 가격을 계산해 주는 함수
// standard, student는 카테고리에 해당하는 티켓 개수를 뜻합니다.

function ticketPrice(standard, student){
  let standardPrice = 15000;
  let studentPrice = 8000;
  
  let totalPrice = standard * standardPrice + student * studentPrice;

  return totalPrice;
};

console.log(ticketPrice(3,0));