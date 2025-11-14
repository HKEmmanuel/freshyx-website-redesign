import PartnerHeroSection from '../sections/partners/HeroSection';
import PartnerCTASection from '../sections/partners/PartnerCTASection';
import TrustedPartnersSection from '../sections/partners/PartnersSection';
import SubscriptionAdvantages from '../sections/partners/SubscriptionSection';

export default function PartnersPage() {
  return (
    <>
      <PartnerHeroSection />
      <TrustedPartnersSection />
      <SubscriptionAdvantages />
      <PartnerCTASection />
    </>
  );
}
