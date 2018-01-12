import chai from 'chai';
import enzyme from 'enzyme';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

import testData from './testData';
import CardBack from '../src/components/locationCard/jsModules/CardBack';


let testSubject = shallow(<CardBack name={testData[0].name} region={testData[0].region} />);

describe('The <CardBack /> component', () => {
    it('should have className \'cardBack cardContainer-Small\'', () => {
        chai.expect(testSubject).to.have.className('cardBack cardContainer-small');
    });
    it('\'s \'cardBack\' descendant should have 1 \'div\' descendants', () => {
        chai.expect(testSubject.find('.cardBack')).to.have.exactly(1 + 1).descendants('div');
    });
    it('\'s \'cardBack\' descendant should have a descendant with className \'cardBackContent\'', () => {
        chai.expect(testSubject.find('.cardBack')).to.have.descendants('.cardBackContent');
    });
    it('\'s \'cardBackContent\' descendant should have 1 \'ul\' descendant', () => {
        chai.expect(testSubject.find('.cardBackContent')).to.have.exactly(1).descendants('ul');
    });
    it('\'s \'ul\' descendant should have 4 \'li\' descendants', () => {
        chai.expect(testSubject.find('ul')).to.have.exactly(4).descendants('li');
    });
});