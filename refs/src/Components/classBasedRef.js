import React from 'react';

class classBasedRef extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  onClick() {
    console.log(this.myRef);
    this.myRef.current.focus();
  }
  render() {
    return (
      <div>
        <div>
          <input ref={this.myRef} />
          <button onClick={this.onClick.bind(this)}>Click to Focus</button>
        </div>
      </div>
    );
  }
}

export default classBasedRef;
