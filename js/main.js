var userName = prompt("Ismingizni kiriting...")
var inputSumma = prompt("Sizda necha so'm bor? ");


var oneDollar = 10650.34
var oneEuro = 11650.03

var wayCost = 500; // dollar
var hotelCost = 250; // dollar
var museumCost = 120 // euro

var allCost = ((wayCost + hotelCost) * oneDollar) + museumCost * oneEuro;

if(!isNaN(inputSumma)){
  if(inputSumma >= allCost){
    alert("Oq yo'l, sayohat uchun pulingiz yetadi.")
  }
  else{
    alert(userName + ", pulingiz sayohat uchun yetmaydi. \nSayohat uchun kerakli pul miqdori: \t " + allCost + " so'm \nSizda esa \t " + inputSumma + " so'm pul bor xolos")
  }
}
else{
  alert("Iltimos, raqamli ma'lumot kiriting!")
}d