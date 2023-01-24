import React from 'react';
import { Container, Table, Button, Modal, ModalBody, ModalHeader, ModalFooter} from "reactstrap";

class App extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            DataisLoaded: false,
        };
    }
    componentDidMount() {
        fetch('https://fcwgm202i9.execute-api.us-east-1.amazonaws.com/posts')
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,    
                    DataisLoaded: true
                });
            })
    }
    render(){
        const { DataisLoaded, items} = this.state;
        if (!DataisLoaded) return <div className="m-0 row justify-content-center">
            <div className="spinner-grow text-muted"></div>
            <div className="spinner-grow text-muted"></div>
            <div className="spinner-grow text-primary"></div>
            <div className="spinner-grow text-success"></div>
            <div className="spinner-grow text-info"></div>
            <div className="spinner-grow text-warning"></div>
            <div className="spinner-grow text-danger"></div>
            <div className="spinner-grow text-secondary"></div>
            <div className="spinner-grow text-dark"></div>
            <div className="spinner-grow text-light"></div>
            </div> ;
        return(
            <>
            <Container>
                 <Table>
                        {
                            items.map((item) => ( 
                            <tbody key = { item.id } >
                                <tr>
                                    <td><h5>{ item.id }</h5></td>
                                </tr>
                                <tr>
                                    <td><h5> { item.name } </h5></td>
                                </tr>                          
                                <tr>
                                    <td><h5>{ item.address }</h5></td>
                                </tr>                              
                            </tbody>                        
                            ))
                        }
                        
                </Table>
            </Container>
            </>
        );
    }
}
export default App;