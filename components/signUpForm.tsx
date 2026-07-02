"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { FileText, Paperclip } from "lucide-react";

type Intent = "seeker" | "hiring";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [intent, setIntent] = useState<Intent>("seeker");
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : null);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // TODO: wire up to real auth + file upload
    setTimeout(() => setSubmitting(false), 900);
  }

  return (
    <>
      <div className="auth-head">
        <h1>Create your account</h1>
        <p>Get matched to roles in minutes.</p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <label className="auth-field">
          <span>Phone number</span>
          <div className="auth-input-wrap auth-phone-wrap">
            <span className="auth-phone-prefix">+234</span>
            <input
              type="tel"
              name="phone"
              placeholder="801 234 5678"
              inputMode="numeric"
              autoComplete="tel"
              required
            />
          </div>
        </label>

        <label className="auth-field">
          <span>Password</span>
          <div className="auth-input-wrap">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="At least 8 characters"
              autoComplete="new-password"
              minLength={8}
              required
            />
            <button
              type="button"
              className="auth-input-toggle"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </label>

        <label className="auth-field">
          <span>I&rsquo;m on Aremu to&hellip;</span>
          <div className="auth-select-wrap">
            <select
              name="intent"
              value={intent}
              onChange={(e) => setIntent(e.target.value as Intent)}
              required
            >
              <option value="seeker">Look for a job</option>
              <option value="hiring">Hire talent</option>
            </select>
          </div>
        </label>

        {intent === "seeker" && (
          <label className="auth-field">
            <span>CV / Resume</span>
            <div
              className={`auth-file-drop ${fileName ? "has-file" : ""}`}
              onClick={() => fileInputRef.current?.click()}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  fileInputRef.current?.click();
              }}
            >
              <input
                ref={fileInputRef}
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="auth-file-input"
              />
              {fileName ? (
                <span className="auth-file-name">
                  <FileText
                    className="inline-icon"
                    size={16}
                    aria-hidden="true"
                  />{" "}
                  {fileName}
                </span>
              ) : (
                <span className="auth-file-placeholder">
                  <Paperclip
                    className="inline-icon"
                    size={16}
                    aria-hidden="true"
                  />{" "}
                  Click to upload — PDF or Word, up to 5MB
                </span>
              )}
            </div>
          </label>
        )}

        <button
          type="submit"
          className="btn btn-primary auth-submit"
          disabled={submitting}
        >
          {submitting ? "Creating account…" : "Create account →"}
        </button>
      </form>

      <p className="auth-footnote">
        Already have an account?{" "}
        <Link href="/signIn" className="auth-link">
          Sign in
        </Link>
      </p>
    </>
  );
}
