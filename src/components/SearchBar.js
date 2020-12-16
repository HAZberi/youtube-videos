import React from "react";

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = { searchTerm: ""}
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.searchTerm);
    }
    render(){
        return (
            <div className="ui segment" style={{marginTop: "1rem"}}>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label style={{textAlign: "center"}}>An Unbiased Youtube Search</label>
                        <input 
                            style={{textAlign: "center"}}
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