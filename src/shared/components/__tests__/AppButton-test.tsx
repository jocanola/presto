import * as React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import AppButton from '../Button/AppButton';

describe('AppButton', () => {
  it('renders correctly', () => {
    const tree = render(<AppButton title="Test Button" onPress={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<AppButton title="Test Button" onPress={onPressMock} />);
    
    const button = getByText('Test Button');
    fireEvent.press(button);
    
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('displays the correct title', () => {
    const { getByText } = render(<AppButton title="Custom Title" onPress={() => {}} />);
    expect(getByText('Custom Title')).toBeTruthy();
  });
});