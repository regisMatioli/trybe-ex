const school = {
  lessons: [
    {
      course: 'Python',
      students: 20,
      professor: 'Carlos Patrício',
      shift: 'Manhã',
    },
    {
      course: 'Kotlin',
      students: 10,
      professor: 'Gabriel Oliva',
      shift: 'Noite',
    },
    {
      course: 'JavaScript',
      students: 738,
      professor: 'Gustavo Caetano',
      shift: 'Tarde',
    },
    {
      course: 'MongoDB',
      students: 50,
      shift: 'Noite',
    },
  ]
};

const part31= (valor) => {
  return school.lessons[valor];
}

//console.log(part31(0));

const part32 = (escola) =>{
  let soma = 0;

  for(let i=0; i<escola.length ; i++){
    soma += escola[i].students;

  }
  return soma;
}
//console.log(part32(school.lessons));

const part33 = (obj, key) => {
  for (let i = 0; i < obj.lessons.length; i += 1) {
    if (obj.lessons[i][key] === undefined) {
      return false;
    }
  }
  return true;
}

console.log(part33(school, 'professor'));
