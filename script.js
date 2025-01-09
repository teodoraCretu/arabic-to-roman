const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const numberPairs = [
  {
    romanNum: "I",
    arabicNum: 1
  },
  {
    romanNum: "IV",
    arabicNum: 4
  },
  {
    romanNum: "V",
    arabicNum: 5
  },
  {
    romanNum: "IX",
    arabicNum: 9
  },
  {
    romanNum: "X",
    arabicNum: 10
  },
  {
    romanNum: "XL",
    arabicNum: 40
  },
  {
    romanNum: "L",
    arabicNum: 50
  },
  {
    romanNum: "XC",
    arabicNum: 90
  },
  {
    romanNum: "C",
    arabicNum: 100
  },
  {
    romanNum: "CD",
    arabicNum: 400
  },
  {
    romanNum: "D",
    arabicNum: 500
  },
  {
    romanNum: "CM",
    arabicNum: 900
  },
  {
    romanNum: "M",
    arabicNum: 1000
  }];
  const romanResult = [];

  const arabicToRoman = (input) => {

      if(input > 0){
      let n = numberPairs.length - 1;
      while(numberPairs[n].arabicNum > input)
      n--;
      input = input - numberPairs[n].arabicNum;
      romanResult.push(numberPairs[n].romanNum)
      arabicToRoman(input)
      }
      console.log(romanResult);
      return romanResult.join("");
    }
    
  

const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputInt)) {
    result.textContent = "Please enter a valid number";
    return;
  }else if(inputInt < 1){
     result.textContent = "Please enter a number greater than or equal to 1";
    return;
  }else if(inputInt >= 4000){
     result.textContent = "Please enter a number less than or equal to 3999";
    return;
  }

  result.textContent = arabicToRoman(inputInt);
  numberInput.value = "";
  romanResult.length = 0;
};

convertBtn.addEventListener("click", checkUserInput);