"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/Icon";
import { siteConfig } from "@/lib/site";

/**
 * Statik export uyumlu iletişim formu.
 * Backend olmadığından form, kullanıcının e-posta istemcisini
 * hazır bir taslakla açar (mailto). Formspree/Cloudflare Turnstile gibi
 * bir servise geçmek için handleSubmit içindeki mailto bloğunu değiştirin.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const company = String(data.get("company") ?? "");
    const subject = String(data.get("subject") ?? "İletişim Talebi");
    const message = String(data.get("message") ?? "");

    const body = [
      `Ad Soyad: ${name}`,
      `E-posta: ${email}`,
      `Firma: ${company}`,
      "",
      message,
    ].join("\n");

    const mailto = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
      `[Viarsoft] ${subject}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Ad Soyad" name="name" required autoComplete="name" />
        <Field
          label="E-posta"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Firma" name="company" autoComplete="organization" />
        <Field label="Konu" name="subject" />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-800">
          Mesajınız <span className="text-accent-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Projeniz veya ihtiyaçlarınız hakkında kısaca bahsedin..."
          className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 shadow-sm transition-colors placeholder:text-navy-400 focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-400/30"
        />
      </div>

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" icon="arrow-right">
          Mesajı Gönder
        </Button>
        {sent && (
          <p className="inline-flex items-center gap-2 text-sm text-navy-600">
            <Icon name="check" className="h-4 w-4 text-green-500" />
            E-posta uygulamanız hazır taslakla açıldı.
          </p>
        )}
      </div>

      <p className="text-xs text-navy-400">
        Form gönderiminde varsayılan e-posta uygulamanız açılır. Dilerseniz
        doğrudan{" "}
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="font-medium text-accent-600 hover:underline"
        >
          {siteConfig.contact.email}
        </a>{" "}
        adresine yazabilirsiniz.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-navy-800">
        {label} {required && <span className="text-accent-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 shadow-sm transition-colors placeholder:text-navy-400 focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-400/30"
      />
    </div>
  );
}
