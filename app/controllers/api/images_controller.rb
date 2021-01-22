class Api::ImagesController < ApplicationController
  def index
    @images = Image.all
    if params["search"]
      @images = @images.where("url ILIKE ?", "%#{params["search"]}%")
    end
    if params["sort"] && params["sort_order"]
      @images = @images.order("url #{params["sort_order"]}")
    else
      @images = Image.order("id asc")
    end

    render "index.json.jb"
  end

  def show
    @image = Image.find_by(id: params["id"])
    render "show.json.jb"
  end

  def create
    @image = Image.new(
      url: params["url"],
      product_id: params["product_id"],
    )
    if @image.save
      render "show.json.jb"
    else
      render json: { errors: @image.errors.full_messages }, status: 422
    end
  end

  def update
    @image = Image.find_by(id: params["id"])
    @image.url = params["url"] || @image.url
    @image.product_id = params["product_id"] || @image.product_id

    if @image.save
      render "show.json.jb"
    else
      render json: { errors: @image.errors.full_messages }, status: 422
    end
  end

  def destroy
    image = Image.find_by(id: params["id"])
    image.destroy
    render json: { message: "image incinerated" }
  end
end
