import React, {Component} from 'react';
import PropTypes from 'prop-types';

//const movie = [];

class AddCard extends Component {

    constructor(props) {
        super(props); 

        this.state = {imageUrl: '',title: '',subtitle: '',description: ''};

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    static get PropTypes() {
        return{
            children: PropTypes.any,
            onMovieAdded: PropTypes.func
        };
    }

    onSubmit(e) {
        e.preventDefault();
        //movie.push([this.state.imageUrl, this.state.title, this.state.subtitle, this.state.description, manuallyAdded]);
        const movie = {
            imageUrl: this.state.imageUrl,
            title: this.state.title,
            subtitle: this.state.subtitle,
            description: this.state.description
        };
        this.props.onMovieAdded(movie);
        this.setState({
            movie: {imageUrl: '',title: '',subtitle: '',description: ''}
        });
    }

    onChange(e){ 
        this.setState({ [e.target.name] : e.target.value });
    }

    render() {
        return(
            <div className="container">
                <h1>Add new movie</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label> Image URL: </label>
                        <input
                            type="text"
                            name="imageUrl"
                            placeholder="Add url"
                            value={this.state.imageUrl}
                            onChange={this.onChange}
                            required
                        />
                    </div>
                    <div>
                        <label> Movie title: </label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Add title"
                            value={this.state.title}
                            onChange={this.onChange}
                            required
                        />
                    </div>
                    <div>
                        <label> Movie subtitle: </label>
                        <input
                            type="text"
                            name="subtitle"
                            placeholder="Add subtitle"
                            value={this.state.subtitle}
                            onChange={this.onChange}
                            required
                        />
                    </div>
                    <div>
                        <label> Movie description: </label>
                        <input
                            type="text"
                            name="description"
                            placeholder="Add description"
                            value={this.state.description}
                            onChange={this.onChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Submit"
                            className="btn"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

AddCard.propTypes = {
    children: PropTypes.any,
    onMovieAdded: PropTypes.func,
};

// AddCard.propTypes = {
//     url: PropTypes.string.isRequired,
//     title: PropTypes.object.isRequired,
//     subtitle: PropTypes.object.isRequired,
//     description: PropTypes.object.isRequired
// };

export default AddCard;
