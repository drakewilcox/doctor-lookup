import $ from 'jquery';
$;
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorSearch } from './../src/doctor.js';

$(document).ready(function() {

  $('#searchDoctor').submit(function(event) {
    event.preventDefault(); 
    
    let doctor = new DoctorSearch();
    const firstName = $("#firstName").val();
    const lastName = $('#lastName').val();
    const special = $('#special').val();
    const state = $('#state').val();
    const city = $('#city').val().toLowerCase();
    // console.log(state);
    // console.log(city)
    // $('#firstName').val("");
    // $('#lastName').val("");
    // $('#special').val("");
    // $('#state').val("");
    // $("#city").val();
    if (city === "" || state === "Choose...") {
      $("#alert").show();
      } else {
      $("#alert").hide();
    }
    (async () => {
      let response = await doctor.getDoctor(firstName, lastName, special, state, city);
      getElements(response);
      function getElements(response) {
        if (response) {
          response.data.forEach(about => {
            console.log(about.practices[0])
            about.practices.forEach(location => {
              console.log(about.practices)
              $("#showDoctors").append("<br>" + "Doctor Name: " + about.profile.first_name + " " + about.profile.last_name + "<br>" + "Address: " + location.visit_address.street + "<br>" + location.visit_address.city + "," + location.visit_address.state + " " + location.visit_address.zip + "<br>" + "Phone Number: " + location.phones[0].number + "<br>")
            });
          });
        }
      }
    })();
  });
});