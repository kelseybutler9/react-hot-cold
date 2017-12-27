import React from 'react';
import { shallow } from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
  it('Renders without crashing', () => {
      shallow(<AuralStatus />);
  });


  it('Renders the aural status', () => {
      const text = "Foo";

      const wrapper = shallow(<AuralStatus auralStatus={text} />);
      expect(wrapper.contains(text)).toEqual(true);
    });
});
