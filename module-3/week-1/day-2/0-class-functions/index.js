class Component {
  constructor(props) {
    this.props = props;
  }

  setState() {
    // console.log(this.props);
    console.log("Setting something...");
  }
}

class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
  }
}

const instance = new MyComponent({ lastName: "Doe", firstName: "John" });

instance.render();

function MyOtherComponent(props) {}
