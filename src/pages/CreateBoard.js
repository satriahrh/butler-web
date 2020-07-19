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
      'General Kanban Board',
      'Virtual Desk',
      'Reading List',
      'Blogging Idea',
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