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
    const gender = $('#gender').val();
    console.log(state);
    console.log(city)
    $('#firstName').val("");
    $('#lastName').val("");
    $('#special').val("");
    $('#state').val("");
    $("#city").val();
    $('#gender').val("");

 
    
    (async () => {
      let doctor = new DoctorSearch();
      const response = await doctor.getDoctor(firstName, lastName, special, state, city, gender);
      getElements(response);
    })();
    
    function getElements(response) {
      if (response) {
        console.log(response);
      }
    }
    
  });
});