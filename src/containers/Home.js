import React from 'react'
import { getSiteProps } from 'react-static'
//

class Container extends React.Component {
  render() {
    return (
      <div>
        <Main items={this.props.items} />
      </div>
    );
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };

    this.handleIsActiveChange = this.handleIsActiveChange.bind(this);
  }

  handleIsActiveChange(itemId, isActive) {
    this.setState({
      activeItem: isActive ? itemId : null,
      activeClassName: isActive ? "active" : "inactive",
    });
  }

  render() {
    const squares = this.props.items.map((item) => (
        <Square
          key={item.id}
          id={item.id}
          title={item.title}
          message={item.message}
          isActive={this.state.activeItem === item.id}
          className = { this.state.activeItem === item.id ? this.state.activeClassName  : "inactive"}
          onIsActiveChange={this.handleIsActiveChange}
        />
      ));

    return (
      <div className="main">
        {squares}
      </div>
    );

  }
}

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.handleIsActiveChange = this.handleIsActiveChange.bind(this);
  }

  handleIsActiveChange(e) {
    this.props.onIsActiveChange(
      this.props.id,
      !this.props.isActive
    );
  }
  render() {
    const item = this.props.item;
    // console.log( item );

    return (
      <div
        onClick={this.handleIsActiveChange}
        className={this.props.className}
        id={this.props.title}
      >
        <h2> {this.props.title}  </h2>
        <div className='message'> {this.props.message} </div>
      </div>
    );
  }
}


const ITEMS = [
  {id: 1,  title: 'brands', message: 'Brand copy here'},
  {id: 2, title: 'generate', message: 'Generate copy here'},
  {id: 3, title: 'leads', message: 'Leads copy here'},
  {id: 4, title: 'campaigns', message: 'Campaigns copy here'},
  {id: 5, title: 'build', message: 'Build copy here'},
  {id: 6, title: 'users', message: 'Users copy here'},
  {id: 7, title: 'experiences', message: 'Experiences copy here'},
  {id: 8, title: 'engage', message: 'Engage copy here'},
  {id: 9, title: 'customers', message: 'Customers copy here'},
  {id: 10, title: 'interactions', message: 'Interactions copy here'},
  {id: 11, title: 'attract', message: 'Attract copy here'},
  {id: 12, title: 'people', message: 'People copy here'},
];
export default () => (
    <Container items={ITEMS} />
)
