  import React, { Component } from 'react';
import {
  Carousel,CarouselItem,CarouselControl,CarouselIndicators, CarouselCaption
} from 'reactstrap';
import '../Slider.css'

const items = [
  {
    src: 'https://www.blms.io/wp-content/uploads/2018/09/2017-fall-home-decor-trends-1.jpg' ,
  },
  {
    src: 'https://scstylecaster.files.wordpress.com/2017/12/gorgeous-bright-living-room.jpg',
  //   altText: 'Slide 2',
  //   caption: 'Slide 2'
  // 
},
  {

    src: 'https://cdn2.atlantamagazine.com/wp-content/uploads/sites/4/2018/08/0718_WhitneyDurham5_LauraNegriChilders_oneuseonly.jpg',

    // altText: 'Slide 3',
    // caption: 'Slide 3'
  }
];

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {


    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem  className='images'
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel className='slides'
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>

    );
  }
}


export default Example;