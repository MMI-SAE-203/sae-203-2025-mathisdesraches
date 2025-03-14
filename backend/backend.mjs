import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090'); 

export async function getFilms() {
  try {
    return await pb.collection('films').getFullList();
  } catch (err) {
    console.error('Erreur récupération des films:', err);
    return [];
  }
}

export async function getProgramme() {
  try {
    return await pb.collection('programme').getFullList();
  } catch (err) {
    console.error('Erreur récupération du programme:', err);
    return [];
  }
}

export async function addFilm(title, description, releaseDate) {
  try {
    return await pb.collection('films').create({
      title,
      description,
      release_date: releaseDate
    });
  } catch (err) {
    console.error('Erreur ajout du film:', err);
  }
}
