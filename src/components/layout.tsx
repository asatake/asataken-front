import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="/">
                    <img
                        src="https://drive.google.com/uc?export=view&id=1wnye_HCvSxxJ3hkYIH2JDin6G1_hWWQ9"
                        alt="me"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav>
                        <Link href="/">
                            <a className="nav-link">HOME</a>
                        </Link>
                    </Nav>
                    <Nav>
                        <Link href="/about">
                            <a className="nav-link">ABOUT</a>
                        </Link>
                    </Nav>
                    <Nav>
                        <Link href="#">
                            <a className="nav-link">WORK</a>
                        </Link>
                    </Nav>
                </Nav>
            </Navbar>

            <div>{children}</div>
        </div>
    );
}

export default Layout;
