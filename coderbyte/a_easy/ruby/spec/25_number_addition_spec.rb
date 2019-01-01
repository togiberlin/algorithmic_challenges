require_relative '../25_number_addition/number_addition.rb'

describe '#number_addition' do
  it 'Add up all the number in a string and return the sum.' do
    expect(number_addition('75Number9')).to eq(84)
  end

  it 'Add up all the number in a string and return the sum.' do
    expect(number_addition('10 2One Number1')).to eq(13)
  end

  it 'Add up all the number in a string and return the sum.' do
    expect(number_addition('88Hello 3World!')).to eq(91)
  end
end
