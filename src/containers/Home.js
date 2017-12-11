import React from 'react'
import { getSiteProps } from 'react-static'

import styled from 'styled-components';

/*
olive      #999900 // olive
gold       #CC9900
blue       #2D7173
orange     #B26330
red        #94353C
gray       #796969
light-grey #ADA0A0
*/

const ContainerDiv =styled.div`
  display: grid;
`

const Headline = styled.h1`
  color: #CC9900;
  font-family: 'Oswald', sans-serif;
  font-size: 4em;
  text-transform: capitalize;
  text-align: center;
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  @media (max-width: 767px) {
    font-size: 3em;
  }
`

class Container extends React.Component {
  render() {
    return (
      <ContainerDiv className='container'>
        <Main items={this.props.items} />
      </ContainerDiv>
    );
  }
}

const StyledMain = styled.div`
  grid-area: main;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: minmax(100px, auto) repeat(4,20vh);
  grid-auto-rows: 0px;
  grid-gap: 0px;
  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: minmax(60px, auto) repeat(6,14vh);
  }
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
          cta = { item.cta }
        />
      ));

    return (
      <StyledMain className="main" id="marketing">
      <Headline><span>Growing Your Business Takes </span><br />
        More Than a Web Site.
      </Headline>
        {squares}
      </StyledMain>
    );

  }
}
const StyledSquare = styled.div`
  background-image:url(${props => props.background});
  padding: 0em;
`
const ColorOverlay = styled.div`
  padding: 2em;
  @media (max-width: 767px) {
    padding: 1em 0;
  }

`
const Closer = styled.div`
  color: #ffffff;
  cursor: pointer;
`
const SquareH2 = styled.h2`
  color: darkgoldenrod;
  font-family: 'Oswald', sans-serif;
  font-size: 1.2em;
  text-transform: capitalize;
  @media (max-width: 767px) {
    font-size: 1em;
  }

`
const Message = styled.p`
  color: #ffffff;
  text-align: center;
  font-size: 1.4em;
  font-weight: 100;
  line-height:2em;
`
const LinkButton = styled.a`
  display: block;
  color: #CC9900 !important;
  font-size: 1.4em;
  font-weight: 400;
  background: rgba(0,0,0, 0.6);
  padding: .5em 2em;
  border: 3px solid #CC9900;
  border-radius: 6px;
`

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
        <ColorOverlay className='color-overlay'>
        <Closer className='closer'>X</Closer>
          <SquareH2>
            {this.props.title}
          </SquareH2>
          <Message>
            {this.props.message}
          </Message>
          <LinkButton className='LinkButton' href={this.props.link}>{this.props.cta}</LinkButton>
        </ColorOverlay>
      </StyledSquare>
    );
  }
}


const ITEMS = [
  {id: 1,
    title: 'brands',
    message: "They frame the conversation. Add context and meaning. A coherent brand delivers tangible value. ",
    link:'/espressoluv',
    cta:"Case Study: EspressoLuv",
    background: 'https://davelindberg.github.io/assets/images/espressoluv.png'
  },
  {id: 2,
    title: 'generate',
    message: 'A successful marketing plan produces the right kind of traffic and a meaningful message. The result? A profitable return on investment.',
    link: '#',
    cta: "Link to come",
    background:'https://davelindberg.github.io/assets/images/meshpipe.jpg'
  },
  {id: 3,
    title: 'leads',
    message: "Connecting with people when they’re at a specific point in the purchase process. Awareness leads to interest; interest leads to action. Actions lead to leads.",
    link: '/tim-clue',
    cta: "Case Study: Tim Clue",
    background: 'https://davelindberg.github.io/assets/images/timclue.jpg'
  },
  {id: 4,
    title: 'campaigns',
    message: "Regardless of the media or the budget: we make it memorable. And ensure it’s actionable.",
    link: '/glens-falls-hospital',
    cta: "Case Study: Glens Falls Hospital",
    background: 'https://davelindberg.github.io/assets/images/mychart-rev.jpg'
  },
  {id: 5,
    title: 'build',
    message: "Deep experience in Wordpress and WooCommerce. Certified BigCommerce partner. We build sites that sell.",
    link: "/ecommerce",
    cta: "Ecommerce: Planning for Success",
    background: 'https://davelindberg.github.io/assets/images/matrix.jpg'
  },
  {id: 6,
    title: 'users',
    message: "At the core of all our work, you’ll find user-centered design. From marketing to UI to print, results happen when people can meet their needs.",
    link: "/upper-valley-aquatic-center",
    cta: "Case Study: Upper Valley Aquatic Center",
    background: 'https://davelindberg.github.io/assets/images/streamline.png'
  },
  {id: 7,
    title: 'experiences',
    message: "Every user’s experience contributes directly to your bottom line.  Our extensive experience contributes directly to theirs.",
    link: "/contact",
    cta: "Work with us",
    background: 'https://davelindberg.github.io/assets/images/sky.jpg'
  },
  {id: 8,
    title: 'engage',
    message: '“How does this fit within my life?” As customers explore and identify, we allow the story to unfold, and guide them through the purchase process.',
    link: "/ayurvedik",
    cta: "Case Study: Ayurvedik by shaninrenee",
    background: 'https://davelindberg.github.io/assets/images/iStock-514618014.jpg'
  },
  {id: 9,
    title: 'customers',
    message: "Changing your expectations can change everything.",
    link: "/overland",
    cta: "Case Study: Overland Sheepskin",
    background: 'https://davelindberg.github.io/assets/images/ovr_tile.jpg'
  },
  {id: 10,
    title: 'interactions',
    message: "The journey from ‘potential prospect’ to ‘engaged customer’ involves a unique range of behaviors.",
    link: "/analytics",
    cta: "Read about the Customer Journey",
    background: 'https://davelindberg.github.io/assets/images/iStock-176759492.jpg'
  },
  {id: 11,
    title: 'attract',
    message: 'SEO is everywhere. Decisions on content, campaigns, coding, and communications all impact how well your web site delivers its message. ',
    link: "/search-engine-optimization",
    cta: "Modern SEO",
    background: 'https://davelindberg.github.io/assets/images/jimbo.jpg'
  },
  {id: 12,
    title: 'people',
    message: "Teamwork makes the dream work. With years of broad experience in the field, we can bring together the right mix of seasoned professionals to deliver top-quality projects of every size.",
    link: "/linkedin",
    cta: "The Network",
    background: 'https://davelindberg.github.io/assets/images/people-crowd.jpg'
  },
];
export default () => (
    <Container items={ITEMS} />
)
