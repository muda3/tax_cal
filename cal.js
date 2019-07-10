function cal() {
    const zeibetu = document.getElementById("okane").value;
    const tax = document.getElementById("tax").value;
    const calc = zeibetu * tax;
    document.getElementById("kekka").value = calc;
}