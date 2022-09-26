import { Component } from 'react';

import { Controls } from './Controls';

export class Reader extends Component  {
  state = {
    index: 0
  }

  changeIndex = (value) => {
    this.setState(state => ({ index: state.index + value }))
  }
  
  onPrev = () => {
    this.setState(state => ({ index: state.index - 1 }))
  };
  
  onNext = () => {
    this.setState(state => ({ index: state.index + 1 }))
  };

  render() {
      
    console.log(this.props.items[this.state.index]);
    const currentItem = this.props.items[this.state.index];

        return (
            <div>
            {/* <!-- Разметка компонента <Controls> --> */}
            <Controls
              onChangeIndex={this.changeIndex}
              currentItem={this.state.index + 1}
              totalItems={this.props.items.length}
            />
            {/* <section>
              <button
                type="button"
                onClick={() => (this.changeIndex(-1))}
                disabled={this.state.index === 0}
              >Назад</button>
              <button
                type="button"
                onClick={() => (this.changeIndex(1))}
                disabled={this.state.index === this.props.items.length - 1}
              >Вперед</button>
            </section> */}
            
            {/* <!-- Разметка компонента <Progress> --> */}
            <p>{this.state.index + 1}/{this.props.items.length}</p>
            
            {/* <!-- Разметка компонента <Publication> --> */}
            <article>
              <h2>{currentItem.title}</h2>
              <p>{currentItem.text}</p>
            </article>
          </div>
        )
    }
}