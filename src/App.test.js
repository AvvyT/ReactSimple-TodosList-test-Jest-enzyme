import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// ----ett system som kallas matchers
it('Olika typer', () => {
  expect('Todo').not.toMatch(/V/);
  const namnLista = ['niklas', 'viktor'];

  expect(namnLista).toContain('niklas');
});

// -------enzyme wrappar
it('Check dom-text', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find('.foo').text()).toContain('test')
});

// ------snapshot-testning 
it('renders name correctly', () => {
  const tree = renderer
    .create(<App name={"niklas"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});