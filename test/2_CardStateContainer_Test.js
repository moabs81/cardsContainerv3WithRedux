import chai from 'chai';
import enzyme from 'enzyme';
import { shallow, render } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

import CardStateContainer from '../src/components/locationCard/jsModules/CardStateContainer';
import CardUIContainer from '../src/components/locationCard/jsModules/CardUIContainer';
import testData from './testData';

let testSubject = shallow(<CardStateContainer cardContainerData={testData[0]} />)

describe('The <CardStateContainer /> component', () => {
    it('should have className \'cardContainer cardContainer-small\' ', () => {
        chai.expect(testSubject).to.have.className('cardContainer cardContainer-small');
    });
    it('should have a \'CardUIContainer\' component descendant', () => {
        chai.expect(testSubject).to.have.descendants(CardUIContainer);
    })
});