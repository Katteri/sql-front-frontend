## Structure

```
.
├── public                      (static assets)
│   ├── fonts                   (custom fonts used in the project)
│   |   ├── BuranUSSR.ttf       (header font)
│   |   └── moscowsans.ttf      (basic font)
│   └── images                  (used images)
│
├── src                         (application source files)
│   ├── pages                   (next.js routes)
│   ├── layouts                 (page layout components)
│   ├── entities                (business entities and logic)
│   ├── store                   (state manager)
│   ├── shared                  (shared code and components)
│   |   ├── config              (application configuration)            
│   |   ├── hooks               (custom react hooks)
│   |   ├── types               (shared types)             
│   |   ├── ui                  (reusable ui components)
│   |   └── strings.ts          (text constants)
│   |
|   └── styles
│       ├── _variables.scss     (sass variables)
│       ├── _reset.scss         (css reset and normalize)
│       └── global.scss         (global project styles imported in _app.tsx)
│
├── .env                        (enviroment variables)
└── README.md                   (project overview and documentation)
```


## .env

```
NEXT_PUBLIC_BACKEND_URL = "put your backend url here"
```
