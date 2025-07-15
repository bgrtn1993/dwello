"use client";

import { useState } from "react";
import Input from "@/components/common/Input";

interface ContactFormProps {
  propertyTitle?: string;
}

export default function ContactForm({ propertyTitle }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(
    propertyTitle
      ? `"${propertyTitle}" ilanı hakkında bilgi almak istiyorum.`
      : "",
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitted(false);

    if (!name || !email || !message) {
      setError("Lütfen tüm gerekli alanları doldurun.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Lütfen geçerli bir e-posta adresi girin.");
      return;
    }

    console.log("Form Gönderildi:", { name, email, phone, message });

    setTimeout(() => {
      setIsSubmitted(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage(
        propertyTitle
          ? `"${propertyTitle}" ilanı hakkında bilgi almak istiyorum.`
          : "",
      );
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {isSubmitted && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Başarılı!</strong>
          <span className="block sm:inline ml-2">
            Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
          </span>
        </div>
      )}

      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Hata!</strong>
          <span className="block sm:inline ml-2">{error}</span>
        </div>
      )}

      <Input
        id="name"
        label="Adınız Soyadınız"
        type="text"
        placeholder="Adınız Soyadınız"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <Input
        id="email"
        label="E-posta Adresiniz"
        type="email"
        placeholder="email@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Input
        id="phone"
        label="Telefon Numaranız (Opsiyonel)"
        type="tel"
        placeholder="5xx xxx xx xx"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <div>
        <label
          htmlFor="message"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Mesajınız <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
          placeholder="Mesajınızı buraya yazın..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-md focus:outline-none focus:shadow-outline w-full transition-colors duration-200"
      >
        Mesaj Gönder
      </button>
    </form>
  );
}
