"use client"
import { SUPPLIERS_REGOIN_DATA } from '@/mock/SuppliersRegoin';
import SuppliersregoinCard from '@/components/molecules/SuppliersRegoinCard';
import { StyledGrid } from '@/style/common';
import { StyledSuppliersRegoin } from './style';

const SuppliersRegoin = () => {
  return (
    <StyledSuppliersRegoin>
      <h2>Suppliers by region</h2>
      <StyledGrid gap="20px">
        {SUPPLIERS_REGOIN_DATA.map(({ id, src, country, email }) => (
          <SuppliersregoinCard key={id} imageSrc={src} countryName={country} countryEmail={email} />
        ))}
      </StyledGrid>
    </StyledSuppliersRegoin>
  )
}

export default SuppliersRegoin;