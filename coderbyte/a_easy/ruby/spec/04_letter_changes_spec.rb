require_relative '../04_letter_changes/letter_changes.rb'

describe '#letter_changes' do
  it "'hello*3' returns 'Ifmmp*3'" do
    expect(letter_changes('hello*3')).to eq('Ifmmp*3')
  end

  it "'fun times!' returns 'gvO Ujnft!'" do
    expect(letter_changes('fun times!')).to eq('gvO Ujnft!')
  end
end
