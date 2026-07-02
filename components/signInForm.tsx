"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // TODO: wire up to real auth
    setTimeout(() => setSubmitting(false), 900);
  }

  return (
    <>
      <div className="auth-head">
        <h1>Welcome back</h1>
        <p>Sign in to see your latest matches.</p>
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
              placeholder="••••••••"
              autoComplete="current-password"
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

        <div className="auth-row">
          <label className="auth-checkbox">
            <input type="checkbox" name="remember" defaultChecked />
            <span>Remember me</span>
          </label>
          <Link href="/forgot-password" className="auth-link">
            Forgot password?
          </Link>
        </div>

        <button type="submit" className="btn btn-primary auth-submit" disabled={submitting}>
          {submitting ? "Signing in…" : "Sign in →"}
        </button>
      </form>

      <p className="auth-footnote">
        New to Aremu?{" "}
        <Link href="/signUp" className="auth-link">
          Create an account
        </Link>
      </p>
    </>
  );
}