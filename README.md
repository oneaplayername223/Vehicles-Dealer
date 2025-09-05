# Vehicles-Dealer

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
</head>
<body>
  <h1>Vehicles-Dealer / Car Marketplace API</h1>

  <section>
    <h2>🇬🇧 English</h2>
    <h3>Overview</h3>
    <p>
      Vehicles-Dealer is a backend API built with Node.js & Express designed for managing a vehicle marketplace. Dealers can add, view, edit, and delete cars, while guests have access to browse vehicles and dealers, and can register or log in.
    </p>

<h3>Features</h3>
    <ul>
      <li><strong>Dealers:</strong> Add, view (all or by ID), edit, and delete vehicles.</li>
      <li><strong>Guests:</strong> Browse all cars, view details, browse dealers, and perform user registration and login.</li>
    </ul>

<h3>Project Structure</h3>
    <pre>
/Controllers
/Routes
/Schemas
/Services
/middlewares
server.js
package.json
    </pre>

<h3>Dealer Routes (Protected)</h3>
    <table>
      <thead>
        <tr><th>Method</th><th>Endpoint</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>POST</td><td>/vendedor/agregar/autos</td><td>Add a new car</td></tr>
        <tr><td>GET</td><td>/vendedor/autos</td><td>List all dealer’s cars</td></tr>
        <tr><td>GET</td><td>/vendedor/autos/:id</td><td>Get car details by ID</td></tr>
        <tr><td>PATCH</td><td>/vendedor/editar/autos/:id</td><td>Edit car details</td></tr>
        <tr><td>DELETE</td><td>/vendedor/eliminar/autos/:id</td><td>Delete a car</td></tr>
      </tbody>
    </table>

<h3>Guest Routes</h3>
    <table>
      <thead>
        <tr><th>Method</th><th>Endpoint</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>GET</td><td>/autos</td><td>Browse all available cars</td></tr>
        <tr><td>GET</td><td>/autos/:id</td><td>View car details</td></tr>
        <tr><td>GET</td><td>/dealers</td><td>List all dealers</td></tr>
        <tr><td>GET</td><td>/dealers/:id</td><td>View dealer details</td></tr>
        <tr><td>POST</td><td>/register</td><td>User registration</td></tr>
        <tr><td>POST</td><td>/login</td><td>User login</td></tr>
      </tbody>
    </table>

<h3>Installation</h3>
    <pre>
# Clone repository
git clone https://github.com/oneaplayername223/Vehicles-Dealer.git

# Install dependencies
npm install

# Run the server
npm run dev
    </pre>

<h3>Middleware</h3>
    <ul>
      <li><code>userAuthorization</code>: Verifies user authentication.</li>
      <li><code>validateId</code>: Validates dealer account ID.</li>
    </ul>

    <h3>Validation</h3>
    <p>Car data is validated using a Joi schema located in <code>/Schemas/registerVehicleSchema.js</code>.</p>
  </section>

  <hr />

  <section>
    <h2>🇪🇸 Español</h2>
    <h3>Descripción</h3>
    <p>
      Vehicles-Dealer es una API backend desarrollada con Node.js y Express para gestionar un marketplace de vehículos. Los vendedores pueden agregar, ver, editar y eliminar vehículos, mientras que los invitados pueden explorar autos y concesionarios, además de poder registrarse e iniciar sesión.
    </p>

<h3>Características</h3>
    <ul>
      <li><strong>Vendedores:</strong> Agregar, ver (todos o por ID), editar y eliminar vehículos.</li>
      <li><strong>Invitados:</strong> Explorar todos los autos, ver detalles, explorar concesionarios, registrarse e iniciar sesión.</li>
    </ul>

<h3>Estructura del Proyecto</h3>
    <pre>
/Controllers
/Routes
/Schemas
/Services
/middlewares
server.js
package.json
    </pre>

<h3>Rutas para Vendedores (Protegidas)</h3>
    <table>
      <thead>
        <tr><th>Método</th><th>Endpoint</th><th>Descripción</th></tr>
      </thead>
      <tbody>
        <tr><td>POST</td><td>/vendedor/agregar/autos</td><td>Agregar un nuevo auto</td></tr>
        <tr><td>GET</td><td>/vendedor/autos</td><td>Listar todos los autos del vendedor</td></tr>
        <tr><td>GET</td><td>/vendedor/autos/:id</td><td>Ver detalles del auto por ID</td></tr>
        <tr><td>PATCH</td><td>/vendedor/editar/autos/:id</td><td>Editar información del auto</td></tr>
        <tr><td>DELETE</td><td>/vendedor/eliminar/autos/:id</td><td>Eliminar un auto</td></tr>
      </tbody>
    </table>

<h3>Rutas para Invitados</h3>
    <table>
      <thead>
        <tr><th>Método</th><th>Endpoint</th><th>Descripción</th></tr>
      </thead>
      <tbody>
        <tr><td>GET</td><td>/autos</td><td>Explorar todos los autos disponibles</td></tr>
        <tr><td>GET</td><td>/autos/:id</td><td>Ver detalles del auto</td></tr>
        <tr><td>GET</td><td>/dealers</td><td>Listar todos los concesionarios</td></tr>
        <tr><td>GET</td><td>/dealers/:id</td><td>Ver detalles del concesionario</td></tr>
        <tr><td>POST</td><td>/register</td><td>Registro de usuario</td></tr>
        <tr><td>POST</td><td>/login</td><td>Inicio de sesión</td></tr>
      </tbody>
    </table>

<h3>Instalación</h3>
    <pre>
# Clona el repositorio
git clone https://github.com/oneaplayername223/Vehicles-Dealer.git

# Instala dependencias
npm install

# Ejecuta el servidor
npm run dev
    </pre>

<h3>Middlewares</h3>
    <ul>
      <li><code>userAuthorization</code>: Verifica la autenticación del usuario.</li>
      <li><code>validateId</code>: Valida el ID de la cuenta del vendedor.</li>
    </ul>

<h3>Validación</h3>
    <p>Los datos del vehículo se validan mediante un esquema Joi ubicado en <code>/Schemas/registerVehicleSchema.js</code>.</p>
  </section>
</body>
</html>
