let myform = document.getElementById("myform");
let inptask = document.getElementById("task");
let priority = document.getElementById("priority");
let alldata = [];
let tbody = document.getElementById("tbody");

myform.addEventListener("submit", function (e) {
  e.preventDefault();

  let data = {};
  data.input1 = inptask.value;
  data.input2 = priority.value;
  alldata.push(data);

  tbody.innerHTML = null;

  alldata.forEach((e) => {
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");

    td1.innerText = e.input1;
    td2.innerText = e.input2;
    td3.innerText = "Favourite";

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    tbody.appendChild(row);
  });
  inptask.value = "";
  priority.value = "";
});
