const numberInput = document.getElementById("numberInput");
const numberResult = document.getElementById("numberResult");
const dividendInput = document.getElementById("dividendInput");
const divisorInput = document.getElementById("divisorInput");
const divisionResult = document.getElementById("divisionResult");
const errorResult = document.getElementById("errorResult");
const mathResult = document.getElementById("mathResult");

// SyntaxError misoli faqat izoh sifatida: const value = (1 + 2;

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
            numberResult.textContent = "musbat";
        } else if (number < 0) {
            numberResult.textContent = "manfiy";
        } else {
            numberResult.textContent = "nol";
        }
    } catch (error) {
        numberResult.textContent = error.message;
    }
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