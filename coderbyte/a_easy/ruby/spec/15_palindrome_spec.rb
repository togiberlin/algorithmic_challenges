require_relative '../15_palindrome/palindrome.rb'

describe '#palindrome' do
  it "'never odd or even' should return 'true'" do
    expect(palindrome('never odd or even')).to eq(true)
  end

  it "'eye' should return 'true'" do
    expect(palindrome('eye')).to eq(true)
  end

  it "'tokyo' should return 'false'" do
    expect(palindrome('tokyo')).to eq(false)
  end
end
