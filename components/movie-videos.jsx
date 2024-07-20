import { API_URL } from "../app/(home)/page";

async function getVideos(id) {
  console.log(`Fetching mvoies: ${Date.now()}`);
  //await new Promise((resolve) => setTimeout(resolve, 3000));
  // const response = await fetch(`${API_URL}/${id}/videos`);
  // return response.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  throw new Error("무언가 잘못되었습니다...");
}

export default async function MovieVideos({ id }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
