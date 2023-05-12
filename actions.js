const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const yearData = document.getElementById("yearData");
const monthData = document.getElementById("monthData");
const dayData = document.getElementById("dayData");
const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  // get the input values
  const day = dayInput.value;
  const month = monthInput.value;
  const year = yearInput.value;

  // validate the day, month, and year inputs
  const validDay = day > 0 && day <= 31;
  const validMonth = month > 0 && month <= 12;
  const validYear = year > 0 && year <= new Date().getFullYear();

  if (!validDay) {
    // display error message for day input
    document.getElementById("dayError").style.display = "block";
    dayInput.classList.add("invalid");
  } else {
    document.getElementById("dayError").style.display = "none";
    dayInput.classList.remove("invalid");
  }

  if (!validMonth) {
    // display error message for month input
    document.getElementById("monthError").style.display = "block";
    monthInput.classList.add("invalid");
  } else {
    document.getElementById("monthError").style.display = "none";
    monthInput.classList.remove("invalid");
  }

  if (!validYear) {
    // display error message for year input
    document.getElementById("yearError").style.display = "block";
    yearInput.classList.add("invalid");
  } else {
    document.getElementById("yearError").style.display = "none";
    yearInput.classList.remove("invalid");
  }

  if (validDay && validMonth && validYear) {
    // calculate the age
    const birthDate = new Date(`${month}/${day}/${year}`);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    const months = (today.getMonth() + 12 - birthDate.getMonth()) % 12;
    const days = today.getDate() - birthDate.getDate();

    // display the age in the output section
    yearData.textContent = age;
    monthData.textContent = months;
    dayData.textContent = days;
  }
});
