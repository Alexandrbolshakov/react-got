import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import {CharacterPage, BooksPage, HousesPage, BooksItem} from '../pages';
import './app.css';
import gotService from '../../service/gotService';
import {BrowserRouter as Router,  Route} from 'react-router-dom';



export default class App extends Component {

    gotService = new gotService();
    state= {
           showRandomChar: true,
           error: false, 
           selectedHouse: 20
    }

    componentDidCatch(){
        this.setState({
            error: true
        })
    }

    toggleRandomChar = ()=>{
        this.setState((state)=>{
           return {showRandomChar: !state.showRandomChar
           };
        })

        };



    render(){

        if(this.state.error){
            return <ErrorMessage/>
        }

        const char = this.state.showRandomChar ? <RandomChar/> : null;
        return (
            <Router>
                <div className='app'>
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {char}
                                <button className="toggle-btn"
                                onClick = {this.toggleRandomChar}>Show Random Character</button>
                            </Col>
                        </Row>
                        <Route path="/characters" component={CharacterPage}/>                    
                        <Route path="/books" exact component={BooksPage}/>                    
                        <Route path="/houses" component={HousesPage}/>
                        <Route path="/books/:id" render={
                            ({match})=>{
                                const {id} = match.params;

                            return <BooksItem  bookId={id}/>}
                        }
                            />
                    </Container>
                </div>
            </Router>
        );
    }
    
};