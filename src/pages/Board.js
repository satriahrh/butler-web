import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import {Card, Dropdown, Navbar} from "react-bootstrap";

import module from './Board.module.scss'
import {CustomToggle} from "../components/navigation";

const Menu = () => (
  <Navbar>
    <Navbar.Brand>Boards</Navbar.Brand>
    <Navbar.Toggle/>
    <Navbar.Collapse className="justify-content-end">
      <Dropdown alignRight>
        <Dropdown.Toggle as={CustomToggle}>
          <i className="fas fa-ellipsis-v"/> Settings
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href='#'>
            <i className="far fa-plus-square"/> Settings</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Navbar.Collapse>
  </Navbar>
);

const BoardList = ({lists}) => {
    return (
      <div className={module.boardList}>
        {
          lists.map(list => (
            <div className={module.list} key={list.id}>
              <div className={module.listName}>{list.name}</div>
              <div className={module.listContent}>
                {
                  list.cards.map(card => (
                    <Card body className={module.listCard}>
                      {card.name}
                    </Card>
                  ))
                }
                <Card body className={module.listCard}>
                  ...
                </Card>
              </div>
            </div>
          ))}
      </div>
    )
  }
;

export default function Board() {
  const {id} = useParams();
  const [lists, setLists] = useState([]);

  useEffect(() => {
    setLists([
      {
        id: 1,
        name: 'Inbox',
        cards: [
          {id: 1, name: 'Cair Duluan Modalku Tech Doc Review'},
          {id: 1, name: 'Cair Duluan Modalku Tech Doc Review'},
          {id: 1, name: 'Cair Duluan Modalku Tech Doc Review'},
          {id: 1, name: 'Cair Duluan Modalku Tech Doc Review'},
          {id: 1, name: 'Cair Duluan Modalku Tech Doc Review'},
          {id: 1, name: 'Cair Duluan Modalku Tech Doc Review'},
          {id: 1, name: 'Cair Duluan Modalku Tech Doc Review'},
          {id: 1, name: 'Cair Duluan Modalku Tech Doc Review'},
          {id: 2, name: 'Apps vs Webview comparison head to head'},
          {id: 3, name: 'Update sequence diagram for refund and pay, need to retrieve internal remote transaction'},
          {id: 3, name: 'Update sequence diagram for refund and pay, need to retrieve internal remote transaction'},
          {id: 3, name: 'Update sequence diagram for refund and pay, need to retrieve internal remote transaction'},
          {id: 3, name: 'Update sequence diagram for refund and pay, need to retrieve internal remote transaction'},
          {id: 3, name: 'Update sequence diagram for refund and pay, need to retrieve internal remote transaction'},
          {id: 3, name: 'Update sequence diagram for refund and pay, need to retrieve internal remote transaction'},
          {id: 4, name: 'Bayar Tempo Application Submission Issue'},
        ]
      },
      {
        id: 2,
        name: 'Cabinet',
        cards: [
          {id: 6, name: 'Create pre release article about letter block game'},
          {id: 7, name: 'Conseptualize Shopee Product'},
          {id: 8, name: 'Dokumentasi Billing and Repayment State'},
        ]
      },
      {
        id: 3,
        name: 'Desk',
        cards: [
          {id: 9, name: 'Kredivo Starter Pack'},
          {id: 10, name: 'Job Rikimaru Submit Application Issue'},
        ]
      },
      {
        id: 4,
        name: 'Hand',
        cards: [
          {id: 11, name: 'Dana Disbursement Retrial'},
        ]
      },
      {
        id: 5,
        name: 'Done',
        cards: [
          {id: 12, name: 'BukaCicilan Kredivo Eligibility'},
          {id: 13, name: 'Velocity chart always shows remaining tasks those in QA'},
          {id: 14, name: 'incident resource owner id got 0'},
          {id: 15, name: 'Failed disbursement marked as succeed'},
          {id: 16, name: 'Kredivo Update Application Account Type'},
        ]
      }
    ])
  }, [id, setLists]);

  return (
    <>
      <Menu/>
      <BoardList lists={lists}/>
    </>
  )
}