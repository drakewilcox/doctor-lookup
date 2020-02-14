import $ from 'jquery';
$
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorSearch } from './../src/doctor.js';

$(document).ready(function() {

  (async () => {
    let doctor = new DoctorSearch();
    const response = await doctor.getDoctor();
    getElements(response);
  })();

  function getElements(response) {
    if (response) {}
  }

});