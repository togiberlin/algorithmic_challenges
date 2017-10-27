def SimpleAdding(num)
  if num <= 1
    num
  else
    [*(1..num)].sum
  end
end

# keep this function call here
puts SimpleAdding(STDIN.gets)
