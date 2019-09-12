// const API_URL = process.env.REACT_APP_API_URL;
 
const setAccounts = accounts => {
  return {
    type: 'GET_ACCOUNTS_SUCCESS',
    accounts
  }
}

const setAccount = account => {
  return {
    type: 'GET_ACCOUNT_SUCCESS',
    account
  }
}

const setTotal = total => {
  return {
    type: 'GET_TOTAL_SUCCESS',
    total
  }
}

const patchAccountSuccess = account => {
  return {
    type: 'UPDATE_ACCOUNT_SUCCESS',
    account
  }
}

// FETCH FUNCTIONS
export const getAccounts = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/accounts')
    .then(response => response.json())
    .then(accounts => dispatch(setAccounts(accounts)))
    .catch(error => console.log(error))
  }
}

export const getAccount = (id) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/accounts/${id}`)
    .then(response => response.json())
    .then(account => dispatch(setAccount(account)))
    .catch(error => console.log(error))
  }
}

export const getTotal = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/transactions/1')
    .then(response => response.json())
    .then(total => dispatch(setTotal(total)))
    .catch(error => console.log(error))
  }
}

/////Why wasn't what I had before not working?

//Thunk lets action creators return a function instead of an action (used for async requests) so we can dispatch multiple actions
//Code only continues once promise is resolved
export const updateAccount = account => {
  return function(dispatch) {
    return patchAccount(account).then(account => {
      dispatch(patchAccountSuccess(account))
    })
  }
}

async function patchAccount(account) {
  const url = `/api/accounts/${account.id}.json;`
  const settings = {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({account: account})
  }
  const fetchResult = fetch(url, settings);
  const response = await fetchResult;
  const jsonData = await response.json();
  return jsonData;
}

//MY OLD CODE:
// export const updateAccount = account => {
//   return dispatch => {
//     return fetch(`${API_URL}/accounts/${account.id}`, {
//       method: 'PATCH',
//       body: JSON.stringify({account: account}),
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'applications/json'
//     })
//   .then(response => response.json())
//   .then(account => {
//     console.log("updateaccount json response:", account)
//     dispatch(upda(account))
//     dispatch(resetAccountForm())
//   })
//   .catch(error => console.log(error))
//   }
// }
