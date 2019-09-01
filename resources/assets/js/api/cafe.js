import { ROAST_CONFIG } from '../config.js'

export default {
    getCafes: function(){
        return axios.get( 'http://localhost:8000/api/v1' + '/cafes' );
    },

    getCafe: function( cafeID ){
        return axios.get( 'http://localhost:8000/api/v1' + '/cafes/' + cafeID );
      },

    postAddNewCafe: function( name, address, city, state, zip ){
        return axios.post( 'http://localhost:8000/api/v1' + '/cafes',
            {
            name: name,
            address: address,
            city: city,
            state: state,
            zip: zip
            }
        )
    }

}