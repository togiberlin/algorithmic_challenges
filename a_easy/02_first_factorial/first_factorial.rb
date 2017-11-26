def first_factorial(num)
  if num <= 2 # base case
    num
  else # recursive case
    num * first_factorial(num-1)
  end
end
