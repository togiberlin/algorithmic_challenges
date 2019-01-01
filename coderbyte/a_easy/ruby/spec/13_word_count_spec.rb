require_relative '../13_word_count/word_count.rb'

describe '#word_count' do
  it "'Hello World' should return 2" do
    expect(word_count('Hello World')).to eq(2)
  end

  it "'one 22 three' should return 3" do
    expect(word_count('one 22 three')).to eq(3)
  end
end
