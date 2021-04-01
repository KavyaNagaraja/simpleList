import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';

class WrappedSingleListItem extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            index : this.props.index,
            isSelected : false,
            text : this.text,
        };
        this.onClickHandler = this.onClickHandler.bind(this)
    }
    onClickHandler(index){
        this.setState({
            isSelected: true,
        });
    }

    render(){
        const {
            onClickHandler,
            text,
            index,
            isSelected,
        } = this.props;
        console.log(isSelected);
        if(this.state.isSelected){
            return(
                <li
                    style={{ backgroundColor: 'green'}}
                    onClick={onClickHandler(index)}
                >
                    {text}
                </li>
            );
         }
        else{
            return(
                <li
                    style={{ backgroundColor: 'red'}}
                    onClick={onClickHandler(index)}
                >
                    {text}
                </li>
            );
        }
    }

}
WrappedSingleListItem.propTypes = {
    index: PropTypes.number,
    isSelected: PropTypes.bool,
    onClickHandler: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({
                                  items,
                              }) => {
    const [selectedIndex, setSelectedIndex] = useState( );

    useEffect(() => {
        setSelectedIndex(selectedIndex);
    }, [selectedIndex, items]);

    const handleClick = index => {
        setSelectedIndex(true);
    };
    return (
        <ul style={{ textAlign: 'left' }}>
            {items.map((item, index) => (
                <SingleListItem
                    onClickHandler={(index) => handleClick(index)}
                    text={item}
                    index={index}
                    isSelected={selectedIndex}
                    key={index}
                />
            ))}
        </ul>
    )
};
export const textShape = PropTypes.shape({
    text: PropTypes.string,
});

WrappedListComponent.propTypes = {
    items: PropTypes.arrayOf(textShape),
};


WrappedListComponent.defaultProps = {
    items: null,
};

const List = memo(WrappedListComponent);

export default List;