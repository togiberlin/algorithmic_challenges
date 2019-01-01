require_relative '../10_alphabet_soup/alphabet_soup.rb'

describe '#alphabet_soup' do
  it "'hello' should return 'ehllo'" do
    expect(alphabet_soup('hello')).to eq('ehllo')
  end

  it "'coderbyte' should return 'bcdeeorty'" do
    expect(alphabet_soup('coderbyte')).to eq('bcdeeorty')
  end

  it "'hooplah' should return 'ahhloop'" do
    expect(alphabet_soup('hooplah')).to eq('ahhloop')
  end
end
