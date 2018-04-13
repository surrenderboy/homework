import React from 'react';

import './PreviewImage.css';

class PreviewImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: true,
    };

    this.handleClick = this.handleClick.bind(this);
    this.show = this.show.bind(this);
  }

  componentDidMount() {
    if (this.image && this.image.naturalHeight > 0) {
      this.setState({
        hidden: false,
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

  render() {
    const { className, src, alt } = this.props;

    return (
      <img
        ref={image => this.image = image}
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
