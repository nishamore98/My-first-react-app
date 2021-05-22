import {Row, Col} from 'react-bootstrap';

function Features(){
    return (
        <div id="features" className="menuSections">
            <h1>Features</h1>
            <Row className="m-0">
            <Col xs={12} sm={6} className="mySections">
                <div className="mysectiontext">
                <Row>
                    <Col sm={4}>
                    <dl>
                        <dt>Loren</dt>
                        <dd>Ipsum</dd>
                        <dt>Loren ipsum</dt>
                        <dd>Lipsum</dd>
                    </dl>
                    </Col>
                    <Col sm={4}>
                    <dl>
                        <dt>Loren</dt>
                        <dd>Ipsum</dd>
                        <dt>Loren ipsum</dt>
                        <dd>Lipsum</dd>
                    </dl>
                    </Col>
                    <Col sm={4}>
                    <dl>
                        <dt>Loren</dt>
                        <dd>Ipsum</dd>
                        <dt>Loren ipsum</dt>
                        <dd>Lipsum</dd>
                    </dl>
                    </Col>
                </Row>
                </div>
            </Col>
            
            <Col xs={12} sm={6} className="mySections">
                <div className="mysectiontext">
                <Row>
                    <Col>
                        <ol>
                            <li>loren ipsum</li>
                            <li>loren ipsum</li>
                            <li>loren ipsum</li>
                            <li>loren ipsum</li>
                            <li>loren ipsum</li>
                        </ol>
                    </Col>
                    <Col>
                        <ul>
                            <li>loren ipsum</li>
                            <li>loren ipsum</li>
                            <li>loren ipsum</li>
                            <li>loren ipsum</li>
                            <li>loren ipsum</li>
                        </ul>
                    </Col>
                    <Col>
                        <strong> Select Your Age</strong><br/>
                        <input type="radio" name="age"/>
                        <label>0-30</label><br/>
                        <input type="radio" name="age" />
                        <label>31-60</label><br/>
                        <input type="radio" name="age"/>
                        <label>61-100</label>
                    </Col>
                </Row>
                </div>
            </Col>
            </Row>
        </div>     
    )
}

export default Features;