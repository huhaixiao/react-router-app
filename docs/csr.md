# Client Side Rendering

## clientLoader

- `useLoaderData`

```tsx
export async function clientLoader({ serverLoader }) {
  // call the server loader
  const serverData = await serverLoader();
  // And/or fetch data on the client
  const data = getDataFromClient();
  // Return the data to expose through useLoaderData()
  return data;
}

clientLoader.hydrate = true as const
```
