class Exam

  attr_writer :assigned_to
  attr_accessor :grade

  def initialize(title, date)
    @title = title
    @date = date
    @assigned_to = nil
    @grade = nil
  end

  def assigned_to=(student)
    @assigned_to = student
  end

end
