import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { v4 as uuidv4 } from "uuid";

const contactsPath = resolve("src", "db", "contacts.json");

const updateContacts = (contacts) =>
  writeFile(contactsPath, JSON.stringify(contacts, null, 2));

export const listContacts = async () => {
  const data = await readFile(contactsPath, "utf-8");
  return JSON.parse(data);
};

export const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === contactId);
  return result || null;
};

export const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === contactId);
  if (index === -1) return null;
  const [result] = contacts.splice(index, 1);
  await updateContacts(contacts);
  return result;
};

export const addContact = async (data) => {
  const contacts = await listContacts();
  if (!Object.keys(data).length) {
    return null;
  }
  const newContact = {
    ...data,
    id: uuidv4(),
  };

  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};
