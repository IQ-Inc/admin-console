import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap'

import PlayerItem from './PlayerItem'

const PlayerList = (props) => (
    <div>
        <Grid>
            <Row>
                <Col xs={12}>
                    <h1>Unclaimed Badge IDs</h1>
                </Col>
            </Row>
            <hr />
            {
                props.players.map((player) => {
                    return <PlayerItem 
                                key={player.badge} 
                                id={player.badge} 
                                wins={player.wins} 
                                losses={player.wins}
                                ties={player.ties} 
                                lastgame={player.lastgame} />
                })
            }
        </Grid>
    </div>
)

export default PlayerList