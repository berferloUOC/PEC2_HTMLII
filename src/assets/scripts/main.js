/**
 * Import dependencies from node_modules
 * see commented examples below
 */
import JustValidate from 'just-validate';

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();


//Uso de librería just-validate para validar formulario de contacto


const form = new JustValidate('.form');

form
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'El nombre es obligatorio',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'El nombre debe tener al menos 3 caracteres',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'El correo es obligatorio',
    },
    {
      rule: 'email',
      errorMessage: 'Por favor, introduce un correo válido',
    },
  ])
  .addField('#message', [
    {
      rule: 'required',
      errorMessage: 'El mensaje no puede estar vacío',
    },
  ]);

