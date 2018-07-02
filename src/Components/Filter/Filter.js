import React from 'react';
import PropTypes from 'prop-types';

import FilterLink from './FilterLink';

import './Filter.css';

function Filter(props) {
    return (
        <div className="todo-filter">
            <FilterLink
                icon="list"
                active={props.activeFilter === 'ALL'}
                onClick={() => props.onSetFilter('ALL')}>
            </FilterLink>

            <FilterLink
                icon="check_box"
                active={props.activeFilter === 'today'}
                onClick={() => props.onSetFilter('today')}>
            </FilterLink>

            <FilterLink
                icon="check_box_outline_blank"
                active={props.activeFilter === 'tomorrow'}
                onClick={() => props.onSetFilter('tomorrow')}>
            </FilterLink>

            <FilterLink
                icon="check_box_outline_blank"
                active={props.activeFilter === 'onWeek'}
                onClick={() => props.onSetFilter('onWeek')}>
            </FilterLink>

            <FilterLink
                icon="check_box_outline_blank"
                active={props.activeFilter === 'onMonth'}
                onClick={() => props.onSetFilter('onMonth')}>
            </FilterLink>
        </div>
    );
}

Filter.propTypes = {
    activeFilter: PropTypes.string.isRequired,
    onSetFilter: PropTypes.func.isRequired
};

export default Filter;