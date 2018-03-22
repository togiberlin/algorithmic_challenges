def division_stringified(num1, num2)
  quotient = (num1 / num2.to_f).round

  quotient.to_s.reverse.scan(/\d{1,3}/).join(",").reverse
end
