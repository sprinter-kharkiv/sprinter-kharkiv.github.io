// controls
let withoutChargeInput = document.getElementById('without_charge');
let withChargeInput = document.getElementById('with_charge');

let engineSlider = document.getElementById('slider_engine');
let engineText = document.getElementById('text_engine');

let ageSelect = document.getElementById('age');
let fuelSelect = document.getElementById('fuel');


// default values
let calculateType = 'withTax';
let basePrise = 2000;
let cargedPrise = 0;
let engineV = 2000;
let age = 10;
let fuelType = 'g';

document.addEventListener('DOMContentLoaded', function () {

    withoutChargeInput.value = basePrise;
    withChargeInput.value = cargedPrise;

    engineSlider.value = engineV / 1000;
    engineText.innerHTML = engineV / 1000;

    ageSelect.value = age;
    fuelSelect.value = fuelType;

    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});

    addListeners();
    calculatePrice();

});

function addListeners() {
    engineSlider.addEventListener('change', function (e) {
        engineText.innerHTML = e.target.value;
        engineV = e.target.value * 1000;
        calculatePrice();
    });

    withChargeInput.addEventListener('change', function (e) {
        withChargeCallback(e);
    });

    withChargeInput.addEventListener('input', function (e) {
        withChargeCallback(e);
    });

    withoutChargeInput.addEventListener('change', function (e) {
        withoutChargeCallback(e);
    });

    withoutChargeInput.addEventListener('input', function (e) {
        withoutChargeCallback(e);
    });

    function withChargeCallback(e) {
        if (cargedPrise === +e.target.value) {
            return false;
        }
        cargedPrise = +e.target.value;
        calculatePrice();
    }

    function withoutChargeCallback(e) {
        if (basePrise === +e.target.value) {
            return false;
        }
        basePrise = +e.target.value;
        calculatePrice();
    }

    ageSelect.addEventListener('change', function (e) {
        age = +e.target.value;
        calculatePrice();
    });

    fuelSelect.addEventListener('change', function (e) {
        fuelType = e.target.value;
        calculatePrice();
    });
}

var radioButtons = document.querySelectorAll('[name="group1"]');
radioButtons.forEach(inp => {
    inp.addEventListener('change', function (e) {

        if (e.target.value === 'withoutTax') {
            calculateType = 'withTax';
            withChargeInput.readOnly = true;
            withoutChargeInput.readOnly = false;
        }
        if (e.target.value === 'withTax') {
            calculateType = 'withoutTax';
            withChargeInput.readOnly = false;
            withoutChargeInput.readOnly = true;
        }

        calculatePrice();
    });
});


function calculatePrice() {
    var obj = {
        calculateType,
        basePrise,
        cargedPrise,
        engineV,
        age,
        fuelType,
    };

    if (calculateType === 'withTax') {
        cargedPrise = calcWithTax();
        withChargeInput.value = cargedPrise;
    }
    if (calculateType === 'withoutTax') {
        basePrise = calcWithoutTax();
        withoutChargeInput.value = basePrise;
    }
}

function calculateTax() {
    return taxBase() * kEng() * kAge();
}

function taxBase() {
    let base;
    if (fuelType === 'g') {
        base = engineV <= 3000 ? 50 : 100;
        return base;
    }
    if (fuelType === 'd') {
        base = engineV <= 3500 ? 75 : 150;
        return base;
    }
}

function kEng() {
    return engineV / 1000;
}

function kAge() {
    return age > 15 ? 15 : age;
}


function calcWithTax() {
    let calculatedPriseBase = basePrise + basePrise * .1 + calculateTax();
    return Math.round((calculatedPriseBase + calculatedPriseBase * .2) * 100) / 100;
}

function calcWithoutTax() {
    return Math.round((cargedPrise / 1.2 - calculateTax()) * 100 / 1.1) / 100;
}
