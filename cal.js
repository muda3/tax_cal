function cal() {

    const zeibetu = document.getElementById("okane").value;
    const tax = document.getElementById("tax").value;
    const calc = zeibetu * tax;
    document.getElementById("kekka").value = calc;
    const zeibetsu = document.getElementById("okane").value;
    const calc = zeibetsu * tax;
    document.getElementById("kekka").value = parseInt(calc);
}