require_relative '../12_vowel_count/vowel_count.rb'

describe '#vowel_count' do
  it "'hello' should return 2" do
    expect(vowel_count('hello')).to eq(2)
  end

  it "'coderbyte' should return 3" do
    expect(vowel_count('coderbyte')).to eq(3)
  end
end
