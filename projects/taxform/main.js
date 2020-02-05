// controls
let withoutChargeInput = document.getElementById('without_charge');
let withChargeInput = document.getElementById('with_charge');

let engineSlider = document.getElementById('slider_engine');
let engineText = document.getElementById('text_engine');

let ageSelect = document.getElementById('age');
let fuelSelect = document.getElementById('fuel');

let pfTax = document.getElementById('pf_tax');

let additionalPaymentCheckbox = document.getElementById('additional_payment');
let additionalPaymentInput = document.getElementById('additional_payment_input');


// default values
let calculateType = 'withTax';
let basePrise = 2000;
let cargedPrise = 0;
let engineV = 2000;
let age = 10;
let fuelType = 'g';
let pfTaxStatus = true;
let additionalPaymentStatus = true;
let additionalPayment = 150;

document.addEventListener('DOMContentLoaded', function () {

    withoutChargeInput.value = basePrise;
    withChargeInput.value = cargedPrise;
    additionalPaymentInput.value = additionalPayment;

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

    additionalPaymentInput.addEventListener('change', function (e) {
        additionalChangesCallback(e);
    });

    additionalPaymentInput.addEventListener('input', function (e) {
        additionalChangesCallback(e);
    });

    pfTax.addEventListener('change', function (e) {
        pfTaxStatus = e.target.checked;
        calculatePrice();
    });

    additionalPaymentCheckbox.addEventListener('change', function (e) {
        additionalPaymentStatus = e.target.checked;
        console.log(additionalPaymentStatus);
        calculatePrice();
    });

    function additionalChangesCallback(e) {
        additionalPayment = +e.target.value;
        calculatePrice();
    }

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
    var options = {
        calculateType,
        basePrise,
        cargedPrise,
        engineV,
        age,
        fuelType,
        pfTaxStatus,
        additionalPaymentStatus
    };

    if (calculateType === 'withTax') {
        cargedPrise = calcWithTax(options);
        withChargeInput.value = cargedPrise;
    }
    if (calculateType === 'withoutTax') {
        basePrise = calcWithoutTax(options);
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


function calcWithTax(options) {
    let calculatedPriseBase = basePrise + basePrise * .1 + calculateTax();
    let calculatedPrise = calculatedPriseBase + calculatedPriseBase * .2;

    if (options.pfTaxStatus) {
        calculatedPrise *= 1.05;
    }

    if (options.additionalPaymentStatus && additionalPayment) {
        calculatedPrise += additionalPayment;
    }

    return  Math.round(calculatedPrise * 100) / 100;
}

function calcWithoutTax(options) {
    let cargedPriseLoc = cargedPrise;
    if (options.additionalPaymentStatus && additionalPayment) {
        cargedPriseLoc -= additionalPayment;
    }
    cargedPriseLoc = options.pfTaxStatus ? cargedPriseLoc * 100 / 105 : cargedPriseLoc;
    return Math.round((cargedPrise / 1.2 - calculateTax()) * 100 / 1.1) / 100;
}
