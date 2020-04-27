import React, {Component} from 'react';
// import './charDetails.css';
import styled from 'styled-components';

const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {
    Field
};


const Header = styled.h4` 
    margin-bottom: 20px;
    text-align: center;
`;

const CharDetailsRound = styled.div` 
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`;

// const SelectError = styled.div`
//     color: #fff;
//     text-align: center;
//     font-size: 26px;
// `;

export default class ItemrDetails extends Component {
    state = {
        item: null
    }

    componentDidMount(){
        this.updateItem()
    }

    componentDidUpdate(prevProps){
        if(this.props.itemId !== prevProps.itemId){
            this.updateItem();
        }
    }

    updateItem(){
        const{itemId, getData} = this.props;
        if(!itemId){
            return;
        }
        getData(itemId)
            .then((item)=>{
                this.setState({item})
            })
    }
    render() {

        if(!this.state.item){
            return <span className='select-error'>Please select item in the list</span>
        }
        const{item} = this.state;
        const{name} = item;

        return (
            <CharDetailsRound>
                <Header>{name}</Header>
                <ul className="list-group list-group-flush">
                  { 
                  React.Children.map(this.props.children, (child)=>{
                    return React.cloneElement(child, {item})
                   })
                   }
                </ul>
            </CharDetailsRound>
        );
    }
}