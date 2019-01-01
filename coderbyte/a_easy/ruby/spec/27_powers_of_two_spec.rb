require_relative '../27_powers_of_two/powers_of_two.rb'

describe '#powers_of_two' do
  it "Return the string \"true\" if the number is a power of two." do
    expect(powers_of_two(16)).to eq(true)
  end

  it "Return the string \"true\" if the number is a power of two." do
    expect(powers_of_two(4)).to eq(true)
  end

  it "Return the string \"false\" if the number isn't a power of two." do
    expect(powers_of_two(124)).to eq(false)
  end
end
