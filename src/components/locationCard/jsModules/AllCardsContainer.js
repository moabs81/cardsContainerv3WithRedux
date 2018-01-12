//React dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Container Children
import CardStateContainer from './CardStateContainer';

//Stylesheet
import '../lessStyles/branchCard.less';

//Component
class AllCardsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            district: 1
        };
    };

    render() {
        const arrCards = [];
        this.props.cardData.forEach((el) => {
            arrCards.push(<CardStateContainer key={el.key ? el.key : this.props.cardData.indexOf(el)} cardContainerData={el} />);
        });
        return (
            <div className='allCardsContainer'>
                {arrCards};
            </div>
        );
    };
};
AllCardsContainer.propTypes = {
    cardData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        district: PropTypes.string.isRequired,
        region: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        primaryPhone: PropTypes.string.isRequired,
        manager: PropTypes.string.isRequired
    }))
};
export default AllCardsContainer;