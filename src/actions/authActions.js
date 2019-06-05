import * as types from './actionTypes'

const authLink = `/api/v1`

//this function has an authentication request action type
const authRequest = () => {
    return {
      type: types.AUTHENTICATION_REQUEST
    }
  }
  
  //this function has an authentication success action type. When there's a success in correct credentials, the server passes a user and token.
  const authSuccess = (user, token) => {
    return {
      type: types.AUTHENTICATION_SUCCESS,
      user: user,
      token: token
    }
  }
  //this function has an authentication failure action type. When there are incorrect credentials, the server passes errors.
  const authFailure = (errors) => {
    return {
      type: types.AUTHENTICATION_FAILURE,
      errors: errors
    }
  }

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
          dispatch(authenticate({
            name: newUser.name,
            email: newUser.email,
            password: newUser.password})
          );
        })
        .catch((errors) => {
          dispatch(authFailure(errors))
        })
    };
  }

  export const authenticate = (credentials) => {
    return dispatch => {
      dispatch(authRequest())
      return fetch(`${authLink}/user_token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({auth: credentials})
      })
        .then(res => res.json())
        .then((response) => {
            const token = response.jwt;
            localStorage.setItem('token', token);
            return getUser(credentials)
        })
        .then((user) => {
          console.log(user)
            dispatch(authSuccess(user, localStorage.token))
        })
        .catch((errors) => {
            dispatch(authFailure(errors))
            localStorage.clear()
        })
    }
  }

  export const getUser = (credentials) => {
    const request = new Request(`${authLink}/find_user`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`,
      }),
      body: JSON.stringify({user: credentials})
    })
    return fetch(request)
      .then(response => response.json())
      .then(userJson => {return userJson})
      .catch(error => {
        return error;
      });
  }