const API_URL = "https://jsonplaceholder.typicode.com/users/";

export async function fetchUsers() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch users from the source..."); 
  }

  const data = await response.json();

  return data.map(user => ({
    id: user.id,
    name: user.name,
    email: user.email,
    company: user.company.name,
    city: user.address.city,
    website:user.website
  }));
}