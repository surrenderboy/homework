import React from 'react';
import Collection from "./Collection";

const THRESHOLD = 1000;

class InfiniteCollection extends React.Component {
  constructor(props) {
    super(props);

    this.onScroll = this.onScroll.bind(this);
    this.setContainer = this.setContainer.bind(this);
  }

  componentDidMount() {
    if (this.props.children.length === 0) this.onScroll();

    this.container.addEventListener('scroll', this.onScroll, { passive: true });
  }

  componentWillUnmount() {
    this.container.removeEventListener('scroll', this.onScroll);
  }

  onScroll() {
    if (!this.container || this.props.isFetching) return;

    let scrollPosition, containerSize, scrollSize;

    const scrollHeight = this.container.scrollHeight;
    const containerHeight = this.container.clientHeight;

    if (scrollHeight !== containerHeight) {
      scrollPosition = this.container.scrollTop;
      containerSize = containerHeight;
      scrollSize = scrollHeight;
    } else {
      scrollPosition = this.container.scrollLeft;
      containerSize = this.container.clientWidth;
      scrollSize = this.container.scrollWidth;
    }

    if (scrollPosition + containerSize >= scrollSize - THRESHOLD) this.props.fetchNext();
  }

  setContainer(container) {
    this.container = container;
  }

  render() {
    return (
      <div>
        <Collection bindRef={this.setContainer}>
          {this.props.children}
        </Collection>
      </div>
    );
  }
}

export default InfiniteCollection;
