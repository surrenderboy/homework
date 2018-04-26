/* eslint-disable jsx-a11y/click-events-have-key-events,
  jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import './PreviewImage.css';

class PreviewImage extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
  };
  static defaultProps = {
    className: '',
    onClick() {},
  };

  constructor(props) {
    super(props);

    this.show = this.show.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    isHidden: true,
  };

  componentDidMount() {
    if (this.image && this.image.naturalHeight > 0) {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({
        isHidden: false,
      });
    }
  }

  handleClick() {
    const { onClick, id } = this.props;

    onClick(id);
  }

  show() {
    this.setState({
      isHidden: false,
    });
  }

  img = React.createRef();

  render() {
    const { className, src, alt } = this.props;

    return (
      <img
        ref={this.img}
        onLoad={this.show}
        className={`preview-image ${this.state.isHidden ? 'preview-image__hidden' : ''} ${className}`}
        src={src}
        alt={alt}
        onClick={this.handleClick}
      />
    );
  }
}

export default PreviewImage;
