import chai from 'chai';
import enzyme from 'enzyme';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

import testData from './testData';
import CardFrontTop from '../src/components/locationCard/jsModules/CardFrontTop';

let testSubject = shallow(<CardFrontTop district={testData[0].district} id={testData[0].id} />);

describe('The <CardFrontTop /> component', () => {
    it('should have className \'cardFrontTop cardTop-small\'', () => {
        chai.expect(testSubject).to.have.className('cardFrontTop cardTop-small');
    });
    it('\'s \'cardFrontTop\' descendant should have 2 \'div\' descendants', () => {
        chai.expect(testSubject.find('.cardFrontTop')).to.have.exactly(2 + 1).descendants('div');
    });
    it('\'s \'cardFrontTop\' descendant should have a descendant with className \'backgroundImg\'', () => {
        chai.expect(testSubject.find('.cardFrontTop')).to.have.descendants('.backgroundImg');
    });
    it('\'s \'cardFrontTop\' descendant should have a descendant with className \'locID\'', () => {
        chai.expect(testSubject.find('.cardFrontTop')).to.have.descendants('.locID');
    });
    it('\'s \'locID\' descendant should have the text \'Dist ' + testData[0].district + '/Br ' + testData[0].id + '\'', () => {
        chai.expect(testSubject.find('.locID')).to.have.text('Dist ' + testData[0].district + '/Br ' + testData[0].id);
    });
});