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
    // const special = $('#special').val();
    const state = $('#state').val();
    const city = $('#city').val();
    const gender = $('#gender').val();
    $('#firstName').val("");
    $('#lastName').val("");
    $('#special').val("");
    $('#state').val("");
    $("#city").val();
    $('#gender').val("");
    console.log(firstName);
    console.log(lastName);
    // console.log(special);
    console.log(state);
    console.log(city);
    console.log(gender);
    
    (async () => {
      let doctor = new DoctorSearch();
      const response = await doctor.getDoctor();
      getElements(response);
    })();
    
    function getElements(response) {
      if (response) {}
    }
    
  });
});