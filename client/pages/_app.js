import App, {Container} from 'next/app';

export default class MyApp extends App {
  render() {
    const {Component} = this.props;
    return (
      <div>
        <div> Standalone Text</div>
        <Component />
      </div>
    )
  }
}
