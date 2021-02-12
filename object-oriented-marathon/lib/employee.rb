class Employee

  attr_reader :name, :title, :cages

  def initialize(name, title='Zoo Keeper', cages=10)
    @name = name
    @title = title
    @cages = cages
  end

  def full_title
    "#{@name}, #{@title}"
  end

  def greet
    "#{@name} waved hello!"
  end

end
