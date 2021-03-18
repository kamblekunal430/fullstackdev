window.onload = function () {
  let num = document.getElementById("number");
  let list = document.getElementById("list");
  let print = document.getElementById("print");

  print.onclick = function () {
    num = parseInt(num.value);

    let listHtml = "";

    for (let i = 1; i <= num; i++) {
      listHtml += "<li>" + i + "</li>";
    }

    list.innerHTML = listHtml;
  };
};
