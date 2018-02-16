import React from 'react'
import { Row, Col, Panel, Label, Button, Table, PageHeader } from 'react-bootstrap'
import ClaimModal from './ClaimModal';

class PlayerItem extends React.Component {
    
    constructor(props) {
        super(props)
        this.popup = this.popup.bind(this)
        this.close = this.close.bind(this)
        this.submit = this.submit.bind(this)
        
        this.state = {
            show: false
        }
    }

    popup(props) {
        this.setState({
            show: true
        })
    }

    close() {
        this.setState({
            show: false
        })
    }

    submit() {
        console.log(`Badge #${this.props.id} has been claimed!`)

        this.setState({
            show: false
        })
    }

    render() {
        return (
            <div>
                <Row>
                    <Panel bsStyle='primary'>
                        <Panel.Heading>
                            <Panel.Title><h4>Badge #{ this.props.id }</h4></Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>Wins</th>
                                        <th>Losses</th>
                                        <th>Ties</th>
                                        <th>Last Game</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{ this.props.wins }</td>
                                        <td>{ this.props.losses }</td>
                                        <td>{ this.props.ties }</td>
                                        <td>
                                        {
                                            new Intl.DateTimeFormat('en-US', { 
                                                year: 'numeric', 
                                                month: 'long', 
                                                day: '2-digit',
                                                hour: 'numeric',
                                                minute: 'numeric'
                                                }).format(new Date())
                                        }
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Button bsStyle='info' className='pull-right' onClick={() => this.popup(this.props)}>Claim ID</Button>
                        </Panel.Body>
                    </Panel>
                </Row>
                <ClaimModal show={this.state.show} id={this.props.id} close={this.close} submit={this.submit} />
            </div>
        )
    }
}

export default PlayerItem