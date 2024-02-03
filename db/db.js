const mysql = require('mysql2/promise');

// koneksi ke database mysql
const db = mysql.createPool({
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    database: process.env.MYSQL_DBNAME || 'classicmodels',
    password: process.env.MYSQL_PASSWORD || 'root',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

// migrasi database mysql
const migration = async () => {
    try {
        const [result] = await db.query(`
        SELECT 
    customerNumber,
    COUNT(orderdetails.orderNumber) AS total_orders
FROM 
    orders
JOIN 
    orderdetails ON orders.orderNumber = orderdetails.orderNumber
JOIN 
    products ON orderdetails.productCode = products.productCode
WHERE 
    products.productLine = 'Classic Cars'
GROUP BY 
    customerNumber
HAVING 
    total_orders > 23;
      `);


        console.log('query Successfully!');
    } catch (err) {
        throw err;
    }
};
