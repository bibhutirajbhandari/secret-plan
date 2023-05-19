// const paras = document.getElementById("para").innerText;
// console.log(paras);

const paras = document.querySelectorAll("p").entries;
for (let [key, value] of paras) {
  console.log(value);
}
