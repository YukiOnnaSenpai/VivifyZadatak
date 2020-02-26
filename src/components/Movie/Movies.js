import React, { Component } from 'react';
import MovieList from './MovieList';
import AddCard from './AddCard';
import MovieService from '../../services/MovieService';

export default class Movies extends Component {

    constructor() {
        super();

        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        this.setState(() => ({ movies: MovieService.getMovies() }));
    }

    movieAdded(movie) {
        this.setState(() => ({movies: [...this.state.movies, movie]}));
    }

    render() {
        return (
            <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">                    
                    <div className="col-sm-12">
                        <MovieList movies={this.state.movies} />
                        <AddCard onMovieAdded={movie => this.movieAdded(movie)}/>
                    </div>
                </div>
            </div>
        );
    }
}