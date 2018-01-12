import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CardUIContainer from './CardUIContainer';

class CardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            frontOrBack: false
        };
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(e) {
        this.state.frontOrBack == false ? this.setState({ frontOrBack: true }) : this.setState({ frontOrBack: false });
    };

    render() {
        return (
            <div className='cardContainer cardContainer-small'>
                <CardUIContainer
                    cardUIContainerData={this.props.cardContainerData}
                    checkedState={this.state.frontOrBack}
                    handleClick={this.handleClick}
                />
            </div>
        );
    };
};
CardContainer.propTypes = {
    cardContainerData: PropTypes.shape({
        id: PropTypes.string.isRequired,
        district: PropTypes.string.isRequired,
        region: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        primaryPhone: PropTypes.string.isRequired,
        manager: PropTypes.string.isRequired   
    }).isRequired
};
export default CardContainer;