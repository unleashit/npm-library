import React from "react";

class AsyncLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  async componentDidMount() {
    const data = await this.props.loader();
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    return data ? this.props.children(data) : null;
  }
}

export default AsyncLoader;
