require_relative '../06_letter_capitalize/letter_capitalize.rb'

describe '#letter_capitalize' do
  it "'hello word' should return 'Hello World'" do
    expect(letter_capitalize('hello world')).to eq('Hello World')
  end

  it "'i ran there' should be 'I Ran There'" do
    expect(letter_capitalize('i ran there')).to eq('I Ran There')
  end

end
