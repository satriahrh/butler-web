import React, {useEffect, useState} from "react";
import {Card, CardColumns, Container, Navbar, Tooltip, OverlayTrigger, Alert} from "react-bootstrap";

import module from './Dashboard.module.scss'
import {useOktaAuth} from "@okta/okta-react";

const CreateNewBoard = () => (
  <OverlayTrigger
    placement="right"
    delay={{show: 250, hide: 400}}
    overlay={(props) => (
      <Tooltip{...props}>
        Create New Board
      </Tooltip>
    )}
  >
    <a href='#'><i className="far fa-plus-square"/> Create New</a>
  </OverlayTrigger>
);


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

export default function Dashboard() {
  const [boards, setBoards] = useState([]);
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const {authService} = useOktaAuth();
  useEffect(() => {
    authService.getUser(
    ).then(
      res => {
        setUser(res);
      }
    ).catch(
      err => {
        setError(err.message)
      }
    );
  }, [setUser, authService]);

  useEffect(() => {
    setBoards(sampleBoards);
  }, [setBoards]);

  const errorAlert = error && <Alert variant='danger'>error</Alert>;

  return (
    <>
      {errorAlert}
      <h2>Hello, {user && user.given_name}</h2>
      <Navbar>
        <Navbar.Brand><h3>Boards</h3></Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <CreateNewBoard/>
          </Navbar.Text>
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
