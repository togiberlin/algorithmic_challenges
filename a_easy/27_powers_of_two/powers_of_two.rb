def PowersofTwo(num)
  Math.log(num, 2) % 1 == 0 ? true : false
end

# keep this function call here
puts PowersofTwo(STDIN.gets)  
