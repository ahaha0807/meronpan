import React, { Component } from 'react';

class ShowDetail extends Component {
    constructor(props) {
        super()
        this.showDetail = this.showDetail.bind(this);
    }
    render() {
        return (
            <button onClick={this.showDetail}>
                詳細
            </button>
        );
    }

    showDetail() {
        let nowLocation = location.href
        if (nowLocation.substr(-1, 8) === '/meronpan') {
            location.href = nowLocation + this.props.id
        } else {
            location.href = nowLocation + 'meronpan/' + this.props.id
        }
    }
}

export default ShowDetail;