/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable-next-line react-hooks/exhaustive-deps */
import React from "react"
import { Link } from "react-router-dom"
import { getUserDetails, getGuilds } from "../../utils/api"
import { Col, Container, Row, Navbar, Form, Nav, Button, FormControl, Image } from 'react-bootstrap';



export function MenuComp({
    guilds,
}) {
    return (
        <section>

            <section className="title-container mt-3 hvr-buzz">
                <img src="logo.png" className="w-75  App-logo py-2 rounded-circle" alt="logo" />
            </section>
            <section className="mt-3 mb-3 border rounded btn btn-block hvr-fade">
                <h1 className="GuildsWord">Guilds</h1>
            </section>
            <section className="container">
                <div className="row">

                    {guilds.included.map(guild => (

                        <div className="col-md-3">
                            <div className="guild-Animation mt-3">
                                <div className=" guild-container">
                                    <Image src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=1024`} className="App-logo w-100 rounded-circle hvr-box-shadow-inset guild-img" thumbnail />
                                    <h2>{guild.name}</h2>
                                    <div>
                                        <Link to={`/dashboard/${guild.id}`} className="btn primary-color guild-bottom">  <h2 className="guild-link">Dashboard</h2></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                    {guilds.excluded.map(guild => (
                        <div className="col-md-3">
                            <div className="guild-Animation mt-3">
                                <div className=" guild-container">
                                    <Image src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=1024`} className="App-logo w-100 rounded-circle hvr-box-shadow-inset guild-img" thumbnail />
                                    <div>
                                        <a href={`https://discord.com/api/oauth2/authorize?client_id=825035795650969600&permissions=8&scope=bot`} className="btn primary-color guild-bottom">
                                            <h2 className="guild-link">Setup Bot</h2>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


        </section>

    );
}

export function MenuNavbar({
    guilds,
}) {
    return (
        <section className="mb-5 text-light">
            <Navbar className=" text-center" expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">  <img src="logo.png" width="30px" height="30px" className=" App-logo rounded-circle" alt="logo" />  Grondle </Navbar.Brand>

            </Navbar>
        </section>
    );
}


export function MenuFooter({
    guilds,
}) {
    return (
        <footer className="py-5 bg-blue">
            <Container>
                <h1>Menu Footer </h1>
            </Container>
        </footer>
    );
}

































/**
 *                   {/* <Card style={{ width: '16rem' }}>
                                <Card.Img variant="top" className=" w-50 rounded-circle "  src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} />
                                {/* <Card.ImgOverlay> }
                                <Card.Body>
                                    <Card.Title>{guild.name}</Card.Title>
                                    {/* <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text> }
                                </Card.Body>
                                <Card.Body>
                                    <Link to={`/dashboard/${guild.id}`} className="btn btn-outline-success btn-block">DashBoard</Link>
                                </Card.Body> {/* card footer}
                                {/* </Card.ImgOverlay> }
                            </Card> }


        <section className="mainSection">

            <section id="sidebar" className="float-left ml-2 rounded text-center">

            </section> {/* guilds Section }
            <section id="main-dashboard-content">
            <section id="grid-container">
            <section className="grid-item one py-5 bg-light">
            </section>
            <section className="grid-item two py-5 bg-dark">
            </section>
            <section className="grid-item three py-5 bg-dark">
            </section>
            <section className="grid-item four py-5 bg-dark">
            </section>
            </section>
            </section>
        </section> // main Section











            <Container>
                <Row>
                    {guilds.map(guild => (
                        <Col  className="guild-Animation">
                            <div className=" guild-container">
                                    <Image src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=1024`} className="w-50 guild-img" thumbnail />
                                   <div>

                                    <Link to={`/dashboard/${guild.id}`} className="btn primary-color guild-bottom">  <h2 className="guild-link">Guild Config</h2></Link>



                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>











 */