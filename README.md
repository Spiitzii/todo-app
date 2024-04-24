# TODO-App API

Dieses Projekt ist eine RESTful API für eine TODO-App, die in TypeScript mit Node.js und Express entwickelt wurde.

## Installation

1. Klone das Repository:

git clone https://github.com/dein-benutzername/todo-app.git

2. Navigiere in das Verzeichnis:

cd todo-app

3. Installiere die Abhängigkeiten:

npm install

4. Starte die Anwendung:

npm start

Die API ist nun unter http://localhost:3000 erreichbar.

## Nutzung

### Erstellen eines neuen TODOs

`POST /todos`

Erstelle ein neues TODO, indem du einen POST-Request an `/todos` mit JSON-Daten sendest, die die folgenden Felder enthalten: `todo`, `deadline`, `assignee`, `owner` und `status`.

Beispiel-Anfrage:
```json
{
  "todo": "Einkaufen erledigen",
  "deadline": "2024-05-01",
  "assignee": "Max Mustermann",
  "owner": "Erika Musterfrau",
  "status": "not started"
}
Abrufen aller TODOs
GET /todos

Rufe alle vorhandenen TODOs ab.

Abrufen eines bestimmten TODOs
GET /todos/:id

Rufe ein bestimmtes TODO anhand seiner ID ab.

Aktualisieren eines TODOs
PUT /todos/:id

Aktualisiere ein vorhandenes TODO anhand seiner ID. Du kannst die Felder todo, deadline, assignee, owner und status aktualisieren.

Beispiel-Anfrage:

{
  "todo": "Einkaufen erledigen",
  "deadline": "2024-05-01",
  "assignee": "Max Mustermann",
  "owner": "Erika Musterfrau",
  "status": "in progress"
}
Löschen eines TODOs
DELETE /todos/:id

Lösche ein vorhandenes TODO anhand seiner ID.

Dokumentation der API-Routen
POST /todos: Erstelle ein neues TODO.
GET /todos: Rufe alle vorhandenen TODOs ab.
GET /todos/:id: Rufe ein bestimmtes TODO anhand seiner ID ab.
PUT /todos/:id: Aktualisiere ein vorhandenes TODO anhand seiner ID.
DELETE /todos/:id: Lösche ein vorhandenes TODO anhand seiner ID.