import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Botones } from '../ui/Botones';

export const Form = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  const [status, setStatus] = useState(null);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const valid =
      formData.from_name.trim() !== '' &&
      formData.from_email.includes('@') &&
      formData.message.trim().length >= 5;
    setIsValid(valid);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isValid) {
      setStatus('error');
      return;
    }

    emailjs
      .sendForm('service_1fq500f', 'template_tqnsjs9', formRef.current, {
        publicKey: 'bueHvVSYOiQgVs5D0',
      })
      .then(
        () => {
          setStatus('success');
          setFormData({ from_name: '', from_email: '', message: '' });
          formRef.current.reset();
        },
        (err) => {
          console.error(err);
          setStatus('error');
        }
      );
  };

  return (
    <form ref={formRef} className="bg-white rounded-lg shadow-lg p-6 max-w-[437px] grid grid-cols-2 gap-2">
      <label className="col-span-2 font-inter font-medium text-descripciondelproyecto text-text90">Nombre</label>
      <input
        name="from_name"
        type="text"
        onChange={handleChange}
        className="col-span-2 border border-text90 rounded-sm h-[50px]  font-inter font-normal text-text90 px-4 mb-3 placeholder:text-placeholder"
        placeholder="¿Cómo te llamas?"
        required
      />

      <label className="col-span-2 font-inter font-medium text-descripciondelproyecto text-text90">Email</label>
      <input
        name="from_email"
        type="email"
        onChange={handleChange}
        className="col-span-2 border border-text90 rounded-sm h-[50px] px-4 mb-3  font-inter font-normal text-text90 placeholder:text-placeholder"
        placeholder="Correo para contactarte"
        required
      />

      <label className="col-span-2 font-inter font-medium text-descripciondelproyecto text-text90">Mensaje</label>
      <textarea
        name="message"
        onChange={handleChange}
        className="col-span-2 border border-text90 rounded-sm h-[150px] px-4 py-2 mb-3  font-inter font-normal text-text90 placeholder:text-placeholder"
        placeholder="Escribe tu mensaje. Prometo responder pronto."
        required
      />

      <div className="col-span-2 h-[50px]">
        <Botones texto="Enviar" onClick={sendEmail} disabled={!isValid} />
      </div>

      {status === 'success' && (
        <p className="col-span-2 text-green-600 font-inter">✅ ¡Mensaje enviado!</p>
      )}
      {status === 'error' && (
        <p className="col-span-2 text-red-600 font-inter">❌ Verifica los campos e intenta de nuevo.</p>
      )}
    </form>
  );
};