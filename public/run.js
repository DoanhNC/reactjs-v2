//import Red from './components/Red';

class Yellow extends React.Component {
    getThongtin() {
        alert(123456);
    }
    render() {
        return  <div>
            <h1 className="yellow">Đây là màu vàng</h1>
            <button onClick={this.getThongtin} >Click</button>
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

