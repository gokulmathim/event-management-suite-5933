// PUBLIC_INTERFACE
/**
 * API utility for backend communication.
 */

const API_BASE = process.env.REACT_APP_API_BASE || "/api";

// PUBLIC_INTERFACE
export async function apiGet(path, opts={}) {
  /**
   * GET request to backend API
   */
  const resp = await fetch(`${API_BASE}${path}`, {
    ...opts,
    credentials: "include"
  });
  if (!resp.ok) throw new Error(`GET ${path} failed`);
  return resp.json();
}

// PUBLIC_INTERFACE
export async function apiPost(path, data, opts={}) {
  /**
   * POST request to backend API
   */
  const resp = await fetch(`${API_BASE}${path}`, {
    ...opts,
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data),
    credentials: "include"
  });
  if (!resp.ok) throw new Error(`POST ${path} failed`);
  return resp.json();
}

// PUBLIC_INTERFACE
export async function apiPut(path, data, opts={}) {
  /**
   * PUT request to backend API
   */
  const resp = await fetch(`${API_BASE}${path}`, {
    ...opts,
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data),
    credentials: "include"
  });
  if (!resp.ok) throw new Error(`PUT ${path} failed`);
  return resp.json();
}

// PUBLIC_INTERFACE
export async function apiDelete(path, opts={}) {
  /**
   * DELETE request to backend API
   */
  const resp = await fetch(`${API_BASE}${path}`, {
    ...opts,
    method: "DELETE",
    credentials: "include"
  });
  if (!resp.ok) throw new Error(`DELETE ${path} failed`);
  return resp.json();
}
