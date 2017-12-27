import React from 'react';
import {shallow} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
  it('Renders without crashing', () => {
    shallow(<TopNav />);
  });

  it('Should run onNewGame when button selected', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onRestartGame={callback} />);
    const link = wrapper.find('.new');
    link.simulate('click', { preventDefault() {} });
    expect(callback).toHaveBeenCalled();
  });

  it('Should run onGenerateAuralUpdate on click', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onGenerateAuralUpdate={callback} />);
    const link = wrapper.find('.status-link');
    link.simulate('click', { preventDefault() {} });
    expect(callback).toHaveBeenCalled();
  });
});
