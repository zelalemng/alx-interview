import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import { shallow } from 'enzyme';

describe('App tests', () =>{
  it('renders without crashing', () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });
  it('App-header', () => {
    const component = shallow(<App />);

    expect(component.find('.App-header')).toBeDefined();
  });
  it('App-body', () => {
    const component = shallow(<App />);

    expect(component.find('.App-body')).toBeDefined();
  });
  it('App-footer', () => {
    const component = shallow(<App />);

    expect(component.find('.App-footer')).toBeDefined();
  });

})

//test('renders learn react link', () => {
  //render(<App />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
//});
