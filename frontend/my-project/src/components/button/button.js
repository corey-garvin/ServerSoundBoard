import {h, Component} from 'preact';
import './styles.css';

export default class Button extends Component {

    render() {
        return <button id="button" onClick={this.props.playSound}>{this.props.soundName}</button>
    }
}
