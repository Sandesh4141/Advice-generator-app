function handleQuote() {
  let advice_text = document.getElementById("advice");
  let advice_num = document.getElementById("adviceNum");
  let dice = document.querySelector(".dice_wrapper");
  dice.addEventListener('click', function(){
    axios
    .get("https://api.adviceslip.com/advice")
    .then(function (res) {
      // console.log(res.data.slip.advice);
      // console.log(res.data.slip.id);
      advice_num.innerHTML = res.data.slip.id;
      advice_text.innerHTML = `“${res.data.slip.advice}”`;
    })
    .catch(function (err) {
      console.log(err);
      alert("Cannot Get Quote For U Now");
    })
    .then(function () {
      console.log("Request Success");
    });
  })
  
}
// setInterval(handleQuote, 8000);
handleQuote();