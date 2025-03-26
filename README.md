# Frontend Mentor Challenge

- [Browser Extension Manager UI](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp)

---


## Development

This project provided experience with Qwik as I implemented the UI for a Browser Extension Manager.

- Qwik + Qwik City
- Tailwind CSS

## Key Qwik Features Leveraged

- Used Route Loader to load static json data from file.
- Used Signals for storing selected filter state and currently viewed extensions.
- Leveraged QRLs for passing down functions as props to child components.
- Incorporated Store and Context for managing theme across the app.
- useOnDocument for setting Theme Context
  - Originally, I wanted to leverage a Task to do this at render time but ran into issues because these can run on the server and I needed access to Local Storage so I moved things around and used useOnDocument instead.