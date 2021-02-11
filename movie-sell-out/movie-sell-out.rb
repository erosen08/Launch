class Theater

  attr_reader :admitted, :capacity

  def initialize(capacity)
    @capacity = capacity
    @admitted = 0
  end

  def admit!(patrons=1)
    if @admitted + patrons > @capacity
      "Sorry! We're at capacity! Try again later"
    else
      @admitted += patrons
    end
  end

  def at_capacity?
    @patrons == @capacity
  end

  def record_walk_outs!(patrons=1)
    @admitted -= patrons
  end

end

    
