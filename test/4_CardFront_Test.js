import chai from 'chai';
import enzyme from 'enzyme';
import { shallow, render } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

import CardFront from '../src/components/locationCard/jsModules/CardFront';
import CardFrontTop from '../src/components/locationCard/jsModules/CardFrontTop';
import CardFrontBottom from '../src/components/locationCard/jsModules/CardFrontBottom';

import testData from './testData';

let testSubject = shallow(<CardFront cardFrontData={testData[0]} />);

describe('The <CardFront /> component', () => {
    it('should have className \'cardFront\'', () => {
        chai.expect(testSubject).to.have.className('cardFront');
    });
    it('should have a \'cardFrontTop\' component descendant', () => {
        chai.expect(testSubject).to.have.descendants(CardFrontTop);
    });
    it('should have a \'cardFrontBottom\' component descendant', () => {
        chai.expect(testSubject).to.have.descendants(CardFrontBottom);
    });
});