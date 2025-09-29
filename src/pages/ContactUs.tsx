import React, { useState } from 'react';
import TelefoneImage from '../assets/telefone.png'; 
import EmailImage from '../assets/email.png';     
import ClockImage from '../assets/relogio.png';


interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const PhoneIcon = (
    <img src={TelefoneImage} alt="Ícone de telefone" className="w-5 h-5 object-contain flex-shrink-0" />
  );

  const MailIcon = (
    <img src={EmailImage} alt="Ícone de email" className="w-5 h-5 object-contain flex-shrink-0" />
  );

  const ClockIcon = (
    <img src={ClockImage} alt="Ícone de relogio" className="w-5 h-5 object-contain flex-shrink-0" />
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados de Contato Enviados (Simulação):", formData);
    setIsSubmitted(true);
  };


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col"> 
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8"> 
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Fale Conosco
          </h1>
          <p className="text-center text-gray-600 mb-10">
            Entre em contato com a equipe de suporte do CareLink.
          </p>

          <div className="flex flex-col lg:flex-row gap-12 bg-white p-8 rounded-xl shadow-2xl">
            
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Envie sua Mensagem</h2>
              
              {isSubmitted ? (
                <div className="p-4 bg-emerald-100 text-emerald-800 rounded-lg">
                  Mensagem enviada com sucesso! Em breve, entraremos em contato.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-150"
                  >
                    Enviar
                  </button>
                </form>
              )}
            </div>

            <div className="lg:w-9/20 bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Canais de Atendimento</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-2 text-gray-700">
                  {PhoneIcon}
                  <div>
                    <span className="font-medium whitespace-nowrap block">Suporte Técnico:</span>
                    (11) 5555-5555
                  </div>
                </div>
                <div className="flex items-start gap-2 text-gray-700">
                  {MailIcon}
                  <div>
                    <span className="font-medium whitespace-nowrap block">Email:</span>
                    suporte@carelink.com.br
                  </div>
                </div>
                <div className="flex items-start gap-2 text-gray-700">
                  {ClockIcon}
                  <div>
                    <span className="font-medium whitespace-nowrap block">Horário de Atendimento:</span>
                    Segunda a Sexta, das 8h às 18h
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>&copy; 2025 HealthTech IMREA. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}