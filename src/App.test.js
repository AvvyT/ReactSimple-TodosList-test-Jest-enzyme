import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';

import Adapter from "enzyme-adapter-react-16"
configure({adapter: new Adapter()});

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
  // skapa en mock fun.
  const mockPrevent = jest.fn();

  expect(wrapper.find('li').length).toBe(0)
  // preventDefault-metod: läggs mock-fun
  wrapper.find('form').simulate("submit", {
    preventDefault: mockPrevent
  })
  expect(mockPrevent.mock.calls.length).toBe(1)

  console.log(wrapper.state())
  expect(wrapper.find('li').length).toBe(1)
});

// ------snapshot-testning 
it('renders name correctly', () => {
  const tree = renderer
    .create(<App name={"niklas"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});