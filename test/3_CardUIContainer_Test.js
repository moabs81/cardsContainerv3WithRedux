import chai from 'chai';
import enzyme from 'enzyme';
import { shallow, render } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

import CardUIContainer from '../src/components/locationCard/jsModules/CardUIContainer';
import CardFront from '../src/components/locationCard/jsModules/CardFront';
import CardBack from '../src/components/locationCard/jsModules/CardBack';

import testData from './testData';

let testSubject = shallow(<CardUIContainer cardUIContainerData={testData[0]} />);

describe('The <CardUIContainer /> component', () => {
    it('should have a \'label\' descendant', () => {
        chai.expect(testSubject).to.have.descendants('label');
    });
    it('should have an \'input\' descendant', () => {
        chai.expect(testSubject).to.have.descendants('input');
    });
    it('\'s input descendant should be type checkbox', () => {
        chai.expect(testSubject.find('input')).to.have.attr('type').equal('checkbox');
    });
    it('should have a \'CardFront\' component descendant', () => {
        chai.expect(testSubject).to.have.descendants(CardFront);
    });
    it('should have a \'CardBack\' component descendant', () => {
        chai.expect(testSubject).to.have.descendants(CardBack);
    });
});