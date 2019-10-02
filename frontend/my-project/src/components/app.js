import { h, Component } from 'preact';
import Button from './button/button';
import './styles.css';

export default class App extends Component {
    state = {
        soundName: [],
    }

    async componentDidMount() {
        fetch('http://localhost:3000/listing/')
            .then(res => res.json())
            .then(sounds => this.setState({soundName: sounds}));
    }

    playSound = (i) => {
        console.log(this.state)
        fetch('http://localhost:3000/play', {
            method: 'POST',
            body: JSON.stringify(this.state.soundName[i]),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    };


    render() {
        return (
            <div id="app">
                {this.state.soundName.map((button,i) =>
                        <Button key={i}
                        soundName={this.state.soundName[i].name.split(".")[0]}
                        playSound={() => this.playSound(i)}/>
                )}
            </div>
        );
    }
}
