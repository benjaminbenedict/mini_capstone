class Api::SuppliersController < ApplicationController
  def index
    @suppliers = Supplier.all
    if params["search"]
      @suppliers = @suppliers.where("name ILIKE ?", "%#{params["search"]}%")
    end
    if params["sort"] && params["sort_order"]
      @suppliers = @suppliers.order("name #{params["sort_order"]}")
    else
      @suppliers = Supplier.order("id asc")
    end

    render "index.json.jb"
  end

  def show
    @supplier = Supplier.find_by(id: params["id"])
    render "show.json.jb"
  end

  def create
    @supplier = Supplier.new(
      name: params["name"],
      email: params["email"],
      phone_number: params["phone_number"],
    )
    if @Supplier.save
      render "show.json.jb"
    else
      render json: { errors: @supplier.errors.full_messages }, status: 422
    end
  end

  def update
    @supplier = Supplier.find_by(id: params["id"])
    @supplier.name = params["name"] || @supplier.name
    @supplier.email = params["email"] || @supplier.email
    @supplier.phone_number = params["phone_number"] || @supplier.phone_number
    if @supplier.save
      render "show.json.jb"
    else
      render json: { errors: @supplier.errors.full_messages }, status: 422
    end
  end

  def destroy
    supplier = Supplier.find_by(id: params["id"])
    supplier.destroy
    render json: { message: "Supplier incinerated" }
  end
end
