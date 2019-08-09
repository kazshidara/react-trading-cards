class About extends React.Component {
    render(){
        return <div>
                    <img src="/static/img/polymorphism.jpg"></img>
                    <h2>About the Author</h2>
                    <p>Trading card site was brought to you by Tyler and Kaz!</p>
                </div>
    }
}

ReactDOM.render(<About />, document.getElementById('bio'));