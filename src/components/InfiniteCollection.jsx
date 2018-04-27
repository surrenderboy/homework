import React from 'react';
import PropTypes from 'prop-types';

import Collection from './Collection';

import './InfiniteCollection.css';

const THRESHOLD = 1000;

class InfiniteCollection extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    isFetching: PropTypes.bool,
    fetchNext: PropTypes.func,
  };
  static defaultProps = {
    isFetching: false,
    fetchNext() {},
  };

  constructor(props) {
    super(props);

    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    if (this.props.children.length === 0) this.props.fetchNext();
  }

  onScroll(event) {
    const container = event.target;
    if (!container || this.props.isFetching) return;

    let scrollPosition;
    let containerSize;
    let scrollSize;

    const { scrollHeight } = container;
    const containerHeight = container.clientHeight;

    if (scrollHeight !== containerHeight) {
      scrollPosition = container.scrollTop;
      containerSize = containerHeight;
      scrollSize = scrollHeight;
    } else {
      scrollPosition = container.scrollLeft;
      containerSize = container.clientWidth;
      scrollSize = container.scrollWidth;
    }

    if (scrollPosition + containerSize >= scrollSize - THRESHOLD) this.props.fetchNext();
  }

  render() {
    return (
      <div className="infinite-collection" onScroll={this.onScroll}>
        <Collection>
          { this.props.children }
        </Collection>
      </div>
    );
  }
}

export default InfiniteCollection;
