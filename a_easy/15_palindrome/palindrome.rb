def Palindrome(str)
  str.delete!(' ')
  str == str.reverse
end

# keep this function call here
puts Palindrome(STDIN.gets)
