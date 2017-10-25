import React from 'react'
import { getSiteProps } from 'react-static'

import styled from 'styled-components';

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

const StyledMain = styled.div`
  grid-area: main;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 25vh;
  grid-gap: 0px;
`

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
          link={item.link}
          isActive={this.state.activeItem === item.id}
          className = { this.state.activeItem === item.id ? this.state.activeClassName  : "inactive"}
          onIsActiveChange={this.handleIsActiveChange}
          background={item.background}
        />
      ));

    return (
      <StyledMain className="main">
        {squares}
      </StyledMain>
    );

  }
}

const StyledSquare = styled.div`
  background-image:url(${props => props.background});
  padding: 2em;
`

const SquareH2 = styled.h2`
  color: darkgoldenrod;
  font-family: 'Oswald', sans-serif;
  font-size: 1.2em;
  text-transform: capitalize;
`;


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
      <StyledSquare
        onClick={this.handleIsActiveChange}
        className={this.props.className}
        id={this.props.title}
        background={this.props.background}
        // style={background-image:url({this.props.background})}
      >
        <SquareH2> {this.props.title}  </SquareH2>
        <div className='message' > <p>{this.props.message}
          <a href={this.props.link}>{this.props.link}</a>
        </p> </div>
      </StyledSquare>
    );
  }
}


const ITEMS = [
  {id: 1,
    title: 'brands',
    message: "They frame the conversation. Add context and meaning. A coherent brand delivers <em>tangible value</em>. ",
    link:'/espressoluv',
    background: 'https://davelindberg.github.io/assets/images/signboard.jpg'
  },
  {id: 2,
    title: 'generate',
    message: 'Generate copy here',
    link: '',
    background:
    'https://davelindberg.github.io/assets/images/meshpipe.jpg'
  },
  {id: 3,
    title: 'leads',
    message: 'Leads copy here',
    link: '',
    background: 'https://davelindberg.github.io/assets/images/seedlings.jpg'
  },
  {id: 4,
    title: 'campaigns',
    message: 'Campaigns copy here',
    link: '',
    background: 'https://davelindberg.github.io/assets/images/ovr_tile.jpg'
  },
  {id: 5,
    title: 'build',
    message: 'Build copy here',
    link: "",
    background: 'https://davelindberg.github.io/assets/images/grassy.jpg',
  },
  {id: 6,
    title: 'users',
    message: 'Users copy here',
    link: "",
    background: 'https://davelindberg.github.io/assets/images/man_on_beach.jpg'
  },
  {id: 7,
    title: 'experiences',
    message: 'Experiences copy here',
    link: "",
    background: 'https://davelindberg.github.io/assets/images/sky.jpg'
  },
  {id: 8,
    title: 'engage',
    message: 'Engage copy here',
    link: "",
    background: 'https://davelindberg.github.io/assets/images/mychart-rev.jpg'
  },
  {id: 9,
    title: 'customers',
    message: 'Customers copy here',
    link: "",
    background: 'https://davelindberg.github.io/assets/images/jimbo.jpg'
  },
  {id: 10,
    title: 'interactions',
    message: 'Interactions copy here',
    link: "",
    background: 'https://davelindberg.github.io/assets/images/iStock-176759492.jpg'
  },
  {id: 11,
    title: 'attract',
    message: 'Attract copy here',
    link: "",
    background: 'https://davelindberg.github.io/assets/images/iStock-514618014.jpg'
  },
  {id: 12,
    title: 'people',
    message: 'People copy here',
    link: "",
    background: 'https://davelindberg.github.io/assets/images/486968772_fpo.jpg'
  },
];
export default () => (
    <Container items={ITEMS} />
)
