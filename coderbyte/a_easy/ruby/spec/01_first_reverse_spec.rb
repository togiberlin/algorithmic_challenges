require_relative '../01_first_reverse/first_reverse.rb'

describe '#first_reverse' do
  it 'returns etybredoC' do
    expect(first_reverse('Coderbyte')).to eq('etybredoC')
  end

  it 'returns gnidoC evoL I' do
    expect(first_reverse('I Love Coding')).to eq('gnidoC evoL I')
  end

  it 'returns oLll333h' do
    expect(first_reverse('h333llLo')).to eq('oLll333h')
  end

  it 'returns 0oY' do
    expect(first_reverse('Yo0')).to eq('0oY')
  end

  it 'returns loocsisiht' do
    expect(first_reverse('thisiscool')).to eq('loocsisiht')
  end

  it 'returns !ammocammoc' do
    expect(first_reverse('commacomma!')).to eq('!ammocammoc')
  end

  it 'returns 987654321' do
    expect(first_reverse('123456789')).to eq('987654321')
  end

  it 'returns z32!zsrettel' do
    expect(first_reverse('lettersz!23z')).to eq('z32!zsrettel')
  end

  it 'returns qa' do
    expect(first_reverse('aq')).to eq('qa')
  end
end
