def simple_symbols(str)
  bools = []

  for n in 0..str.length - 1 do
    if str[n].match(/[A-Za-z]/)
      if n.zero?
        bools << false
      elsif n == str.length - 1
        bools << (str[n - 1] == '+')
      else
        bools << (str[n - 1] == '+' && str[n + 1] == '+')
      end
    end
  end

  bools.all?
end
