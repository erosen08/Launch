class Cage

  attr_accessor :animal

  def initialie(animal)
    @animal = animal
  end

  def empty?
    @animal.nil?
  end

end
