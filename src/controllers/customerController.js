const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer', (err, customers) =>{
            if(err){
                res.json(err);
            }
            res.render('customers', {
                data: customers
            });
        });
    });
};

// Controlador que guarda los datos 
controller.save =(req, res) =>{
    const data = req.body;

   req.getConnection((err, conn) =>{
       conn.query('INSERT INTO customer set ?', [data], (err, customer)=>{
           res.redirect('/');  // redirecciona a la pagina cuando el dato es guardado
       })
   })
};

// Controlador que elimina los datos
controller.delete =(req, res) =>{
    const {id} = req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) =>{
        res.redirect('/');  // redirecciona a la pagina cuando el dato es guardado   
        })
    })
};







module.exports = controller;