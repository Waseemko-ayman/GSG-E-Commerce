import React from 'react'
import "./style.css";
import { SUPPLIERS_REGOIN_DATA } from '@/mock/SuppliersRegoin';
import SuppliersregoinCard from '@/components/molecules/SuppliersRegoinCard';

const SuppliersRegoin = () => {
  return (
    <div className='suppliers__regoin'>
      <h2>Suppliers by region</h2>
      <div className="suppliers__card">
        {SUPPLIERS_REGOIN_DATA.map(({ id, src, country, email }) => (
          <SuppliersregoinCard key={id} imageSrc={src} countryName={country} countryEmail={email} />
        ))}
      </div>
    </div>
  )
}

export default SuppliersRegoin;