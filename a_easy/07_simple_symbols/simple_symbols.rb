def SimpleSymbols(str)
  bools = []

  for n in 0..str.length-1 do
    if str[n].match(/[A-Za-z]/)
      if n == 0
        bools << false
      elsif n == str.length-1
        bools << (str[n-1] == '+')
      else
        bools << (str[n-1] == '+' && str[n+1] == '+')
      end
    end
  end

  bools.all?
end

# keep this function call here
puts SimpleSymbols(STDIN.gets)  
