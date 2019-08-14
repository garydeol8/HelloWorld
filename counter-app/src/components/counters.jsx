import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 6 },
      { id: 3, value: 2 },
      { id: 4, value: 5 },
      { id: 5, value: 0 }
    ]
    };

    handleDelete = () => {
        console.log("Delete event handler.");
    }

  render() {
    return (
      <div>
            {this.state.counters.map(counter =>
                <Counter key={counter.id} value={counter.value} id={counter.id} onDelete={this.handleDelete} >
                </Counter>
            )}
      </div>
    );
  }
}

export default Counters;
