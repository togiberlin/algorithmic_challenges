def third_greatest(str_arr)
  third_greatest_length = str_arr
                          .map(&:length)
                          .sort[str_arr.length - 3]

  str_arr.reverse!

  str_arr.each do |string|
    return string if string.length == third_greatest_length
  end
end
