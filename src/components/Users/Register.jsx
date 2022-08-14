import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const { logged, customerData } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (logged) navigate('/usuario');
  }, [logged]);

  const [formValues, handleInputChange] = useForm({
    name: '',
    lastname: '',
    email: '',
    username: '',
    pass: '',
    confirmPass: '',
  });

  const { name, lastname, email, username, pass, confirmPass } = formValues;

  const [invalidFields, setInvalidFields] = useState([]);

  const submitForm = async e => {
    e.preventDefault();

    if (pass !== confirmPass) {
      setInvalidFields([...invalidFields, 'pass', 'confirmPass']);
      return dispatch(uiTempToast('Las contraseñas no coinciden', true));
    }

    try {
      await signUp(formValues);

      dispatch(
        uiTempToast(
          'Te has registrado con exito, inicia sesión para continuar.'
        )
      );
    } catch ({ error, message }) {
      console.log(error);
      return dispatch(
        uiTempToast(message || 'No se pudo completar el registro', true)
      );
    }
  };

  return (
    <div className='Register'>
      <form className='signin-form' onSubmit={submitForm}>
        <div className='sigin-form__header'>
          <h4>Crea una Cuenta</h4>
        </div>
      </form>
    </div>
  );
}

export default Register;
