
import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
    };

    styles = {
        fontSize: 6,
        fontWeight: 'bold'
    };
    render() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";

        return (
            <div>
                <span style={this.styles} className={this.classes} >{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? <h1>Zero</h1> : count;
    }
}

export default Counter;