import { program } from "commander";

import {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} from "./contacts.js";

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();
// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  let result = null;

  switch (action) {
    case "list":
      result = await listContacts();
      return console.info(result);

    case "get":
      result = await getContactById(id);
      return console.info(result);

    case "add":
      result = await addContact({ name, email, phone });
      return console.info(result);

    case "remove":
      result = await removeContact(id);
      return console.info(result);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
