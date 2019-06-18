const authLink = `/api/v1`

  export const signup = (user) => {
    const newUser = user
    console.log(newUser)
    return dispatch => {
      return fetch(`${authLink}/signup`, {
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
    //debugger
    return dispatch => {
      return fetch(`${authLink}/login`, {
        method: "POST",
        headers: {
          "Accept":"application/json",
          "Content-Type":"application/json"
        },
        body: JSON.stringify({user: user})
      })
        .then(response => response.json())
        .then(res => console.log(res))
        // .then(jresp => {
        //   dispatch({ //dispatch action
        //     type: "SET_CURRENT_USER",
        //     currentUser: jresp.user         
        //   })
        //   localStorage.setItem("token", jresp.jwt)
        // })
        .catch((errors) => {
            console.log(errors)
        })
    };
  }

  export const logout = () => {
    return dispatch => {
      localStorage.clear();
      return dispatch({
        type: "DELETE_USER"
      });      
    }
  }