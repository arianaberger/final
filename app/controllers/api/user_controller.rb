class Api::UserControler < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_account, only: [:show, :update]

  def index
    Account.update_account_totals
    @accounts = Account.all
    render json: @accounts
  end

  def show
    account = @account.remove_parent_debits
    render json: account
  end

  def create
    account = Account.new(account_params)
    if account.save
      render json: account
    else
      render json: { message: account.errors}, status: 400
    end
  end

  def update
    if @account.update(account_params)
      render json: @account
    else
      render json: { message: "Unable to update account"}
    end
  end

  private

    def set_account
      @account = Account.find_by(id: params[:id])
    end

      def account_params
        params.require(:account).permit(:name, :main_account, :account_total)
      end

end
