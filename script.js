// Make background color lighter when scrolling down page

window.addEventListener('scroll', function() {
  var header = document.querySelector('body');
  if (window.scrollY > 100) { 
    header.style.backgroundColor = '#333';
  } else {
    header.style.backgroundColor = '#1D1D1D'; 
  }
});


//  make images appear while scrolling down page

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// populate guest number dropdown menu

const select = document.querySelectorAll(".numberDropdown");

select.forEach((x) => {
// Loop to generate options from 1 to 26
for (let i = 1; i <= 26; i++) {
    // Create an option element
    const option = document.createElement("option");
    // Set the value and text of the option
    option.value = i;
    option.text = i;
    // Append the option to the select element
    x.appendChild(option);
}
})



// finish code to make special rates in booking page appear

const specialRates = document.querySelector('.special-rates')

specialRates.addEventListener('click', () => {
  alert('testy')
})



// set date inputs to only allow future dates
// const today = new Date().toISOString().split('T')[0];

// const startDateInput = document.getElementById("dateInput")
// const endDateInput = document.getElementById("endDate")
// const chosenStartDate = document.getElementById("start-date")
// const chosenEndDate = document.getElementById("end-date")

// const allDates = [startDateInput, endDateInput, chosenStartDate, chosenEndDate]

// allDates.forEach((date) => {
//   date.min = today
// })

// startDateInput.addEventListener('change', () => {
//   const selectedDate = startDateInput.value;

//   let parts = selectedDate.split('-');
//   parts[2] = parseInt(parts[2]) + 1
//   let increasedDate = parts.join('-')
//   endDateInput.min = increasedDate;
// })


//  get currently available cabins

function searchBtn() {
  const searchPage = document.querySelector('.check-availability')
  searchPage.style.display = 'none'

  const resultsPage = document.querySelector('.results')
  resultsPage.style.display = 'flex'
  
  chosenStartDate.value = startDateInput.value
  chosenEndDate.value = endDateInput.value

  addCabinToContainer();
}

const leftContainer = document.querySelector('.left-container')

function addCabinToContainer(){
  const chosenDateRange = getDateRange(chosenStartDate.value, chosenEndDate.value)
  
  if (!chosenDateRange.some(date => cabin1.bookings.includes(date))) {
    leftContainer.innerHTML += cabinCard(1);
  }  
  if (!chosenDateRange.some(date => cabin2.bookings.includes(date))) {
    leftContainer.innerHTML += cabinCard(2);
  }
  if (!chosenDateRange.some(date => cabin3.bookings.includes(date))) {
    leftContainer.innerHTML += cabinCard(3);
  }
  if (!chosenDateRange.some(date => cabin4.bookings.includes(date))) {
    leftContainer.innerHTML += cabinCard(4);
  }
  if (!chosenDateRange.some(date => cabin5.bookings.includes(date))) {
    leftContainer.innerHTML += cabinCard(5);
  }
        
}

// get date range

function getDateRange(startDate, endDate) {
  const dateRange = [];
  let currentDate = new Date(startDate);

  while (currentDate <= new Date(endDate)) {
    dateRange.push(currentDate.toISOString().split('T')[0]);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dateRange;
}


// add reservation 
function replaceHyphensWithSlashes(inputString) {
  return inputString.replace(/-/g, '/');
}
console.log()


function addReservation(cabinNum) {
  const feeContainer = document.querySelector('.cabin-fees')

  const startDate = replaceHyphensWithSlashes(startDateInput.value)
  const endDate = replaceHyphensWithSlashes(endDateInput.value)

  const numOfNights = getDateRange(startDateInput.value, endDateInput.value).length

  feeContainer.innerHTML += `
  <p>Cabin ${cabinNum}</p>
  <p class="thin-text">${startDate} - ${endDate}</p>
  <p class="thin-text">Best Available Rate</p>
  <div class="prices">
  <div class="night-resort">
  <p class="thin-text">${numOfNights - 1} night</p>
  <p class="thin-text">Resort Fee</p>
</div>
  <div class="price-dollar">
    <p class="thin-text">$${cabin1.price * (numOfNights - 1)}.00</p>
    <p class="thin-text">$25.00</p>
  </div>
</div>
`
  

  const finalPrice = document.getElementById('final-price')
  const taxes = (((numOfNights - 1) * cabin1.price) + 25) * .09
  const totalPrice = ((numOfNights - 1) * cabin1.price) + 25 + taxes
  finalPrice.textContent = '$' + totalPrice

  document.getElementById('tax').textContent = `$${taxes}`
  document.querySelector('.tax-price').style.visibility = 'visible'

  document.getElementById('deposit').textContent = '$' + totalPrice
}




function showTax() {
  const taxPrice = document.querySelector('.tax-price');
  const taxArrow = document.querySelector('.arrow-svg');

  const isTaxVisible = taxPrice.style.visibility === 'visible';

  if (isTaxVisible) {
    taxPrice.style.visibility = 'hidden';
    taxArrow.style.transform = 'scaleY(-1)';
  } else {
    taxPrice.style.visibility = 'visible';
    taxArrow.style.transform = 'scaleY(1)';
  }
}



// Carousel buttons
const nextButton = document.querySelector('.next')
const prevButton = document.querySelector('.prev')

const imageDescription = document.querySelector('.image-index')
const popIcon = document.querySelector('.cabin-image-card svg')
let currentImageIndex = 0;

function nextImage(x, size) {
  const imageArray = document.querySelectorAll(`.${size}-images`)

  if(x > imageArray.length - 2){
    imageArray[0].classList.remove('hidden-pic')
    imageArray[imageArray.length-1].classList.add('hidden-pic')

    imageDescription.textContent = '1 / 6'
    currentImageIndex = 0
  } else {
  const nextImage = imageArray[x + 1]
  nextImage.classList.remove('hidden-pic')
  imageArray[x].classList.add('hidden-pic')

  imageDescription.textContent = `${x + 2} / 6`
  currentImageIndex = x + 1
  }
}

function prevImage(x, size) {
  const imageArray = document.querySelectorAll(`.${size}-images`)

  if(x === 0){
    imageArray[imageArray.length - 1].classList.remove('hidden-pic')
    imageArray[x].classList.add('hidden-pic')

    imageDescription.textContent = '6 / 6'
    currentImageIndex = imageArray.length - 1
  } else {
  const prevImage = imageArray[x - 1]
  prevImage.classList.remove('hidden-pic')
  imageArray[x].classList.add('hidden-pic')

  imageDescription.textContent = `${x} / 6`
  currentImageIndex = x - 1
  }
}

nextButton.addEventListener('click', () => nextImage(currentImageIndex, 'cabin'))
prevButton.addEventListener('click', () => prevImage(currentImageIndex, 'cabin'))
popIcon.addEventListener('click', () => fullScreenCarousel(currentImageIndex))


function fullScreenCarousel(index) {
  document.querySelector('.full-screen-carousel').style.display = 'block'
  const imageArray = document.querySelectorAll('.full-cabin-images')

  imageArray.forEach((image) => {
    image.classList.add('hidden-pic')
  })
   imageArray[index].classList.remove('hidden-pic')
}



function closeScreenCarousel(index) {
  document.querySelector('.full-screen-carousel').style.display = 'none'

  const imageArray = document.querySelectorAll('.cabin-images')

  imageArray.forEach((image) => {
    image.classList.add('hidden-pic')
  })
   imageArray[index].classList.remove('hidden-pic')
}


const nextButtonFull = document.getElementById('next-full')
const prevButtonFull = document.getElementById('prev-full')
nextButtonFull.addEventListener('click', () => nextImage(currentImageIndex, 'full-cabin'))
prevButtonFull.addEventListener('click', () => prevImage(currentImageIndex, 'full-cabin'))
document.getElementById('close-full-screen').addEventListener('click', () => closeScreenCarousel(currentImageIndex))





















