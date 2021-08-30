import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ClaimButton from "./ClaimButton";

export default function Countdown() {
    const utcDate = Date.UTC(2021,8,1,20);

    const [days, setDays] = useState(0);
    const [hr, setHr] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            
        // Get today's date and time
        var now = new Date();

        // Find the distance between now and the count down date
        var distance = utcDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setDays(days);
        setHr(hours);
        setMin(minutes);
        setSec(seconds);

        }, 1000);
        return () => clearTimeout(timer);
      }, []);
    

    return (
            <div style={{overflow: 'hidden'}}>
            <Container>
                <Row className="mb-5">
                    <Col lg="6"  md="12">
                        <img id="Mask_Group_11" alt="" src="/img/Mask_Group_11.png" />
                        <img id="Mask_Group_37" alt="" src="/img/Mask_Group_33.png" />
                        <img id="Clown1" alt="" src="/img/Clown1.png" />
                        <img id="Mask_Group_10" alt="" src="/img/Mask_Group_10.png" />
                        <img id="Mask_Group_9" alt="" src="/img/Mask_Group_9.png" />
                        <img id="Mask_Group_5" alt="" src="/img/Mask_Group_5.png" />

                        <svg className="Union_2" viewBox="-10 -10 350 350">
                            <path id="Union_2" d="M 30.48724365234375 133.7037963867188 C 30.48724365234375 113.5083236694336 35.26175308227539 94.36210632324219 43.81233596801758 77.19657897949219 C 22.32898902893066 60.4134407043457 -1.58664608001709 35.23154830932617 0.08212340623140335 7.146937370300293 C 9.58573055267334 26.54001045227051 39.55623245239258 40.33237075805664 63.17194366455078 48.52211380004883 C 89.32957458496094 18.88452339172363 128.8631896972656 0 173.0992889404297 0 C 251.8619079589844 0 315.7129211425781 59.86260223388672 315.7129211425781 133.7037963867188 C 315.7129211425781 207.5449676513672 251.8619079589844 267.404052734375 173.0992889404297 267.404052734375 C 94.33744812011719 267.404052734375 30.48724365234375 207.5449676513672 30.48724365234375 133.7037963867188 Z">
                            </path>
                        </svg>
                        <img id="Mask_Group_19" alt="" src="/img/Elon2.JPG" />
                        <img className="logo" alt="" src="/img/logo.png" style={{ marginTop: '40px', marginBottom: '40px' }}/>
                        <h2><span className="main-color mb-5">First NFTs</span> on the Internet Computer</h2>
                        <p className="mt-5">10,000 randomly generated, unique collectible clowns with proof of ownership stored on the Internet Computer blockchain. Created as a reference to a meme comparing the Internet Computer token (ICP) with the Insane Clown Posse - an American hip hop duo founded in 1989.</p>
                    </Col>
                </Row>
                <Row className="mt-5 mb-5">
                    <Col lg="6" md="12" className="text-center">
                        <h2>Drop countdown</h2>
                    </Col>
                </Row>
                <Row className="mb-5 text-center">
                    <Col lg="6" md="12">
                        <Row className="counter">
                            <Col xs="3">
                                <div className="button-wrapper dark-background mx-auto"><div className="button main-background"><p className="timer">{days}</p></div></div>
                                <p>DAY</p>
                            </Col>
                            <Col xs="3">
                                <div className="button-wrapper dark-background mx-auto"><div className="button main-background"><p className="timer">{hr}</p></div></div>
                                <p>HR</p>
                            </Col>
                            <Col xs="3">
                                <div className="button-wrapper dark-background mx-auto"><div className="button main-background"><p className="timer">{min}</p></div></div>
                                <p>MIN</p>
                            </Col>
                            <Col xs="3">
                                <div className="button-wrapper dark-background mx-auto"><div className="button main-background"><p className="timer">{sec}</p></div></div>
                                <p>SEC</p>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <ClaimButton />
                        </Row>
                    </Col>
                </Row>
            </Container>
            </div>
    )
}