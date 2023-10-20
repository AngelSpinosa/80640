package mx.uv;

import static spark.Spark.*;

public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hola mundo" );

        get("/", (request, response) -> {
            return "<h1>Hola mundo</h1>";
        });

        get("/ruta1", (request, response) -> {
            return "<h1>Adios mundo</h1>";
        });

        get("/ruta2", (request, response) -> {
            return "<h1>Mundooooooooo</h1>";
        });

        get("/ruta3", (request, response) -> {
            return "<h1>OK Mundo</h1>";
        });


    }
}
