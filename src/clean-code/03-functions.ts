(() => {

    // función para obtener información de una película por Id
    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getAllMovieActors( Actors: string ) {
        console.log({ Actors });
    }

    // funcion para obtener el bio del actor por el id
    function getIdActorsById( ActorId: string ) {
        console.log({ ActorId });
    }
    
    interface Movie {
        title: string, description: string, rating: number, cast: string[] 
    }

    // Crear una película
    function createMovie({title, description, rating, cast}: Movie) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    //continuar 
    interface Pay{
        isDead : false, isSeparated : true, isRetired : false
    }

    const getPayAmount = ({ isDead , isSeparated, isRetired }:Pay) => {

        if ( isDead ) {
            return 1500;
        } 

        if ( isSeparated ) {
            return 2500;
        }

        return isRetired ? 3000 : 4000; 
                
    }


})();




