require_relative '../16_arith_geo/arith_geo.rb'

describe '#arith_geo' do

  it "[5, 10, 15] should return 'Arithmetic'" do
    expect(arith_geo([5, 10, 15])).to eq('Arithmetic')
  end

  it "[2, 6, 18, 54] should return 'Geometric'" do
    expect(arith_geo([2, 6, 18, 54])).to eq('Geometric')
  end

  it "[2, 4, 16, 24] should return '-1'" do
    expect(arith_geo([2, 4, 16, 24])).to eq(-1)
  end

end
