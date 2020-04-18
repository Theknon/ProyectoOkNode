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
controller.save =(req, res) =>{
    const data = req.body;
   req.getConnection((err, conn) =>{
       conn.query('INSERT INTO customer set ?', [data], (err, customer)=>{
           res.redirect('/');  // redirecciona a la pagina cuando el dato es guardado
       })
   })
}
module.exports = controller;