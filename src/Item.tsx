import {
  Navbar,
  Container,
  Col,
  Row,
  Nav,
  Button,
  NavDropdown,
} from "react-bootstrap";

export default function Item({ src, name, price, action }: any) {
  return (
    <div
      className="Item d-flex justify-content-between align-items-center mb-5"
      id={name.replace(/\s/g, "-")}
    >
      <div className="d-flex align-items-center">
        <div
          className="rounded me-5"
          style={{
            backgroundImage: `url(${src})`,
            width: 100,
            height: 100,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div>
          <div className="fs-4 mb-2">{name}</div>
          <div className="text-muted">{price}</div>
        </div>
      </div>
      <Button
        variant="link"
        className="text-muted"
        data-test-id="remove-item"
        onClick={() => {
          fetch("/api/remove", { method: "POST" }).then();
        }}
      >
        {action}
      </Button>
    </div>
  );
}
