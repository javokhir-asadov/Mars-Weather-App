
$(function () {
    const $main = $('main');
    const $form = $('form');
    const $input = $('input[type="text"]');
    
    $form.on('submit', handleSubmit);
    function handleSubmit(evt) {
        evt.preventDefault();
        const inputValue = $input.val();

const mars_api = "https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json"
getData();

function getData() {
    fetch(mars_api).then(res => res.json()) 
    .then(data => {
        let filtredData = data.soles.find(item=>item.terrestrial_date === inputValue);
         
        console.log(filtredData);
        console.log(inputValue);
      
        $('.high').html(`High:<span class="high_degree">${filtredData.max_temp} &deg;</span> 
       `);
       $('.low').html(`Low:<span class="low_degree">${filtredData.min_temp} &deg;</span>
          `);
          $('.solData').html(`${filtredData.sol}`);
          $('#sunrise').html(`${filtredData.sunrise}`);
          $('#sunset').html(`${filtredData.sunset}`);

          let myDate = new Date(`${inputValue}`),
           month = myDate.getMonth();
           date = myDate.getDate() + 1;
           day = myDate.getDay();
           
           let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
           let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
           
       $('.givenDate').html(months[month] + " | " + date);
       $('.month').html(`${days[day]}`)

    }), 
    (error) => {
            // failure callback function
            console.log(error);

        }  
}
    }
  

})
