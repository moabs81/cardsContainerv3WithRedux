import chai from 'chai';
import enzyme from 'enzyme';
import { shallow, render } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

import AllCardsContainer from '../src/components/locationCard/jsModules/AllCardsContainer';
import CardStateContainer from '../src/components/locationCard/jsModules/CardStateContainer';

import testData from './testData';

let testSubject = shallow(<AllCardsContainer cardData={testData} />);

describe('The <AllCardsContainer /> component', () => {
    it('should have className \'allCardsContainer\'', () => {
        chai.expect(testSubject).to.have.className('allCardsContainer');
    });
    it('should have a number of descendants corresponding to the props array length (' + testData.length + ')', () => {
        chai.expect(testSubject).to.have.exactly(testData.length).descendants(CardStateContainer);
    });
    it('\'s descendants should be \'CardStateContainer\' component descendants', () => {
        chai.expect(testSubject).to.have.descendants(CardStateContainer);
    });
});