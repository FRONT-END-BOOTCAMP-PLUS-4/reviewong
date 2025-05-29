'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios, { AxiosError } from 'axios';
import SignupForm from '../components/Signup';

export default function SignupContainer() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nickname: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await axios.post('/api/auth/signup', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      router.push('/login?message=회원가입이 완료되었습니다. 로그인해주세요.');
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data.error || '회원가입 중 오류가 발생했습니다.');
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('회원가입 중 오류가 발생했습니다.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <SignupForm
      formData={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      error={error}
    />
  );
}
