class Post < ApplicationRecord
  
  has_rich_text :content

  has_many      :comments, dependent: :destroy

  def self.search(search)
    if search
      where("post LIKE ?", "%#{params[:search]}%")
    else
      all
    end
  end

end
