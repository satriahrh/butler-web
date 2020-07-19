import React from "react";
import {SimpleForm} from "../components/form";

const forms = [
  {
    field: 'name',
    label: 'Board Name',
    placeholder: 'My Table',
  },
  {
    field: 'template',
    label: 'Choose Template',
    selection: [
      {value: 'kanban', display: 'General Kanban Board'},
      {value: 'virtual-desk', display: 'Virtual Desk'},
      {value: 'reading-list', display: 'Reading List'},
      {value: 'blogging-idea', display: 'Blogging Idea'},
    ]
  },
];

export default function CreateBoard() {
  const onSubmit = data => {
    console.log(data)
  };
  return (
    <>
      <SimpleForm
        fields={forms}
        onSubmit={onSubmit}
        submitText='Create Board'
      />
    </>
  )
}