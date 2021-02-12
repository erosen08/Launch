class Zoo

  attr_reader :cages, :employees

  def initialize(name, opening, closing)
    @name = name
    @opening = opening
    @closing = closing
    @cages = build_cages
    @employees = []
  end

  def build_cages
    cages = []
    10.times do
      cages << Cage.new
    end
    return cages
  end

  def add_employee(employee)
    @employees << employee
  end

  def open?(date)
    if date >= @opening && date <= @closing
      return true
    else
      return false
    end
  end

  def add_animal(animal)
    @cages.each do |cage|
      if cage.empty?
        cage.animal = animal
        return
      end
    end
    "Your zoo is already at capacity!"
  end

  def visit
    message = ""
    @employees.each do |employee|
      message += "#{employee.greet}\n"
    end
    @cages.each do |cage|
      if !cage.empty?
        message += "#{cage.animal.speak}\n"
      end
    end
    return message
  end

end
