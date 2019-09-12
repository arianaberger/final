export default (state = {accounts: [], total: [], account: []}, action) => {

  switch(action.type) {
    case 'GET_ACCOUNTS_SUCCESS':
      return {...state, accounts: action.accounts}

      case 'GET_ACCOUNT_SUCCESS':
        return {...state, account: action.account}

      case 'GET_TOTAL_SUCCESS':
        return {...state, total: action.total}

      case 'UPDATE_ACCOUNT_SUCCESS' :
        return {
          ...state,
          accounts: [
            ...state.accounts.map((account) => account.id === action.account.id ? {...account, name: action.account.name} : account)
          ]
        }

      default: return state;
    }
  }
