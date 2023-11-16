class Cabin {
  constructor(name, price, bookings) {
    this.name = name;
    this.price = price;
    this.bookings = []
  }
}

class Client {
  constructor(name, guestNo, bookingDates, cabin) {
    this.name = name;
    this.guestNo = guestNo;
    this.bookingDates = [];
    this.cabin = cabin
  }
}
const mia = new Client('Mia', '2', ['2023-11-14', '2023-11-15'], 'cabin1')

// Creating instances of the Cabin class
const cabin1 = new Cabin('Cabin 1', 199 );
const cabin2 = new Cabin('Cabin 2', 199 );
const cabin3 = new Cabin('Cabin 3', 199 );
const cabin4 = new Cabin('Cabin 4', 199 );
const cabin5 = new Cabin('Cabin 5', 199 );
const cabin6 = new Cabin('Cabin 6', 199 );

const cabinArray = [cabin1, cabin2, cabin3, cabin4, cabin5]


cabin1.bookings = ['2023-11-13', '2023-11-17', '2023-11-18', '2023-11-19', '2023-11-20', '2023-11-24', '2023-11-25']
cabin2.bookings = ['2023-11-18', '2023-11-19', '2023-11-22', '2023-11-23', '2023-11-24', '2023-11-25']
cabin3.bookings = ['2023-11-13', '2023-11-17', '2023-11-19', '2023-11-20', '2023-11-24', '2023-11-25', '2023-11-26', '2023-11-30']
cabin4.bookings = ['2023-11-13', '2023-11-14', '2023-11-18', '2023-11-19', '2023-11-20', '2023-11-21', '2023-11-22', '2023-11-24', '2023-11-25']
cabin5.bookings = ['2023-11-13', '2023-11-15', '2023-11-17', '2023-11-20', '2023-11-22', '2023-11-23', '2023-11-24', '2023-11-25']


function cabinCard(cabinNum){
  return `
  <div class="cabin-card">
  <h2>Cabin ${cabinNum} (Pet Friendly)</h2>
  <div class="cabin-content">
  
<div class="cabin-carousel-left">
   
<section>
<div class="full-carousel-container">
<div class="carousel" data-carousel>
  <button class="carousel-button prev" data-carousel-button="prev"><img src="prev-button.png" alt=""></button>
  <button class="carousel-button next" data-carousel-button="next"><img src="next-button.png" alt=""></button>
  <ul data-slides>
    <li class="slide" data-active>
      <img src="img/cabin-1-1.webp" alt="">
    </li>
    <li class="slide">
      <img src="img/cabin-1-2.webp" alt="">
    </li>
    <li class="slide">
      <img src="img/cabin-1-3.jpeg" alt="">
    </li>
    <li class="slide">
      <img src="img/cabin-1-4.jpeg" alt="">
    </li>
    <li class="slide">
      <img src="img/cabin-1-5.webp" alt="">
    </li>
    <li class="slide">
      <img src="img/cabin-1-6.webp" alt="">
    </li>
  </ul>
  <div class="carousel-bottom">
    <p class="image-index">1 / 6</p>
    <?xml version="1.0" encoding="iso-8859-1"?>
    <svg fill="#fff" onclick="fullScreenCarousel()" height="13px" width="13px" version="1.1" id="Layer_1"
      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"
      xml:space="preserve">
      <g>
        <g>
          <path d="M0,0v512h512V0H0z M477.867,477.867H34.133V34.133h443.733V477.867z" />
        </g>
      </g>
      <g>
        <g>
          <polygon points="126.533,102.4 199.111,102.4 199.111,68.267 68.267,68.267 68.267,199.111 102.4,199.111 102.4,126.538 
198.422,222.558 222.556,198.423 		" />
        </g>
      </g>
      <g>
        <g>
          <polygon points="222.557,313.581 198.422,289.445 102.4,385.467 102.4,312.889 68.267,312.889 68.267,443.733 199.111,443.733 
199.111,409.6 126.538,409.6 		" />
        </g>
      </g>
      <g>
        <g>
          <polygon points="409.6,312.889 409.6,385.467 313.578,289.444 289.444,313.578 385.462,409.6 312.889,409.6 312.889,443.733 
443.733,443.733 443.733,312.889 		" />
        </g>
      </g>
      <g>
        <g>
          <polygon points="312.889,68.267 312.889,102.4 385.467,102.4 289.444,198.423 313.578,222.558 409.6,126.538 409.6,199.111 
443.733,199.111 443.733,68.267 		" />
        </g>
      </g>
    </svg>
  </div>
</div>
</div>
</section>

<section class="full-screen">
<div class="full-carousel-container">
<div class="carousel" data-carousel>
  <h1 class="close-x" onclick="closeCarousel()">&times;</h1>
  <button class="carousel-button prev" data-carousel-button="prev"><img src="prev-button.png" alt=""></button>
  <button class="carousel-button next" data-carousel-button="next"><img src="next-button.png" alt=""></button>
  <ul data-slides>
    <li class="slide" data-active>
      <img src="img/cabin-1-1.webp" alt="">
    </li>
    <li class="slide">
      <img src="img/cabin-1-2.webp" alt="">
    </li>
    <li class="slide">
      <img src="img/cabin-1-3.jpeg" alt="">
    </li>
    <li class="slide">
      <img src="img/cabin-1-4.jpeg" alt="">
    </li>
    <li class="slide">
      <img src="img/cabin-1-5.webp" alt="">
    </li>
    <li class="slide">
      <img src="img/cabin-1-6.webp" alt="">
    </li>
  </ul>
  <div class="carousel-bottom">
    <p class="image-index">1 / 6</p>
    <?xml version="1.0" encoding="iso-8859-1"?>
    <svg fill="#fff" onclick="fullScreenCarousel()" height="13px" width="13px" version="1.1" id="Layer_1"
      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"
      xml:space="preserve">
      <g>
        <g>
          <path d="M0,0v512h512V0H0z M477.867,477.867H34.133V34.133h443.733V477.867z" />
        </g>
      </g>
      <g>
        <g>
          <polygon points="126.533,102.4 199.111,102.4 199.111,68.267 68.267,68.267 68.267,199.111 102.4,199.111 102.4,126.538 
198.422,222.558 222.556,198.423 		" />
        </g>
      </g>
      <g>
        <g>
          <polygon points="222.557,313.581 198.422,289.445 102.4,385.467 102.4,312.889 68.267,312.889 68.267,443.733 199.111,443.733 
199.111,409.6 126.538,409.6 		" />
        </g>
      </g>
      <g>
        <g>
          <polygon points="409.6,312.889 409.6,385.467 313.578,289.444 289.444,313.578 385.462,409.6 312.889,409.6 312.889,443.733 
443.733,443.733 443.733,312.889 		" />
        </g>
      </g>
      <g>
        <g>
          <polygon points="312.889,68.267 312.889,102.4 385.467,102.4 289.444,198.423 313.578,222.558 409.6,126.538 409.6,199.111 
443.733,199.111 443.733,68.267 		" />
        </g>
      </g>
    </svg>
  </div>
</div>
</div>
</section>
  </div>
<div class="des-right">
    <p class="description">
      Come experience an all new tiny home, 45 minutes from Boise!! Brand new modern tiny homes that come complete
      with full bathroom, kitchen and two sleeping areas. Equipped with the latest in Smart Glass technology for
      privacy, firepits with cooktop for outdoor dining and minutes to the infamous Idaho City Hot Springs resorts
      and tons of other outdoor activities!
    </p>
  </div>
  </div>
  <div class="bottom-rates">
    <p>Best Available Rate</p>
    <p>$199 / NIGHT</p>
    <button>Add to reservation</button>
  </div>
</div>`
}


