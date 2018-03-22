def ex_oh(str)
  str.scan(/[x]/).length == str.scan(/[o]/).length
end
