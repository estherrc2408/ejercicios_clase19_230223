const id = 2
let nombre;
let nota;

const arrayAlumnos = [
    { id: 1, nombre: 'Pepe' },
    { id: 2, nombre: 'Ana' },
    { id: 3, nombre: 'Juan' },
    { id: 4, nombre: 'Pepi' },
    { id: 5, nombre: 'bea' }
];


const arrayNotas = [
    { id: 1, nota: 8 },
    { id: 2, nota: 7 },
    { id: 5, nota: 9 },
];

const arrayBecas = [
    { id: 1, beca: 'si' },
    { id: 2, beca: 'no' },
    { id: 5, beca: 'si' },
]


const getAlumno = (id) => {
    const alumno = arrayAlumnos.find((item) => item.id === id)?.nombre
    const promise = new Promise((resolve, reject) => {
        if (!alumno) {
            reject(`El alumno con id ${id} no existe`);
        } else {
            resolve(alumno);
        }
        return promise;
    })
}


const getNota = (id) => {
    let nota = arrayNotas.find((item) => item.id === id)?.nota
    const promise = new Promise((resolve, reject) => {
        if (!nota) {
            reject(`el alumno ${alumno} no tiene nota`);
        } else {
            resolve(nota);
        }
    })
    return promise;
}

const getBecas = (id) =>{
    let beca = arrayBecas.find((item) => item.id === id)?.beca
    const promise = new Promise ((resolve,reject)=>{
        if(!beca) {
            reject(`el alumno ${alumno} no tiene beca`);
        }else{
            resolve(beca);
        }
    })
    return promise;
}




getAlumno(id)
    .then((resp) => {
        alumno=resp;
        return getNota(id)
    })
    .then((resp)=>{
        nota=resp;
        return getBecas(id)
    })
    .then((resp)=>{
        if(resp == 1){
            console.log(`${alumno} tiene una nota de ${nota} y ${resp} tiene beca`);
        }else{
            console.log(`${alumno} tiene una nota de ${nota} y ${resp} tiene beca`);
        }
    })
    
    .catch((error) => { console.log(error)})