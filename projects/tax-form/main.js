// controls
let withoutChargeInput = $('#without_charge');
let withChargeInput = $('#with_charge');

let engineSlider = $('#slider_engine');
let engineText = $('#text_engine')

let ageSelect = $('#age');
let fuelSelect = $('#fuel');
let calcButton = $('#btn');

// default values
let calculateType = 'withTax';
let basePrise = 2000;
let cargedPrise = 0;
let engineV = 2000;
let age = 10;
let fuelType = 'g';


$(document).ready(function() {

    withoutChargeInput.attr('value', basePrise);
    withChargeInput.attr('value', cargedPrise);

    engineSlider.attr('value', engineV / 1000);
    engineText.text(engineV / 1000);

    ageSelect.val(age);
    fuelSelect.val(fuelType);

    $('select').formSelect();
    addListeners();
    calculatePrice();
});

function addListeners() {
    engineSlider.on('change', function (e) {
        engineText.text(e.target.value);
        engineV = e.target.value * 1000;

        calculatePrice();
        return;
    });

    withChargeInput.on('change', function (e) {
        cargedPrise = +e.target.value;
        calculatePrice();
        return;
    });

    withoutChargeInput.on('change', function (e) {
        basePrise = +e.target.value;
        calculatePrice();
        return;
    });

    ageSelect.on('change', function (e) {
        age = +e.target.value;
        calculatePrice();
        return;
    });

    fuelSelect.on('change', function (e) {
        fuelType = e.target.value;
        calculatePrice();
        return;
    });
}

calcButton.on('click', function() {
    // calculatePrice();
    return;
})


$('[name="group1"]').on('change', function (e) {

    if(e.target.value === 'withoutTax') {
        calculateType = 'withTax';
        withChargeInput.attr('readonly', true);
        withoutChargeInput.attr('readonly', false);

    };
    if(e.target.value === 'withTax') {
        calculateType = 'withoutTax';
        withChargeInput.attr('readonly', false);
        withoutChargeInput.attr('readonly', true);
    };

    calculatePrice();
    return;
})

function calculatePrice() {
    var obj = {
        calculateType,
        basePrise,
        cargedPrise,
        engineV,
        age,
        fuelType,
    }

    if (calculateType === 'withTax') {
        cargedPrise = calcWithTax();
        withChargeInput.attr('value', cargedPrise);
    } else {
        basePrise = calcWithoutTax();
        withoutChargeInput.attr('value', basePrise);
    }
    console.log('calculateOptions=', obj);
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
    return calculatedPriseBase + calculatedPriseBase * .2;
}

function calcWithoutTax() {
    return Math.round((cargedPrise / 1.2 - calculateTax()) / 1.1);
}
