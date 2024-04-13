const mysql = require("mysql2/promise");

async function main()
{
    try
    {
        let connection = await mysql.createConnection(
            {
                host: "localhost",
                user: "root",
                password: "MoraySocks1991",
                database: "museo"
            });
        console.log("Conexion correcta");

        // let borrarColumna = "ALTER TABLE estado DROP COLUMN `en_prestamo` "

       //let sql = "INSERT INTO piezas (nombre, descripcion, year) VALUES ('La Mona Lisa', 'Pintura famosa de Leonardo da Vinci', '1503'),('David', 'Escultura de Miguel Ángel', '1504'),('La noche estrellada', 'Pintura famosa de Vincent van Gogh', '1889'),('La persistencia de la memoria', 'Pintura famosa de Salvador Dalí', '1931'),('El grito', 'Pintura famosa de Edvard Munch', '1893'),('Guernica', 'Pintura famosa de Pablo Picasso', '1937'),('La última cena', 'Pintura famosa de Leonardo da Vinci', '1498'),('El beso', 'Escultura de Auguste Rodin', '1889'),('La Venus de Milo', 'Escultura antigua', 100),('La creación de Adán', 'Fresco de Miguel Ángel', '1512')"

       // let sql = "INSERT INTO autor (nombre, ano_nac, ano_fall, nacionalidad) VALUES ('Leonardo da Vinci', '1452', '1519', 'Italiana'),('Miguel Ángel', '1475', '1564', 'Italiana'),('Vincent van Gogh', '1853', '1890', 'Holandesa'),('Salvador Dalí', '1904', '1989', 'Española'),('Edvard Munch', '1863', '1944', 'Noruega'),('Pablo Picasso', '1881', '1973', 'Española'),('Auguste Rodin', '1840', '1917', 'Francesa')"
        //let sql = "INSERT INTO estado (fecha_inicio, fecha_fin, nombre_museo) VALUES ('2023-09-05', '2024-04-05', 'Museo Nacional de China'),('2023-11-12', '2024-06-12', 'Museo de Arte Moderno'),('2024-01-25', '2024-08-25', 'Museo Nacional de Tokio'),('2024-03-08', '2024-10-08', 'Museo de Arte de São Paulo'),('2024-05-14', '2024-12-14', 'Galería de los Uffizi'),('2024-07-30', '2025-02-28', 'Museo Hermitage');"
        // let sql = "INSERT INTO propietario (nombre, apellido, email, direccion, telefono) VALUES ('Juan', 'Gómez', 'juan.gomez@example.com', 'Calle Principal 123', '123456789'), ('María', 'López', 'maria.lopez@example.com', 'Avenida Central 456', '987654321'), ('Pedro', 'Martínez', 'pedro.martinez@example.com', 'Plaza Mayor 789', '112233445'), ('Laura', 'Rodríguez', 'laura.rodriguez@example.com', 'Paseo del Sol 321', '998877665')"
        
        //let sql = "SELECT piezas.nombre, piezas.estado, localizacion, estados.fecha_fin, estados.estado, propietario.nombre, apellido, email FROM piezas JOIN estados ON (piezas.prestamo_id = estados.prestamo_id) JOIN propietario ON (piezas.dueno_id = propietario.propietario_id) WHERE estados.estado = 'en prestamo'"
        let sql = "SELECT piezas.estado, COUNT(*) AS total FROM piezas  WHERE piezas.estado IS NOT null GROUP BY piezas.estado ORDER BY total DESC;"
        
        let [result] = await connection.query(sql)
        console.log("datos insertados");
        console.log(result); 
    }
    catch(err)
    {
        console.log(err);
        await connection.end();
    }
}

main();