import React, {Component} from 'react';
// import './randomChar.css';
import styled from 'styled-components';

const RandomBlockRounded = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`;

const RandomBlockHeader = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`;

const SpanTerm = styled.span`
    font-weight: bold;
`;
export default class RandomChar extends Component {

    render() {

        return (
            <RandomBlockRounded>
                <RandomBlockHeader>Random Character: John</RandomBlockHeader>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <SpanTerm>Gender </SpanTerm>
                        <span>male</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <SpanTerm>Born </SpanTerm>
                        <span>11.03.1039</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <SpanTerm>Died </SpanTerm>
                        <span>13.09.1089</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <SpanTerm>Culture </SpanTerm>
                        <span>Anarchy</span>
                    </li>
                </ul>
            </RandomBlockRounded>
        );
    }
}
