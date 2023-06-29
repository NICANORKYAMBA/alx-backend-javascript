import ClassRoom from './0-classroom';

function initializeRooms() {
  const sizes = [19, 20, 34];
  const classrooms = [];

  for (let i = 0; i < sizes.length; i++) {
    classrooms.push(new ClassRoom(sizes[i]));
  }

  return classrooms;
}

export default initializeRooms;
