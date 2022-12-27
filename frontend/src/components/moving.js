import React from 'react';

class MovingText extends React.Component {
  state = {
    text: 'Full Stack NLP Question and Answering Using FastAPI, MangoDB, and React',
    position: -800,
  };

  componentDidMount() {
    // Start the animation loop
    this.animateText();
  }

  animateText = () => {
    // Update the position of the text
    this.setState(prevState => ({
      position: prevState.position === -800 ? +800 : prevState.position - 1
    }));

    // Animate the text again after a certain delay
    setTimeout(this.animateText, 20);
  }

  render() {
    const { text, position } = this.state;

    return (
      <div className="card text-white bg-primary mb-1" styleName="max-width: 20rem;"
            style={{"height":"50px","font-size": "30px", overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div style={{ position: 'relative', left: position }}>{text}</div>
      </div>
    );
  }
}

export default MovingText;
