
// Task1
let imageChange = () => {
    let img = document.getElementById("myImg");

    if (img.src.includes("image1.jpg")) {
        img.src = "images/image2.jpg";
    } else {
        img.src = "images/image1.jpg";
    }
}







// Task2
let items = document.querySelectorAll("li");
items.forEach(function (item) {
item.onclick = function () {
        items.forEach(function (li) {
            li.style.color = "black";
        });

        item.style.color = "blue"
    };

});
