const numberInput = document.getElementById("numberInput");
const numberResult = document.getElementById("numberResult");
const arrayInput = document.getElementById("arrayInput");
const dividendInput = document.getElementById("dividendInput");
const divisorInput = document.getElementById("divisorInput");
const divisionResult = document.getElementById("divisionResult");
const errorResult = document.getElementById("errorResult");
const mathResult = document.getElementById("mathResult");

function validateNumber(value) {
    if (value.trim() === "") {
        throw new Error("Iltimos, son kiriting");
    }

    const number = Number(value);

    if (!Number.isFinite(number)) {
        throw new Error("Kiritilgan qiymat haqiqiy son bo'lishi kerak");
    }

    return number;
}

function checkNumber() {
    try {
        const number = validateNumber(numberInput.value);

        if (number > 0) {
            showMessage("numberResult", "musbat");
        } else if (number < 0) {
            showMessage("numberResult", "manfiy");
        } else {
            showMessage("numberResult", "nol");
        }
    } catch (error) {
        showMessage("numberResult", error.message);
    }
}

function showMessage(elementId, message) {
    const element = document.getElementById(elementId);

    if (!element) {
        throw new Error("Natija elementi topilmadi");
    }

    element.textContent = message;
}

function clearResults() {
    numberInput.value = "";
    arrayInput.value = "";

    [
        "numberResult",
        "mathResult",
        "arrayResult",
        "randomResult",
        "divisionResult",
        "errorResult"
    ].forEach(elementId => showMessage(elementId, ""));
}

function divideNumbers(a, b) {
    const dividend = Number(a);
    const divisor = Number(b);

    if (String(a).trim() === "" || String(b).trim() === "" ||
        !Number.isFinite(dividend) || !Number.isFinite(divisor)) {
        throw new Error("Ikkala qiymat ham son bo'lishi kerak");
    }

    if (divisor === 0) {
        throw new Error("Nolga bo'lish mumkin emas");
    }

    return dividend / divisor;
}

function runDivision() {
    try {
        divisionResult.textContent = divideNumbers(
            dividendInput.value,
            divisorInput.value
        );
    } catch (error) {
        divisionResult.textContent = error.message;
    } finally {
        errorResult.textContent = "Bo'lish amali tekshirildi.";
    }
}

function demonstrateRuntimeError() {
    try {
        const value = null;
        value.toString();
    } catch (error) {
        errorResult.textContent = `${error.name}: ${error.message}`;
    }
}

function demonstrateLogicalError() {
    const numbers = [4, 8, 12];
    const sum = numbers.reduce((total, number) => total + number, 0);
    const incorrectAverage = sum / 2;
    const correctAverage = sum / numbers.length;

    mathResult.textContent =
        `Noto'g'ri o'rtacha: ${incorrectAverage}; ` +
        `Tuzatilgan o'rtacha: ${correctAverage}`;
}

function demonstrateErrors() {
    demonstrateRuntimeError();
    demonstrateLogicalError();
}