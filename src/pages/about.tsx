import Layout from "../components/layout";
import { Button, Container, ListGroup, Tabs, Tab, Row, Col } from "react-bootstrap";
import {
    BsXCircleFill,
    BsFillExclamationTriangleFill,
    BsFillInfoCircleFill,
    BsFillPersonFill,
    BsBoxArrowUpRight,
} from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { GrSoundcloud } from "react-icons/gr";

function Site() {
    return (
        <Container fluid>
            <div className="mt-3">
                <p>このサイトはBGM素材・効果音素材といったの音の素材の配布などを、管理人が個人で運営しています。</p>
                <p>音楽によって作品の幅を広げたいクリエイターの方を応援しています。</p>
                <p>また、単に素材としてだけでなく、「聴いて」楽しめる音楽づくりを目指しています。</p>
            </div>
        </Container>
    );
}

function Profile() {
    return (
        <Container fluid>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <Row>
                        <Col>
                            <BsFillPersonFill /> Name
                        </Col>
                        <Col xs={8}>asatake / 浅井茸人(あさいたけと) / あさたけ</Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item
                    action
                    href="https://twitter.com/Mush_asatake"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Row>
                        <Col>
                            <FaTwitter color="#00aced" /> Twitter
                        </Col>
                        <Col xs={8}>
                            @Mush_asatake <BsBoxArrowUpRight />
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item
                    action
                    href="https://audiostock.jp/artists/14"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Row>
                        <Col>
                            <img src="https://audiostock.jp/assets/as_banner/banner_88_31_01.png" alt="Audiostock" />
                        </Col>
                        <Col xs={8}>
                            浅井茸人(asatake) <BsBoxArrowUpRight />
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item
                    action
                    href="https://soundcloud.com/mush_asatake"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Row>
                        <Col>
                            <GrSoundcloud color="orangered" /> Soundcloud
                        </Col>
                        <Col xs={8}>
                            mush_asatake <BsBoxArrowUpRight />
                        </Col>
                    </Row>
                </ListGroup.Item>
            </ListGroup>
        </Container>
    );
}

function Agreement() {
    const rows = [
        {
            text:
                "当サイト内の作品は、販売中のものを除きフリー素材としてご利用いただいて構いませんが、著作権はすべて管理人に帰属します。",
            icon: <BsFillInfoCircleFill />,
        },
        {
            text:
                "フリー素材を商用利用される場合、メールもしくはTwitterのDMにてご連絡いただいて初めて無料でご利用いただけます。",
            icon: <BsFillInfoCircleFill />,
        },
        {
            text: "非商用利用の場合、利用報告は任意ですが、ぜひお気軽にご連絡ください。",
            icon: <BsFillInfoCircleFill />,
        },
        {
            text: "楽曲の第三者への再配布、転売などはしないでください。",
            icon: <BsXCircleFill color="red" />,
        },
        {
            text:
                "当サイト内の作品の使用により損害・損失が発生しましても、当方は一切の責任を負いません。ご了承ください。",
            icon: <BsFillExclamationTriangleFill color="orange" />,
        },
    ];

    const content = rows.map((r) => (
        <ListGroup.Item>
            <Row>
                <Col>{r.icon}</Col>
                <Col xs={11}>{r.text}</Col>
            </Row>
        </ListGroup.Item>
    ));

    return (
        <Container fluid>
            <ListGroup>{content}</ListGroup>
        </Container>
    );
}

function About() {
    return (
        <Layout>
            <Container className="mt-4">
                <h1>ABOUT</h1>
                <Tabs defaultActiveKey="site" className="mt-3">
                    <Tab eventKey="site" title="このサイトについて">
                        <Site />
                    </Tab>
                    <Tab eventKey="profile" title="プロフィール">
                        <Profile />
                    </Tab>
                    <Tab eventKey="agreement" title="利用規約">
                        <Agreement />
                    </Tab>
                </Tabs>
            </Container>
        </Layout>
    );
}

export default About;
