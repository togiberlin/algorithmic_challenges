def palindrome(str)
  str.delete!(' ')
  str == str.reverse
end
