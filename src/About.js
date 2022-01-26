import React from "react";
import {Container} from "./styles/globalStyles";


export function About () {
    return ()
    <>
        <section>
        <Container fluid="true" className="text-white">
        <div style={{
        backgroundImage: 'url(assets/gucci.jpeg)',
            backgroundRepeat: 'no-repeat',
            backGroundSize: 'cover',
            width: '100vw',
            height: '100vh',
    }}>
<Row>
    <Col className="p-3 m-md-4">
        <h2>About Deez</h2>
</Col>
    <Col md={{span:5, offset:5}} className="mx-5 mt-5">
        <p className="blockquote">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <blockquote className="blockquote mb-4">
                <p>
                    <i className="fas fa-quote-left fa-lg text-warning me-2"></i>
                    <span className="font-italic">"plaid shabby chic biodiesel vegan. Austin adaptogen distillery helvetica microdosing godard master cleanse pabst blog." </span>
                </p>
            </blockquote>
        </p>
    </Col>
</Row>
</div>
</Container>
</section>
    <section>
        <Container fluid={"true"} className="m-md-4">
            <Row>
                <Col md="5">
                    <Image src="assets/PopFizzPaletaPal.PNG" alt="Pop the pal" fluid={"true"}/>
                </Col>
                <Col className="mt-5">
                    <p>
                        I'm baby woke nulla officia salvia dreamcatcher vegan gluten-free hexagon do keffiyeh swag. Kitsch prism celiac lomo mustache disrupt keffiyeh food truck irure succulents adaptogen semiotics hell of. Humblebrag air plant yuccie occupy officia excepteur veniam vexillologist listicle man bun wayfarers neutra. Waistcoat pariatur portland readymade schlitz meditation occupy fugiat shoreditch leggings humblebrag kale chips. Irure tattooed lyft, banh mi intelligentsia selfies pickled vinyl migas ex fingerstache consectetur meh mumblecore jianbing. Butcher sed pabst cred.

                        3 wolf moon viral tattooed live-edge vape leggings crucifix health goth. Gentrify la croix skateboard, VHS banjo cray post-ironic adipisicing cred before they sold out. Lorem put a bird on it twee knausgaard butcher excepteur pok pok gochujang blog. Plaid labore pok pok vinyl pug coloring book you probably haven't heard of them cardigan minim mlkshk roof party next level incididunt wayfarers pinterest. Keytar flannel 90's bespoke live-edge adipisicing hashtag cillum craft beer neutra everyday carry mixtape.
                    </p>
                </Col>
            </Row>
        </Container>
    </section>
</>
}