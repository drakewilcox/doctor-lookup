import $ from 'jquery';
$;
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorSearch } from './../src/doctor.js';

$(document).ready(function() {

  $('#searchDoctor').submit(function(event) {
    event.preventDefault(); 

    const firstName = $("#firstName").val();
    const lastName = $('#lastName').val();
    const special = $('#special').val();
    const state = $('#state').val();
    const city = $('#city').val();
    console.log(state);
    console.log(city)
    $('#firstName').val("");
    $('#lastName').val("");
    $('#special').val("");
    $('#state').val("");
    $("#city").val();


 
    
    (async () => {
      let doctor = new DoctorSearch();
      let response = await doctor.getDoctor(firstName, lastName, special, state, city);
      getElements(response);
      function getElements(response) {
        if (response) {
          response.data.forEach(about => {
            about.practices.forEach(location => {
              console.log(about.profile.first_name);
              console.log(location.visit_address)
              $("#showDoctors").append("<br>" + "Doctor Name: " + about.profile.first_name + " " + about.profile.last_name + "<br>" + "Address: " + location.visit_address.street + "<br>" + location.visit_address.city + "," + location.visit_address.state + " " + location.visit_address.zip + "<br>" + "Phone Number: " + location.phones[0].number + "<br>")
  
            });
          });
        }
      }
    })();
    
      
    
  });
});