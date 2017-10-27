def CheckNums(num1,num2)
  if num1 < num2
    'true'
  elsif num1 == num2
    '-1'
  else
    'false'
  end
end

# keep this function call here
puts CheckNums(STDIN.gets)
