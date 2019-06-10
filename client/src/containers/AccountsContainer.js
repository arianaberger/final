import React, { Component } from 'react';
import Accounts from './Accounts';
import AccountTotal from './AccountTotal';
import { connect } from 'react-redux';
import { getAccounts, getTotal} from '../actions/accounts';

class AccountsContainer extends Component {

  componentDidMount(){
    this.props.getAccounts()
    this.props.getTotal()
  }

  render() {
    console.log("AccountsContainer props are:", this.props.accounts)
    return(
      <>
      <AccountTotal total={this.props.total} />
      <Accounts accounts={this.props.accounts} />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    //is accounts.accounts. not considered best practice? Or is this okay?
    accounts: state.accounts.accounts,
    total: state.accounts.total
  })
}

export default connect(mapStateToProps, { getAccounts, getTotal })(AccountsContainer)
