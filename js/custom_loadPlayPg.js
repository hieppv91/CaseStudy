const bonusPrice = new Array(200, 400, 600, 1000, 2000, 3000, 6000, 10000, 14000, 22000, 30000, 40000, 60000, 85000, 150000);

function loadPricesLevel() {
    let bonusBar = document.getElementById("bonus");
    bonusBar.innerHTML = "";
    for (let i = bonusPrice.length; i > 0; i--) {
        if (i % 5 != 0) {
            bonusBar.innerHTML += `
            <div class="col-md-3 text-right bonusPrices-right bonusPricesNo" id="Money${i}">${i}</div>
            <div class="col-md-9 bonusPrices-left priceValue" id="bonus">${bonusPrice[i-1]}</div> 
        `;
        } else {
            bonusBar.innerHTML += `
            <div class="col-md-3 text-right bonusPrices-right bonusPricesNo5 " id="Money${i}">${i}</div>
            <div class="col-md-9 text-left bonusPrices-left priceValue5" id="bonus">${bonusPrice[i-1]}</div> 
            `;
        }
    }
}

function startClock() {
    var time_left = 5;
    display = document.getElementById("circle-content");
    var downloadTimer = setInterval(function() {
        if (time_left <= 0) {
            clearInterval(downloadTimer);
            display.textContent = "-";
            showResults();
        } else {
            display.textContent = time_left;
        }
        time_left -= 1;
    }, 1000);
}

function showResults() {
    document.getElementById("backdrop").style.display = "block"
    document.getElementById("exampleModal").style.display = "block"
    document.getElementById("exampleModal").classList.add("show")
}

function closeModal() {
    document.getElementById("backdrop").style.display = "none"
    document.getElementById("exampleModal").style.display = "none"
    document.getElementById("exampleModal").classList.remove("show")
}

var modal = document.getElementById('exampleModal');
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal()
    }
}


function
loadPricesLevel();