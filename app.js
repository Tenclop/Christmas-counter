const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

let futureDate = new Date(tempYear, 11, 25);
console.log(futureDate);

if (tempMonth === 11 && tempDay > 25) {
  futureDate.setFullYear(futureDate.getFullYear() + 1);
}
const futureTime = futureDate.getTime();
let getRemainingTime = () => {
  const today = new Date().getTime();
  const t = futureTime - today;

  //1s = 1000ms
  //1m = 60s
  //1hr = 60min
  //1d =24hr

  //values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = t / oneDay;
  days = Math.floor(days);

  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  //set values array;
  const values = [days, hours, minutes, seconds];

  let format = (item) => {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  };

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
};
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
