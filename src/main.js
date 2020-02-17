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
              $("#showDoctors").append("<br>" + "Doctor Name: " + about.profile.first_name + " " + about.profile.last_name + "<br>" + "Address: " + about.practices[0].visit_address.street + "<br>" + about.practices[0].visit_address.city + "," + about.practices[0].visit_address.state + " " + about.practices[0].visit_address.zip + "<br>" + "Phone Number: " + about.practices[0].phones[0].number + "<br>" + "<br>" )
          });
        }
      }
    })();
  });
});