export default {
    /*
      GET   /api/v1/brew-methods
    */
    getBrewMethods: function(){
      return axios.get( 'http://localhost:8000/api/v1' + '/brew-methods' );
    }
  }