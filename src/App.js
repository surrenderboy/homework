import React, { Component } from 'react';
import './App.css';

import Collection from './Collection.js';
import Gallery from "./Gallery";
import PreviewImage from "./PreviewImage";
import Spinner from "./Spinner";

class App extends Component {
  state = {
    isLoading: true,
    selectedItemIndex: -1,
    items: []
  };

  constructor(props) {
    super(props);

    this.hasNext = this.hasNext.bind(this);
    this.hasPrev = this.hasPrev.bind(this);
    this.openGallery = this.openGallery.bind(this);
    this.closePreview = this.closePreview.bind(this);
    this.showNext = this.showNext.bind(this);
    this.showPrev = this.showPrev.bind(this);
  }


  componentDidMount() {
    fetch('/api/podhistory/')
      .then(response => response.json())
      .then(data =>
        this.setState({
          isLoading: false,
          items: data.entries.slice(0, 12)
        })
      );
  }

  hasNext() {
    return this.state.selectedItemIndex + 1 < this.state.items.length;
  }

  hasPrev() {
    return this.state.selectedItemIndex > 0;
  }

  openGallery(item) {
    this.setState(prevState => (
      { selectedItemIndex: prevState.items.indexOf(item) }
    ));
  }

  closePreview() {
    this.setState({
      selectedItemIndex: -1,
    });
  }

  showNext() {
    if (!this.hasNext()) return;

    this.setState(prevState => (
      { selectedItemIndex: prevState.selectedItemIndex + 1 }
    ));
  }

  showPrev() {
    if (!this.hasPrev()) return;

    this.setState(prevState => (
      { selectedItemIndex: prevState.selectedItemIndex - 1 }
    ));
  }

  render() {
    const previewIsOpen = this.state.selectedItemIndex >= 0;

    return(
      <div className="app">
        {this.state.isLoading && <Spinner className="app__spinner" />}

        <Collection>
          {
            this.state.items.map(item =>
              <PreviewImage key={item.id} image={item} handleClick={this.openGallery}/>
            )
          }
        </Collection>

        {
          previewIsOpen &&
            <Gallery
              item={this.state.items[this.state.selectedItemIndex]}
              hasNext={this.hasNext}
              hasPrev={this.hasPrev}
              handleClose={this.closePreview}
              handleNext={this.showNext}
              handlePrev={this.showPrev}
            />
        }
      </div>
    );
  }
}

export default App;
