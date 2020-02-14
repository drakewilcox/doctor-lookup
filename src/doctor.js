export class DoctorSearch {
  async getDoctor() {
    try {
      let response = await fetch( 'https://api.betterdoctor.com/2016-03-01/doctors?first_name=${firstName}&last_name=${lastName}&query=${special}&location=${state}-${city}&gender=${gender}&skip=0&limit=10&user_key=${process.env.API_KEY}');


      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch {
      return false;
    }
  }
}