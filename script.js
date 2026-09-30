const monthlyBtn = document.getElementById("monthlyBtn");
const yearlyBtn = document.getElementById("yearlyBtn");
const prices = document.querySelectorAll(".price");

monthlyBtn.addEventListener("click", function () {
    prices.forEach(function (price) {
        price.textContent = "$" + price.dataset.monthly;
    });
});

yearlyBtn.addEventListener("click", function () {
    prices.forEach(function (price) {
        price.textContent = "$" + price.dataset.yearly;
    });
});