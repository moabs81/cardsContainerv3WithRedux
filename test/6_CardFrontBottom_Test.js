import chai from 'chai';
import enzyme from 'enzyme';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

import testData from './testData';
import CardFrontBottom from '../src/components/locationCard/jsModules/CardFrontBottom';

let testSubject = shallow(<CardFrontBottom name={testData[0].name} manager={testData[0].manager} primaryPhone={testData[0].primaryPhone} />);

describe('The <CardFrontBottom /> component', () => {
    it('should have className \'cardFrontBottom cardBottom-small\'', () => {
        chai.expect(testSubject).to.have.className('cardFrontBottom cardBottom-small');
    });
    it('should have a \'ul\' descendant', () => {
        chai.expect(testSubject).to.have.descendants('ul');
    });
    it('\'s \'ul\' descendant should have 3 \'li\' descendants', () => {
        chai.expect(testSubject.find('ul')).to.have.exactly(3).descendants('li');
    });
    it('\'s \'ul\' descendant should have a descendant with className \'locName\'', () => {
        chai.expect(testSubject.find('ul')).to.have.descendants('.locName');
    });
    it('\'s \'locName\' descendant should have an \'h3\' descendant', () => {
        chai.expect(testSubject.find('.locName')).to.have.descendants('h3');
    });
    it('\'s \'h3\' descendant should have the text \'' + testData[0].name + '\'', () => {
        chai.expect(testSubject.find('h3')).to.have.text(testData[0].name);
    });
    it(' \'s \'ul\' descendant should have a descendant with className \'locManager\'', () => {
        chai.expect(testSubject.find('ul')).to.have.descendants('.locManager');
    });
    it('\'s \'locManager\' descendant should have the text \'' + testData[0].manager + '\'', () => {
        chai.expect(testSubject.find('.locManager')).to.have.text(testData[0].manager);
    });
    it(' \'s \'ul\' descendant should have a descendant with className \'locPhone\'', () => {
        chai.expect(testSubject.find('ul')).to.have.descendants('.locPhone');
    });
    it('\'s \'locPhone\' descendant should have the text \'' + testData[0].primaryPhone + '\'', () => {
        chai.expect(testSubject.find('.locPhone')).to.have.text(testData[0].primaryPhone);
    });
});