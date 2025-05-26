'use client';

import { useState } from 'react';
import { useLogin } from '@/hooks/useLogin';
import LoginForm from '@/app/login/components/LoginForm';

export default function LoginContainer() {
  const { login, socialLogin, isLoading, error } = useLogin();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <LoginForm
      formData={formData}
      isLoading={isLoading}
      error={error}
      onSubmit={handleSubmit}
      onChange={handleChange}
      onSocialLogin={socialLogin}
    />
  );
}
