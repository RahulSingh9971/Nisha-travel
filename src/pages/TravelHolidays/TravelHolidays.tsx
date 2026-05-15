import React from 'react';
import TravelHolidaysHero from '../../components/TravelHolidays/TravelHolidaysHero';
import UnforgettableTrip from '../../components/TravelHolidays/UnforgettableTrip';
import CustomizedHolidays from '../../components/TravelHolidays/CustomizedHolidays';
import TravelYourWay from '../../components/TravelHolidays/TravelYourWay';
import TravelFAQ from '../../components/TravelHolidays/TravelFAQ';
import OurAdditionalServices from '../../components/Emigrants/OurAdditionalServices';
import LatestArticles from '../../components/TravelHolidays/LatestArticles';
import ContactSection from '../../components/JobsPage/ContactSection'; // Reusing the global contact block for completeness

const TravelHolidays: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section for Travel and Holidays Page */}
      <TravelHolidaysHero />

      {/* Customized Holiday Packages and Air Ticketing */}
      <CustomizedHolidays />

      {/* Unforgettable Trip & Core Services */}
      <UnforgettableTrip />



      {/* Travel Your Way Section */}
      <TravelYourWay />

      {/* Additional Services reused from Emigrants */}
      <OurAdditionalServices />


      {/* Latest Articles Section */}
      <LatestArticles />


      {/* Frequently Asked Questions */}
      <TravelFAQ />

      {/* Global Contact Footer Form */}
      <ContactSection />
    </main>
  );
};

export default TravelHolidays;
