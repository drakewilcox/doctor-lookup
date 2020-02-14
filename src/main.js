import $ from 'jquery';
$
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorSearch } from './../src/doctor.js';

$(document).ready(function() {

  $('#searchDoctor').click(function() {
    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const special = $('#special').val();
    const state = $('#state').val();
    const gender = $('#gender').val();
    $('#firstName').val("");
    $('#lastName').val("");
    $('#special').val("");
    $('#state').val("");
    $('#gender').val("");
    
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