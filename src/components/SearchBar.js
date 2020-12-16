import React from "react";

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = { searchTerm: ""}
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.searchTerm);
    }
    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text"
                            placeholder="Start Typing . . . ."
                            value={this.state.searchTerm}
                            onChange={ e => this.setState({searchTerm: e.target.value})}
                        />
                    </div>
                </form>
                
            </div>
        )
    }
}

export default SearchBar;