export class DoctorSearch {
  async getDoctor(firstName, lastName, special, state, city) {
    try {
     
      let response = await fetch( `https://api.betterdoctor.com/2016-03-01/doctors?first_name=${firstName}&last_name=${lastName}&query=${special}&location=${state}-${city}&skip=0&limit=30&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      console.log(jsonifiedResponse)
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }
}