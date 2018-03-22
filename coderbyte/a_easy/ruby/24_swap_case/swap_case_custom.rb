def swap_case(string, length)
  array = string.split(//)

  for i in 0..length do
    if array[i].match(/[a-z]/)
      array[i] = array[i].upcase
    elsif array[i].match(/[A-Z]/)
      array[i] = array[i].downcase
    end
  end

  array.join
end
