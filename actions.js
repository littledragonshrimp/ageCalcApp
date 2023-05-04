// output elements
const yearData = document.querySelector('#yearData');
const monthData = document.querySelector('#monthData');
const dayData = document.querySelector('#dayData');
const submit_btn = document.querySelector('.submit-btn')

//input elements

const yearIn = document.querySelector('#year');
const monthIn = document.querySelector('#month');
const dayIn = document.querySelector('#day');

const yearError = document.querySelector('#dayError')
const monthError = document.querySelector('#dayError')
const dayError = document.querySelector('#dayError')

const btn = document.querySelector('.submit-btn').onclick = function(){
   
}

dayIn.addEventListener("input", (e) => {
    if (+dayIn.value > 31) {
        dayIn.textContent = "Must be a valid date";
        isValid = false;
    } else {
        isValid = true;
    }
})
//
dayData.addEventListener("input", (e) => {
    // document.querySelector("#dayData" = )
})

