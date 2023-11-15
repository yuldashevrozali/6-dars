import {data} from './data.js';
const tbody = document.getElementById('tbody');
const cars = document.getElementById('cars');
const filter = document.getElementById('filter-status');
const year = document.getElementById('year');
const price = document.getElementById('price');
const color = document.getElementById('color');

function createRows(data) {
     let lists = ''
     tbody.innerHTML = '';
     data.forEach(el => {
          let {id, name = 'Mavjud emas', year = '', price = '', color = 'Mavjud emas', status = ''} = el;
          if (status == 'active') {
               status = 'Sotuvda mavjud'
          };

          if (status == 'inactive') {
               status = 'Sotuvda mavjud emas'
          };

          let tr = `
               <tr>
                    <td>${id}</td>
                    <td>${name}</td>
                    <td>${year}</td>
                    <td>${color}</td>
                    <td>${price}</td>
                    <td>${status}</td>
               </tr>
          `;
          lists += tr
     })

     tbody.innerHTML += lists;
}

filter.addEventListener('change', function() {
     let selectedStatus = this.value;
     let cars = data.filter(el => {
          return el.status == selectedStatus;
     })
     createRows(cars)


})

// 1. narx oraligi
// 2. yillar boyicha
// 3. rangi


cars.addEventListener('change', function() {
     let selectedCar = this.value; 
     let selectedCars = data.filter(el => {
          return el.name == selectedCar;
     });
     createRows(selectedCars)
     
})


year.addEventListener('change', function() {
     let selectedYear = this.value; 
     let selectedYears = data.filter(el => {
          return el.year == selectedYear;
     });
     createRows(selectedYears)
     
})

price.addEventListener('change', function() {
     let selectedPrice = this.value; 
     let selectedPrices = data.filter(el => {
          return el.price == selectedPrice;
     });
     createRows(selectedPrices)
     
})

color.addEventListener('change', function() {
     let selectedColor = this.value; 
     let selectedColors = data.filter(el => {
          return el.color == selectedColor;
     });
     createRows(selectedColors)
     
});

window.onload = function(params) {
     if (data.length) {
          createRows(data)
     }
}