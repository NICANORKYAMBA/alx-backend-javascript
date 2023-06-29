import ClassRoom from './0-classroom';

function initializeRooms() {
  const sizes = [19, 20, 34];
  const classrooms = [];

  for (const size of sizes) {
    classrooms.push(new ClassRoom(size));
  }

  return classrooms;
}

export default initializeRooms;
