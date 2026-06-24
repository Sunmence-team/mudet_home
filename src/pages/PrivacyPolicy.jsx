import React, { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col bg-[#F8FAFC]">
      {/* Hero Section */}
      <div className="w-full bg-pryClr py-20 md:py-28 flex justify-center">
        <div className="w-[90%] flex flex-col items-center text-center text-white gap-6">
          <div className="bg-white/20 px-5 py-2 rounded-full">
            <p className="text-sm md:text-base">
              Privacy & Data Protection
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Privacy Policy
          </h1>

          <p className="w-full lg:w-[60%] text-base md:text-lg text-white/90 leading-8">
            We are committed to protecting your privacy and ensuring that your
            personal information is handled responsibly, securely, and in
            accordance with applicable laws.
          </p>

          <p className="text-white/80 text-sm md:text-base">
            Effective Date: [Insert Date]
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full flex justify-center py-12 md:py-20">
        <div className="w-[90%] lg:w-[80%] bg-white rounded-3xl shadow-lg overflow-hidden">
          {/* Top Accent */}
          <div className="h-4 bg-pryClr"></div>

          <div className="p-6 md:p-12 flex flex-col gap-12">
            {/* Introduction */}
            <section className="border-b border-gray-100 pb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-pryClr mb-4">
                1. Introduction
              </h2>

              <div className="space-y-4 text-gray-700 leading-8">
                <p>
                  Welcome to MUDET ("Company," "we," "our," or "us").
                </p>

                <p>
                  MUDET is a wellness and health-focused platform that provides
                  herbal and wellness products while offering members
                  opportunities to participate in referral and incentive
                  programs.
                </p>

                <p>
                  We are committed to protecting your privacy and ensuring that
                  your personal information is handled responsibly and securely.
                  This Privacy Policy explains how we collect, use, store,
                  disclose, and protect your information when you use our
                  website, mobile applications, products, services, and
                  compensation programs.
                </p>

                <p>
                  By accessing or using our services, you agree to the terms of
                  this Privacy Policy.
                </p>
              </div>
            </section>

            {/* Information We Collect */}
            <section className="border-b border-gray-100 pb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-pryClr mb-8">
                2. Information We Collect
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-gray-100 rounded-2xl shadow-sm p-6">
                  <h3 className="font-bold text-secClr text-xl mb-4">
                    Personal Information
                  </h3>

                  <ul className="space-y-2 text-gray-700">
                    <li>• Full name</li>
                    <li>• Email address</li>
                    <li>• Phone number</li>
                    <li>• Residential address</li>
                    <li>• Date of birth</li>
                    <li>• Username and account credentials</li>
                    <li>• Bank account or payment details</li>
                  </ul>
                </div>

                <div className="border border-gray-100 rounded-2xl shadow-sm p-6">
                  <h3 className="font-bold text-secClr text-xl mb-4">
                    Business & Referral Information
                  </h3>

                  <ul className="space-y-2 text-gray-700">
                    <li>• Sponsor or referrer information</li>
                    <li>• Referral network information</li>
                    <li>• Team structure information</li>
                    <li>• Sales and commission records</li>
                    <li>• Rank and qualification data</li>
                    <li>• Incentive and bonus records</li>
                  </ul>
                </div>

                <div className="border border-gray-100 rounded-2xl shadow-sm p-6">
                  <h3 className="font-bold text-secClr text-xl mb-4">
                    Transaction Information
                  </h3>

                  <ul className="space-y-2 text-gray-700">
                    <li>• Product purchase history</li>
                    <li>• Subscription records</li>
                    <li>• Repurchase records</li>
                    <li>• Payment records</li>
                    <li>• Order and delivery information</li>
                  </ul>
                </div>

                <div className="border border-gray-100 rounded-2xl shadow-sm p-6">
                  <h3 className="font-bold text-secClr text-xl mb-4">
                    Technical Information
                  </h3>

                  <ul className="space-y-2 text-gray-700">
                    <li>• IP address</li>
                    <li>• Device information</li>
                    <li>• Browser type</li>
                    <li>• Operating system</li>
                    <li>• Pages visited</li>
                    <li>• Login activity</li>
                    <li>• Cookies and tracking information</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="border-b border-gray-100 pb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-pryClr mb-4">
                3. How We Use Your Information
              </h2>

              <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                <li>• Create and manage your account</li>
                <li>• Process product orders</li>
                <li>• Deliver products and services</li>
                <li>• Process commissions and bonuses</li>
                <li>• Track referrals and team structures</li>
                <li>• Verify compensation plan eligibility</li>
                <li>• Provide customer support</li>
                <li>• Improve products and services</li>
                <li>• Communicate promotions and updates</li>
                <li>• Detect fraud and unauthorized activities</li>
                <li>• Comply with legal obligations</li>
              </ul>
            </section>

            {/* Referral Activities */}
            <section className="border-b border-gray-100 pb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-pryClr mb-4">
                4. Referral and Network Marketing Activities
              </h2>

              <p className="text-gray-700 leading-8 mb-4">
                MUDET operates referral and incentive-based programs.
              </p>

              <p className="text-gray-700 leading-8 mb-4">
                To facilitate these programs, certain information may be visible
                to sponsors, uplines, or authorized administrators.
              </p>

              <ul className="space-y-2 text-gray-700">
                <li>• Member names</li>
                <li>• Referral relationships</li>
                <li>• Team performance metrics</li>
                <li>• Qualification status</li>
                <li>• Commission-related information</li>
              </ul>
            </section>

            {/* Sharing Information */}
            <section className="border-b border-gray-100 pb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-pryClr mb-6">
                5. Sharing of Information
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-pryClr/5 border border-pryClr/10 rounded-2xl p-6">
                  <h3 className="font-bold text-pryClr mb-3">
                    Service Providers
                  </h3>

                  <ul className="space-y-2 text-gray-700">
                    <li>• Payment processing</li>
                    <li>• Hosting services</li>
                    <li>• Cloud storage</li>
                    <li>• Email communications</li>
                    <li>• Analytics services</li>
                    <li>• Product delivery</li>
                  </ul>
                </div>

                <div className="bg-secClr/5 border border-secClr/10 rounded-2xl p-6">
                  <h3 className="font-bold text-secClr mb-3">
                    Legal Authorities
                  </h3>

                  <ul className="space-y-2 text-gray-700">
                    <li>• Legal compliance</li>
                    <li>• Lawful requests</li>
                    <li>• Rights protection</li>
                    <li>• Fraud investigations</li>
                  </ul>
                </div>

                <div className="bg-pryClr/5 border border-pryClr/10 rounded-2xl p-6">
                  <h3 className="font-bold text-pryClr mb-3">
                    Business Transfers
                  </h3>

                  <p className="text-gray-700">
                    Information may be transferred during mergers,
                    acquisitions, restructuring, or asset sales.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section className="border-b border-gray-100 pb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-pryClr mb-4">
                7. Data Security
              </h2>

              <p className="text-gray-700 leading-8">
                We implement reasonable administrative, technical, and physical
                safeguards designed to protect personal information from
                unauthorized access, disclosure, alteration, or destruction.
              </p>

              <p className="text-gray-700 leading-8 mt-4">
                While we strive to protect your information, no method of
                electronic transmission or storage is completely secure.
              </p>
            </section>

            {/* Data Retention */}
            <section className="border-b border-gray-100 pb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-pryClr mb-4">
                8. Data Retention
              </h2>

              <ul className="space-y-2 text-gray-700">
                <li>• Provide our services</li>
                <li>• Maintain business records</li>
                <li>• Process commissions and transactions</li>
                <li>• Resolve disputes</li>
                <li>• Comply with legal requirements</li>
              </ul>
            </section>

            {/* Rights */}
            <section className="border-b border-gray-100 pb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-pryClr mb-4">
                9. Your Rights
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Access your personal information",
                  "Correct inaccurate information",
                  "Request deletion of information",
                  "Restrict certain processing activities",
                  "Withdraw consent",
                  "Request a copy of your data",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-100 rounded-xl p-4"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* Children */}
            <section className="border-b border-gray-100 pb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-pryClr mb-4">
                10. Children's Privacy
              </h2>

              <p className="text-gray-700 leading-8">
                MUDET's services are intended for individuals who are legally
                eligible to enter into agreements under applicable laws.
              </p>

              <p className="text-gray-700 leading-8 mt-4">
                We do not knowingly collect personal information from children
                without appropriate authorization where required by law.
              </p>
            </section>

            {/* Changes */}
            <section className="border-b border-gray-100 pb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-pryClr mb-4">
                13. Changes to This Privacy Policy
              </h2>

              <p className="text-gray-700 leading-8">
                We may update this Privacy Policy from time to time.
              </p>

              <p className="text-gray-700 leading-8 mt-4">
                Changes become effective upon publication of the updated
                version. Continued use of our services constitutes acceptance of
                the revised policy.
              </p>
            </section>

            {/* Contact */}
            <section>
              <div className="bg-pryClr rounded-3xl p-8 md:p-10 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  14. Contact Us
                </h2>

                <div className="space-y-3 text-white/90">
                  <p>Email: [Insert Email Address]</p>
                  <p>Phone: [Insert Phone Number]</p>
                  <p>Address: [Insert Business Address]</p>
                  <p>Website: [Insert Website URL]</p>
                </div>
              </div>

              <div className="mt-8 bg-secClr text-white rounded-2xl p-6 text-center">
                <p className="leading-8">
                  By using MUDET's services, products, websites, applications,
                  and referral programs, you acknowledge that you have read and
                  understood this Privacy Policy.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;