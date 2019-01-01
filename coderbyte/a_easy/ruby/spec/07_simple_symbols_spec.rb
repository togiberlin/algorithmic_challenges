require_relative '../07_simple_symbols/simple_symbols.rb'

describe '#simple_symbols' do
  it "'++d+===+c++==a' should return 'false'" do
    expect(simple_symbols('++d+===+c++==a')).to eq(false)
  end

  it "'+d+=3=+s+' should return 'true'" do
    expect(simple_symbols('+d+=3=+s+')).to eq(true)
  end

  it "'f++d+' should return 'false'" do
    expect(simple_symbols('f++d+')).to eq(false)
  end
end
