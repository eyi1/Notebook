import * as types from './actionTypes'

const authLink = `/api/v1`

//this function has an authentication request action type
// const authRequest = () => {
//     return {
//       type: types.AUTHENTICATION_REQUEST
//     }
//   }
  
  //this function has an authentication success action type. When there's a success in correct credentials, the server passes a user and token.
  // const authSuccess = (user, token) => {
  //   return {
  //     type: types.AUTHENTICATION_SUCCESS,
  //     user: user,
  //     token: token
  //   }
  // }
  //this function has an authentication failure action type. When there are incorrect credentials, the server passes errors.
  // const authFailure = (errors) => {
  //   return {
  //     type: types.AUTHENTICATION_FAILURE,
  //     errors: errors
  //   }
  // }

  //

  export const signup = (user) => {
    const newUser = user
    console.log(newUser)
    return dispatch => {
      return fetch(`${authLink}/users`, {
        method: "POST",
        headers: {
          "Accept":"application/json",
          "Content-Type":"application/json"
        },
        body: JSON.stringify({user: user})
      })
        .then(response => response.json())
        //.then(res => console.log(res))
        .then(jresp => {
          //debugger;
          dispatch({ //dispatch action
            type: "SET_CURRENT_USER",
            currentUser: jresp.user
          
          })
          localStorage.setItem("token", jresp.jwt)
        })
        .catch((errors) => {
            console.log(errors)
        })
    };
  }

  export const login = (user) => {
    console.log(user)
    debugger
    return dispatch => {
      return fetch(`${authLink}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({user: user})
      })
        .then(response => response.json())
       // .then(res => console.log(res))
        .then(jresp => {
          //debugger;
          dispatch({ //dispatch action
            type: "SET_CURRENT_USER",
            currentUser: jresp.user          
          })
          localStorage.setItem("token", jresp.jwt)
        })
         .catch((errors) => {
            console.log(errors)
        })
     }
  }

  //export const login = (credentials) => {
   //console.log(credentials)
    // const request = new Request(`${authLink}/login`, {
    //   method: "POST",
    //   headers: new Headers({
    //     "Content-Type": "application/json",
    //     "Authorization": `Bearer ${localStorage.token}`,
    //   }),
    //   body: JSON.stringify({user: credentials})
    // })
    // return fetch(request)
    //   .then(response => response.json())
    //   .then(userJson => {console.log(userJson)})
    //   //.then(userJson => {return userJson})
    //   .catch(error => {
    //     //return error;
    //      console.log(error)
    //   });
  //}

  export const logout = () => {
    return dispatch => {
      localStorage.clear();
      return dispatch({
        type: "DELETE_USER"
      });      
    }
  }