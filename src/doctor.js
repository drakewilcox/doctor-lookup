export class DoctorSearch {
  async getDoctor(firstName, lastName, special, state, city, gender) {
    try {
      console.log(firstName);
      console.log(lastName);
      console.log(special);
      console.log(state);
      console.log(city);
      console.log(gender);
     

      
      let response = await fetch( `https://api.betterdoctor.com/2016-03-01/doctors?first_name=${firstName}&last_name=${lastName}&location=${state}-${city}&gender=${gender}&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      console.log(response);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }
}