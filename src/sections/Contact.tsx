import React, { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";
import layoutStyles from "../styles/layout.module.css";
import styles from "./Contact.module.css";

export const Contact: React.FC = () => {
  const { language } = useLanguage();

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const [files, setFiles] = useState<File[]>([]);

  const whatsappNumber = "994558341378";

  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/gif",
    "video/mp4",
    "video/webm",
    "video/quicktime",
    "audio/mpeg",
    "audio/wav",
    "audio/mp4",
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/zip",
  ];

  const maxFileSize = 25 * 1024 * 1024;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);

    const validFiles: File[] = [];

    for (const file of selectedFiles) {
      if (!allowedTypes.includes(file.type)) {
        alert(
          language === "az"
            ? `${file.name} fayl tipi dəstəklənmir.`
            : `${file.name} file type is not supported.`
        );
        continue;
      }

      if (file.size > maxFileSize) {
        alert(
          language === "az"
            ? `${file.name} 25 MB-dan böyükdür.`
            : `${file.name} is larger than 25 MB.`
        );
        continue;
      }

      validFiles.push(file);
    }

    setFiles((currentFiles) => [...currentFiles, ...validFiles]);

    event.target.value = "";
  };

  const removeFile = (index: number) => {
    setFiles((currentFiles) =>
      currentFiles.filter((_, fileIndex) => fileIndex !== index)
    );
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(0)} KB`;
    }

    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    files.forEach((file) => {
      formData.append("attachments", file);
    });

    try {
      const response = await fetch("https://formspree.io/f/mvkowwyl", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        setFiles([]);
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className={`${styles.contact} ${layoutStyles.section}`}
    >
      <div className={layoutStyles.container}>
        <div className={styles.heading}>
          <span className={styles.number}>05</span>

          <div>
            <p className={styles.eyebrow}>
              {language === "az" ? "Əlaqə" : "Contact"}
            </p>

            <h2>
              {language === "az"
                ? "Bir layihə üzərində işləyirsiniz?"
                : "Have a project in mind?"}
            </h2>

            <p className={styles.description}>
              {language === "az"
                ? "Yeni layihələr, əməkdaşlıq və frontend development imkanları haqqında danışmaqdan məmnun olaram."
                : "I’m open to discussing new projects, collaborations and frontend development opportunities."}
            </p>
          </div>
        </div>

        <div className={styles.contactGrid}>
          <form
            className={styles.form}
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className={styles.field}>
              <label htmlFor="name">
                {language === "az" ? "Adınız" : "Your name"}
              </label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder={
                  language === "az" ? "Adınızı daxil edin" : "Enter your name"
                }
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">
                {language === "az" ? "Email" : "Email"}
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="subject">
                {language === "az" ? "Mövzu" : "Subject"}
              </label>

              <input
                id="subject"
                type="text"
                name="subject"
                placeholder={
                  language === "az"
                    ? "Müraciətinizin mövzusu"
                    : "What is this about?"
                }
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message">
                {language === "az" ? "Mesajınız" : "Your message"}
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder={
                  language === "az"
                    ? "Layihəniz haqqında danışın..."
                    : "Tell me about your project..."
                }
                required
              />
            </div>

            <div className={styles.attachment}>
              <label htmlFor="attachments" className={styles.fileLabel}>
                <span className={styles.fileIcon}>+</span>

                <span>
                  {language === "az"
                    ? "Fayl əlavə et"
                    : "Attach files"}
                </span>

                <small>
                  JPG, PNG, PDF, DOCX, MP4, MP3 və s. · Max 25 MB
                </small>
              </label>

              <input
                id="attachments"
                type="file"
                multiple
                onChange={handleFileChange}
                accept=".jpg,.jpeg,.png,.webp,.gif,.mp4,.webm,.mov,.mp3,.wav,.m4a,.pdf,.doc,.docx,.xls,.xlsx,.zip"
              />

              {files.length > 0 && (
                <div className={styles.fileList}>
                  {files.map((file, index) => (
                    <div className={styles.fileItem} key={`${file.name}-${index}`}>
                      <div>
                        <strong>{file.name}</strong>
                        <span>{formatFileSize(file.size)}</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        aria-label={
                          language === "az"
                            ? `${file.name} faylını sil`
                            : `Remove ${file.name}`
                        }
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={status === "sending"}
            >
              {status === "sending"
                ? language === "az"
                  ? "Göndərilir..."
                  : "Sending..."
                : language === "az"
                  ? "Mesajı göndər"
                  : "Send message"}

              {status !== "sending" && <span>↗</span>}
            </button>

            {status === "success" && (
              <p className={styles.successMessage}>
                ✓{" "}
                {language === "az"
                  ? "Mesajınız uğurla göndərildi."
                  : "Your message has been sent successfully."}
              </p>
            )}

            {status === "error" && (
              <p className={styles.errorMessage}>
                {language === "az"
                  ? "Mesaj göndərilmədi. Zəhmət olmasa yenidən cəhd edin."
                  : "Something went wrong. Please try again."}
              </p>
            )}
          </form>

          <div className={styles.links}>
            <a href="mailto:humbeteliqurbanov@gmail.com">
              <span>Email</span>
              <strong>humbeteliqurbanov@gmail.com</strong>
              <span>↗</span>
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>WhatsApp</span>
              <strong>
                {language === "az" ? "Mesaj göndər" : "Message me"}
              </strong>
              <span>↗</span>
            </a>

            <a
              href="https://github.com/humbeteli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
              <strong>github.com/humbeteli</strong>
              <span>↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/humbeteli-qurbanov-805999361/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LinkedIn</span>
              <strong>Humbeteli Qurbanov</strong>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};