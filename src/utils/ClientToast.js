'use client';

import { showToast } from 'nextjs-toast-notify';

export function showSuccessToast(message) {
  showToast.success(message, {
    duration: 2500,
    progress: false,
    position: 'top-right',
    transition: 'bounceIn',
    icon: '',
    sound: true,
  });
}