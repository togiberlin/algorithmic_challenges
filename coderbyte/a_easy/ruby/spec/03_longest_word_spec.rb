require_relative '../03_longest_word/longest_word.rb'

describe '#longest_word' do
  it "'fun&!! time' returns 'time'" do
    expect(longest_word('fun&!! time')).to eq('time')
  end

  it "'I love dogs' returns 'love'" do
    expect(longest_word('I love dogs')).to eq('love')
  end
end
