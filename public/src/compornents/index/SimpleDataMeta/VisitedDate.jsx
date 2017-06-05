import React, { Component } from 'react';

class VisitedDate extends Component {
    render() {
        return (
            <div className="index__data-meta-visited-date">
                {this.props.visitedDate}
            </div>
        );
    }
}

export default VisitedDate;