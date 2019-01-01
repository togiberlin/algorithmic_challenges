require_relative '../26_third_greatest/third_greatest.rb'

describe '#third_greatest' do
  it 'Return the third largest word within an array of strings.' do
    expect(third_greatest(%w(hello world before all))).to eq('world')
  end

  it 'Return the third largest word within an array of strings.' do
    expect(third_greatest(%w(coder byte code))).to eq('code')
  end

  it 'Return the third largest word within an array of strings.' do
    expect(third_greatest(%w(abc defg z hijk))).to eq('abc')
  end
end
