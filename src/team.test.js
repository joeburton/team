import React from 'react';
import ReactDOM from 'react-dom';

import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Team from './team';

it('renders without crashing', () => {

  const div = document.createElement('div');

  ReactDOM.render(<Team members={['Joe Burton']} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render a list of names', () => {

  const wrapper = mount(<Team members={['Joe Burton', 'James Brown']} />)
  const listItems = wrapper.find('li');

  expect(listItems.length).toEqual(2);
});

it('should contain x number of names', () => {

  const wrapper = mount(<Team members={['Joe Burton', 'James Brown']} />)
  const listItems = wrapper.find('li');

  expect(listItems.length).toEqual(2);
});


it('should contain the correct array', () => {

  const wrapper = mount(<Team members={['Joe Burton', 'James Brown']} />)

  expect(wrapper.props().members).toEqual(['Joe Burton', 'James Brown']);

  expect(wrapper.props().members[0]).toEqual('Joe Burton');
});