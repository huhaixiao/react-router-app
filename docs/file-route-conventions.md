# File Route Conventions

- [File Route Conventions](https://reactrouter.com/how-to/file-route-conventions)

## Setting up

- `ignoredRouteFiles`
- `rootDirectory`

```shell
npm i @react-router/fs-routes
```

```tsx title="app/routes.ts"
import { type RouteConfig } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

export default flatRoutes() satisfies RouteConfig;
```

## Basic Routes

```text
app/
├── routes/
│   ├── _index.tsx
│   └── about.tsx
└── root.tsx
```

|   URL    |     Matched Routes      |
| :------: | :---------------------: |
|   `/`    | `app/routes/_index.tsx` |
| `/about` | `app/routes/about.tsx`  |

## Dot Delimiters

```text
 app/
├── routes/
│   ├── _index.tsx
│   ├── about.tsx
│   ├── concerts.trending.tsx
│   ├── concerts.salt-lake-city.tsx
│   └── concerts.san-diego.tsx
└── root.tsx
```

|         URL          |           Matched Routes           |
| :------------------: | :--------------------------------: |
|         `/`          |      `app/routes/_index.tsx`       |
|       `/about`       |       `app/routes/about.tsx`       |
| `/concerts/trending` | `app/routes/concerts.trending.tsx` |

## Dynamic Segments

```text
 app/
├── routes/
│   ├── _index.tsx
│   ├── about.tsx
│   ├── concerts.$city.tsx
│   └── concerts.trending.tsx
└── root.tsx
```

|            URL             |           Matched Routes           |
| :------------------------: | :--------------------------------: |
|            `/`             |      `app/routes/_index.tsx`       |
|          `/about`          |       `app/routes/about.tsx`       |
|    `/concerts/trending`    | `app/routes/concerts.trending.tsx` |
| `/concerts/salt-lake-city` |  `app/routes/concerts.$city.tsx`   |
|   `/concerts/san-diego`    |  `app/routes/concerts.$city.tsx`   |

## Nested Routes

```text
 app/
├── routes/
│   ├── _index.tsx
│   ├── about.tsx
│   ├── concerts._index.tsx
│   ├── concerts.$city.tsx
│   ├── concerts.trending.tsx
│   └── concerts.tsx
└── root.tsx
```

|            URL             |           Matched Routes           |         Layout          |
| :------------------------: | :--------------------------------: | :---------------------: |
|            `/`             |      `app/routes/_index.tsx`       |      app/root.tsx       |
|          `/about`          |       `app/routes/about.tsx`       |      app/root.tsx       |
|    `/concerts/trending`    | `app/routes/concerts.trending.tsx` | app/routes/concerts.tsx |
| `/concerts/salt-lake-city` |  `app/routes/concerts.$city.tsx`   | app/routes/concerts.tsx |
|   `/concerts/san-diego`    |  `app/routes/concerts.$city.tsx`   | app/routes/concerts.tsx |

## Nested URLs without Layout Nesting

```text
 app/
├── routes/
│   ├── _index.tsx
│   ├── about.tsx
│   ├── concerts.$city.tsx
│   ├── concerts.trending.tsx
│   ├── concerts.tsx
│   └── concerts_.mine.tsx
└── root.tsx
```

|       URL        |         Matched Routes          |    Layout    |
| :--------------: | :-----------------------------: | :----------: |
| `/concerts/mine` | `app/routes/concerts_.mine.tsx` | app/root.tsx |

## Nested Layouts without Nested URLs

```text
 app/
├── routes/
│   ├── _auth.login.tsx
│   ├── _auth.register.tsx
│   ├── _auth.tsx
│   ├── _index.tsx
│   ├── concerts.$city.tsx
│   └── concerts.tsx
└── root.tsx
```

|     URL     |         Matched Routes          |        Layout        |
| :---------: | :-----------------------------: | :------------------: |
|     `/`     |     `app/routes/_index.tsx`     |     app/root.tsx     |
|  `/login`   |  `app/routes/_auth.login.tsx`   | app/routes/_auth.tsx |
| `/register` | `app/routes/_auth.register.tsx` | app/routes/_auth.tsx |

## Splat Routes

```text
 app/
├── routes/
│   ├── _index.tsx
│   ├── $.tsx
│   ├── about.tsx
│   └── files.$.tsx
└── root.tsx
```

|                     URL                      |      Matched Routes      |
| :------------------------------------------: | :----------------------: |
|                     `/`                      | `app/routes/_index.tsx`  |
|              `/beef/and/cheese`              |    `app/routes/$.tsx`    |
|                   `/files`                   | `app/routes/files.$.tsx` |
|      `/files/talks/react-conf_old.pdf`       | `app/routes/files.$.tsx` |
|     `/files/talks/react-conf_final.pdf`      | `app/routes/files.$.tsx` |
| `/files/talks/react-conf-FINAL-MAY_2024.pdf` | `app/routes/files.$.tsx` |

```tsx title="app/routes/file.$.tsx"
export async function serverLoader({ params }) {
  const filePath = params["*"];
  return fake.getFileInfo(filePath);
}
```
