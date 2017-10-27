def FirstFactorial(num)
  if num <= 2 # base case
    num
  else # recursive case
    num * FirstFactorial(num-1)
  end
end

# keep this function call here
puts FirstFactorial(STDIN.gets)
