# CLI: Contact Management

### **Run command**

```sh
npm run start -- <arguments>
```

### **Arguments**

| Arguments       | Required        |
| --------------- | --------------- |
| `-a , --action` | yes             |
| `-i , --id`     | `get`, `remove` |
| `-n , --name`   | `add`           |
| `-e , --email`  | `add`           |
| `-p , --phone`  | `add`           |

---

## **Examples**

**Get contact list**

```sh
npm run start -- -a list
```

**Get contact by ID**

```sh
npm run start -- -a get -i AeHIrLTr6JkxGE6SN-0Rw
```

**Add a new contact**

```sh
npm run start -- -a add -n "Jhon Smith" -e smith@example.com -p "+46 24 13 29"
```

**Remove a contact by ID**

```sh
npm run start -- -a remove -i 09338337-f210-4fa3-a0ce-4eff4b81af3b
```
