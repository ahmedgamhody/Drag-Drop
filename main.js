let btn = document.getElementById("btn");
let input = document.getElementById("inp");
let boxs = document.querySelectorAll(".list .box");
let drag = null;
btn.onclick = function () {
  if (input.value != "") {
    boxs[0].innerHTML += `
        <p id="item" draggable="true">${input.value}</p>
        `;
    input.value = "";
  }
  draggableFun();
};

function draggableFun() {
  let items = document.querySelectorAll("#item");
  items.forEach((item) => {
    item.addEventListener("dragstart", function () {
      this.style.opacity = "0.6";
      drag = item;
    });

    item.addEventListener("dragend", function () {
      this.style.opacity = "1";
      drag = null;
    });

    boxs.forEach((box) => {
      box.addEventListener("dragover", (e) => {
        e.preventDefault();
        box.style.backgroundColor = "#090";
        box.style.color = "#FFF";
      });
      box.addEventListener("dragleave", () => {
        box.style.backgroundColor = "#FFF";
        box.style.color = "#000";
      });
      box.addEventListener("drop", function () {
        box.append(drag);
      });
    });
  });
}
