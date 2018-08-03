//import Red from './components/Red';
class Yellow extends React.Component {
    constructor(props) {;
        super(props);
        this.state = {
            'strSearch': 'anh doanh',
            'number': 10
        };
        this.addItem = this.addItem.bind(this);
    }
    addItem() {
       this.setState({number: this.state.number + 1});
    }

    render() {
        return  <div>
            <h1 className="yellow">Đây là màu vàng</h1>
            <p>Số lượng: {this.state.number}</p>
            <button onClick={this.addItem}>Tăng</button>
        </div>;
    }
}
;

ReactDOM.render(
        <div>
            <Yellow/>
        </div>,
        document.getElementById('root')
        );

