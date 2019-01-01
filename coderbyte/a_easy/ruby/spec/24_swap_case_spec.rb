require_relative '../24_swap_case/swap_case.rb'

describe '#swap_case' do
  it 'returns a string with all capital letters downcased and all lower case letters upcased' do
    expect(swap_case('Hello World')).to eq('hELLO wORLD')
  end

  it "don't get sidetracked by dashes" do
    expect(swap_case('Hello-LOL')).to eq('hELLO-lol')
  end

  it 'let punctuation stay the way it is' do
    expect(swap_case('Sup DUDE!!?')).to eq('sUP dude!!?')
  end
end
