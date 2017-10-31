def ThirdGreatest(strArr)
  third_greatest_length = strArr.map { |item| item.length }.sort[strArr.length - 3]

  strArr.reverse!

  strArr.each do |string|
    return string if string.length == third_greatest_length
  end
end

# keep this function call here
puts ThirdGreatest(STDIN.gets)
