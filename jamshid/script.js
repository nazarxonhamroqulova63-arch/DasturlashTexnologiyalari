const numberInput = document.getElementById("numberInput");
const numberResult = document.getElementById("numberResult");

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