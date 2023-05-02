import React from "react";
import PropTypes from "prop-types";
import Star from "./Star";
import shortid from "shortid";

export default function Stars({count}) {

    if (count < 1 || count > 5 || typeof count !== 'number') {
        return null;
    }

    const stars = [];
    for (let i = 0; i < count; i++) {
        stars.push(<Star key = {shortid.generate()} />)
    }

    return (
        <ul className="card-body-stars u-clearfix">
            {stars}
        </ul>
    )
}

Stars.defaultProps = {
    count: 0
}

Stars.propTypes = {
    count: PropTypes.number
}