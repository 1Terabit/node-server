module.exports = function (app) {
  /**
   * @swagger
   * /api:
   *  get:
   *    description: Usa para obtener un saludo
   *    responses:
   *      '200':
   *        description: Un saludo exitoso
   */
  app.get("/api", (req, res) => {
    const toGreet = {
      message: "¡Hi guys!",
    };
    res.json(toGreet);
  });
};
