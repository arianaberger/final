class Account < ApplicationRecord
  has_many :transactions

  def self.update_account_total(account_id)
    account = Account.find_by(id: account_id)
    account.account_total = account.calc_account_total
    account.save
  end

  def calc_account_total
    debits = []
    credits = []

    self.transactions.each do |t|
      if t.amount
        if t.debit
          debits.push(t.amount)
        else
          credits.push(t.amount)
        end
      end
    end
    account_total = debits.sum - credits.sum
    return account_total
  end

end
