import React from 'react';

interface IBuggyComponentState {
  error: boolean;
}

interface IBuggyComponentProps {}

class BuggyComponent extends React.Component<
  IBuggyComponentProps,
  IBuggyComponentState
> {
  constructor(props: IBuggyComponentProps) {
    super(props);
    this.state = {
      error: false,
    };
  }

  handleClick = () => {
    this.setState({ error: true });
  };

  render() {
    if (this.state.error) {
      throw new Error(
        'Thank you mario! But our princess is in another castle!'
      );
    }

    return <button onClick={this.handleClick}>Find Princess (error)</button>;
  }
}

export default BuggyComponent;
