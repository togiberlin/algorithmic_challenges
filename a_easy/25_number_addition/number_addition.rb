def number_addition(str)
  str.split(/[a-zA-Z\s]+/).map(&:to_i).sum
end
