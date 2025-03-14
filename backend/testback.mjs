import { getfilm, addfilm, getprogramme, getUser, login } from './backend.mjs';

async function testGetfilm() {
  const film = await getfilm();
  console.log('Films du festival:', film);
}

async function testAddfilm() {
  const newfilm = await addfilm('Mon Voisin Totoro', 'Un classique de Miyazaki', '1988-04-16');
  console.log('Film ajouté:', newfilm);
}

async function testGetprogramme() {
  const programme = await getprogramme();
  console.log('Programme du festival:', programme);
}

async function testGetUser() {
  const user = await getUser('user_id_exemple');
  console.log('Utilisateur récupéré:', user);
}

async function testLogin() {
  const authData = await login('test@example.com', 'password123');
  console.log('🔑 Authentification:', authData);
}

testGetfilm();
testAddfilm();
testGetprogramme();
testGetUser();
testLogin();
