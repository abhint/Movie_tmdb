document.getElementById("mybt").addEventListener("click", () => {

    var data1  = document.getElementById("sum").value;
    var data2 = document.getElementById("sum2").value;
    console.log(data1 + data2);
    var sum = data1 + data2;
    let result = document.querySelector('.result');
    result.textContent = sum;


});