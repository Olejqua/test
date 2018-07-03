import React from 'react';
import PropTypes from 'prop-types';

import FilterLink from './FilterLink';

import './Filter.css';

function Filter(props) {
    return (
        <div className="todo-filter">
            <FilterLink
                icon="inbox"
                tegName="Все"
                active={props.activeFilter === 'ALL'}
                onClick={() => props.onSetFilter('ALL')}>All
            </FilterLink>

            <FilterLink
                icon="today"
                tegName="Сегодня"
                active={props.activeFilter === 'today'}
                onClick={() => props.onSetFilter('today')}>
            </FilterLink>

            <FilterLink
                icon="next_week"
                tegName="Завтра"
                active={props.activeFilter === 'tomorrow'}
                onClick={() => props.onSetFilter('tomorrow')}>
            </FilterLink>

            <FilterLink
                icon="view_week"
                tegName="На неделю"
                active={props.activeFilter === 'onWeek'}
                onClick={() => props.onSetFilter('onWeek')}>
            </FilterLink>

            <FilterLink
                icon="calendar_today"
                tegName="В месяце"
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