import React from 'react';
import './Footer.css';

export default function Footer(detail) {
  return <div className='footer'>Contact the creator at: {detail.email}</div>;
}