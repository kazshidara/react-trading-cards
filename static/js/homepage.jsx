class Homepage extends React.Component {
	render(){
		return <div>
                    <img src="/static/img/balloonicorn.jpg"></img>
                    <h2>Welcome!</h2>
	                <a href='/cards'>Cards</a>
                </div>
    }
}

ReactDOM.render(<Homepage />, document.getElementById('app'));