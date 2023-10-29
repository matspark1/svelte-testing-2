import type { RequestEvent, RequestHandler } from './$types'
import { error } from '@sveltejs/kit';
import {client} from "$lib/client"

export const GET: RequestHandler = async (reqEvent: RequestEvent) => {
  console.log("In GET with specific OID:",reqEvent.url) // left in as an example
  const key = reqEvent.url.pathname.split('/').slice(-1)[0]
  const val = client.get(key)
  if (val) {
    return new Response(JSON.stringify(client.get(key)))
  } else {
    throw error(404, "Yikes! No value for that key")
  }
}

export const PUT: RequestHandler = async (reqEvent: RequestEvent) => {
  const key = await reqEvent.request.json();

  if(key && key.value) {
    client.set(key, key.value)
    return new Response(JSON.stringify(client.get(key)))
  } else {
    throw error(403, "Nothing entered!")
  }
}

export const DELETE: RequestHandler = async (reqEvent: RequestEvent) => {
  const key = reqEvent.url.pathname.split('/').slice(-1)[0]

  client.delete(key)

  return new Response("Deleted Sucessfully!")
}