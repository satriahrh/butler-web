import React, {useEffect, useState} from "react";
import {Card, CardColumns, Container, Navbar, Tooltip, OverlayTrigger, Alert, Dropdown} from "react-bootstrap";

import module from './Dashboard.module.scss'
import {useOktaAuth} from "@okta/okta-react";
import {CustomToggle} from "../components/navigation";


const Boards = ({boards}) => (
  <CardColumns>
    {boards.map((board) => (
      <Card as='a'
            body
            style={{backgroundColor: board.background}}
            className={module.card}
            key={board.id}
            href='#'
      >
        {board.name}
      </Card>
    ))}
  </CardColumns>
);

const Menu = () => (
  <Dropdown alignRight>
    <Dropdown.Toggle as={CustomToggle}>
      <i className="fas fa-ellipsis-v" /> Settings
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href='#'>
        <i className="far fa-plus-square"/> Create New Board</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

export default function Dashboard() {
  const [boards, setBoards] = useState([]);


  useEffect(() => {
    setBoards(sampleBoards);
  }, [setBoards]);

  return (
    <>
      <Navbar>
        <Navbar.Brand><h3>Boards</h3></Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className="justify-content-end">
          <Menu />
          {/*<Navbar.Text>*/}
          {/*  <CreateNewBoard/>*/}
          {/*</Navbar.Text>*/}
        </Navbar.Collapse>
      </Navbar>
      <Boards boards={boards}/>
      <hr/>
    </>
  )
}

const colors = ["blue", "indigo", "purple", "pink", "red", "orange", "yellow", "green", "teal", "cyan", "white", "gray", "gray-dark"];
const sampleBoards = [
  {id: 1, name: "Maktaby", background: colors[0]},
  {id: 2, name: "Reading", background: colors[1]},
  {id: 3, name: "Retrospective", background: colors[2]},
  {id: 4, name: "Shopping", background: colors[3]},
  {id: 5, name: "satriahrh.github.io/blog", background: colors[4]},
];
