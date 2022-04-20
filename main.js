var section_one = document.getElementById("section_one");
var section_two = document.getElementById("section_two");
var section_three = document.getElementById("section_three");
var section_four = document.getElementById("section_four");
var section_five = document.getElementById("section_five");



var tab_one_btn = document.getElementById("tab_one");
var tab_two_btn = document.getElementById("tab_two");
var tab_three_btn = document.getElementById("tab_three");
var tab_four_btn = document.getElementById("tab_four");
var tab_five_btn = document.getElementById("tab_five");

tab_one_btn.addEventListener("click",function () {
    section_one.style.display = "flex";
    section_two.style.display = "none";
    section_three.style.display = "none";
    section_four.style.display = "none";
    section_five.style.display = "none";

    tab_one_btn.classList.add("border-orange-600");
    tab_two_btn.classList.remove("border-orange-600");
    tab_three_btn.classList.remove("border-orange-600");
    tab_four_btn.classList.remove("border-orange-600");
    tab_five_btn.classList.remove("border-orange-600");
});

tab_two_btn.addEventListener("click",function () {
    section_one.style.display = "none";
    section_two.style.display = "flex";
    section_three.style.display = "none";
    section_four.style.display = "none";
    section_five.style.display = "none";

    
    tab_one_btn.classList.remove("border-orange-600");
    tab_two_btn.classList.add("border-orange-600");
    tab_three_btn.classList.remove("border-orange-600");
    tab_four_btn.classList.remove("border-orange-600");
    tab_five_btn.classList.remove("border-orange-600");
});

tab_three_btn.addEventListener("click",function () {
    section_one.style.display = "none";
    section_two.style.display = "none";
    section_three.style.display = "flex";
    section_four.style.display = "none";
    section_five.style.display = "none";

    tab_one_btn.classList.remove("border-orange-600");
    tab_two_btn.classList.remove("border-orange-600");
    tab_three_btn.classList.add("border-orange-600");
    tab_four_btn.classList.remove("border-orange-600");
    tab_five_btn.classList.remove("border-orange-600");
});

tab_four_btn.addEventListener("click",function () {
    section_one.style.display = "none";
    section_two.style.display = "none";
    section_three.style.display = "none";
    section_four.style.display = "flex";
    section_five.style.display = "none";

    tab_one_btn.classList.remove("border-orange-600");
    tab_two_btn.classList.remove("border-orange-600");
    tab_three_btn.classList.remove("border-orange-600");
    tab_four_btn.classList.add("border-orange-600");
    tab_five_btn.classList.remove("border-orange-600");
});

tab_five_btn.addEventListener("click",function () {
    section_one.style.display = "none";
    section_two.style.display = "none";
    section_three.style.display = "none";
    section_four.style.display = "none";
    section_five.style.display = "flex";

    tab_one_btn.classList.remove("border-orange-600");
    tab_two_btn.classList.remove("border-orange-600");
    tab_three_btn.classList.remove("border-orange-600");
    tab_four_btn.classList.remove("border-orange-600");
    tab_five_btn.classList.add("border-orange-600");
});