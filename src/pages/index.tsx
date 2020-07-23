import React from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import Layout from "../components/layout";
import { Badge, Button, Container, Jumbotron, ListGroup, Card } from "react-bootstrap";

export default function Index() {
    return (
        <Layout>
            <Container>
                <Jumbotron>
                    <h1>何気ない音楽に華を。</h1>
                    <p>asataken にようこそ。</p>
                    <p>ここは asatake の個人サイトです。</p>
                    <p>音楽の配布などを行っています。</p>
                    <p>
                        <Link href="/about">
                            <a>
                                <Button variant="primary">もっと知る</Button>
                            </a>
                        </Link>
                    </p>
                </Jumbotron>

                <Card id="news">
                    <Card.Body>
                        <Card.Title>News</Card.Title>
                        <ListGroup>
                            <ListGroup.Item>
                                2020/xx/xx サイト開設 <Badge variant="info">New!</Badge>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Container>
        </Layout>
    );
}
