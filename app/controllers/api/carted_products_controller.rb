class Api::CartedProductsController < ApplicationController
  before_action :authenticate_user

  def create
    @carted_product = CartedProduct.new(
      user_id: current_user.id,
      product_id: params[:product_id],
      quantity: params[:quantity],
      status: "carted",
    )
    @carted_product.save
    render "show.json.jb"
  end

  def index
    @carted_products = current_user.carted_products.where(status: "carted")
    render "index.json.jb"
  end

  def destroy
    # carted_product = current_user.carted_products.where(status: "carted")
    carted_product = CartedProduct.find_by(id: params[:id])
    carted_product.destroy
    render json: { message: "Carted_producted removed" }
  end

  def show
    @carted_product = current_user.carted_products.find_by(id: params[:id])
    render "show.json.jb"
  end
end
