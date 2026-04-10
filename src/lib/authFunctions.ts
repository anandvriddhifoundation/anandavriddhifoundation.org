'use server';

import { cookies } from 'next/headers';

export const loginUser = async (username: string) => {
  cookies().set({
    name: 'username',
    value: username,
    httpOnly: false,
  });
};

export const logoutUser = async (username: string) => {
  cookies().delete('username');
};
