require_relative '../18_letter_count/letter_count.rb'

describe '#letter_count' do
  it "'Hello apple pie' should return 'Hello'" do
    expect(letter_count_i('Hello apple pie')).to eq('Hello')
  end

  it "'No words' should return '-1'" do
    expect(letter_count_i('No words')).to eq(-1)
  end

end
