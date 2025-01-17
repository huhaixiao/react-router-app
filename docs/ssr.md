# Server Side Rendering

## loader

```tsx
export async function loader() {
  return { message: "Hello, world!" };
}

export default function MyRoute({ loaderData }) {
  return <h1>{loaderData.message}</h1>;
}
```
