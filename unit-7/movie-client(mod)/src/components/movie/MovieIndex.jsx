import { useState, useEffect } from 'react';
import MovieCreate from './MovieCreate';
import MovieTable from './MovieTable';
import { Col, Container, Row } from 'reactstrap';

export default function MovieIndex(props) {
    // state to house movie data
    const [ movies, setMovies ] = useState([]);

    // Build the movie GET fetch here in index so movies can be passed to any child component
    const fetchMovies = async () => {
        const url = "http://localhost:4000/movies/";

        const requestOptions = {
            method: 'GET',
            headers: new Headers({
                "Authorization": props.token
            })
        }

        try {
            const res = await fetch(url, requestOptions);
            const data = await res.json();
            // console.log(data);
            setMovies(data.getAllMovies);

        } catch (err) {
            console.log(err);
        }
    }

    // Use useEffect to run the fetch function to check for and maintain our token
    useEffect(() => {
        if(props.token) {
            fetchMovies();
        }
    }, [props.token])

  return (
    <>
        <Container>
            <Row>
                <Col md="4">
                    <MovieCreate token={props.token} fetchMovies={fetchMovies}/>
                </Col>
                <Col md="8">
                    <MovieTable movies={movies} token={props.token} fetchMovies={fetchMovies}/>
                </Col>
            </Row>
        </Container>
    </>
  )
}