import { createFileRoute } from "@tanstack/react-router";
import { AnimatedSection } from "../components/AnimatedSection";
import { FAQSection } from "../components/FAQSection";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — 13L Game | Rules & Conditions" },
      { name: "description", content: "Read 13L Game's terms of service. Understand the rules, conditions, and guidelines for using the 13L Game platform." },
      { property: "og:title", content: "Terms of Service — 13L Game" },
      { property: "og:description", content: "Terms and conditions for using 13L Game platform." },
      { name: "keywords", content: "13l game terms, 13l game conditions, 13l game rules" },
    ],
  }),
  component: TermsPage,
});

const sections = [
  { title: "1. Acceptance of Terms", content: "By accessing, browsing, or using 13L Game (accessible at 13l.video), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service in their entirety. If you do not agree with any part of these terms, you must immediately cease using the 13L Game platform. These terms constitute a legally binding agreement between you and 13L Game. They apply to all users of the platform, including but not limited to visitors who browse without an account, registered players who login to 13L Game, VIP members, and anyone who interacts with our services, content, or community channels in any capacity. We reserve the right to deny access to anyone who does not comply with these terms." },
  { title: "2. Eligibility", content: "To use 13L Game, you must be at least 18 years of age or the legal age of majority in your jurisdiction, whichever is greater. By registering on 13L Game and completing the signup process, you confirm and warrant that you meet this age requirement. You represent that you have the legal capacity to enter into a binding agreement. Users are solely responsible for ensuring that their use of 13L Game complies with all applicable local, state, national, and international laws and regulations regarding online gaming. 13L Game reserves the right to request proof of age and identity at any time, and accounts found to belong to underage individuals will be terminated immediately with forfeiture of any balance." },
  { title: "3. Account Registration and Security", content: "To access the full range of 13L Game features, you must create an account through the 13L Game signup process using a valid mobile phone number. You are solely responsible for maintaining the confidentiality of your login credentials — your mobile number and password — and for all activities that occur under your account. Each individual may only maintain one 13L Game account. Creating or operating multiple accounts is strictly prohibited and may result in suspension or permanent termination of all associated accounts, along with forfeiture of any balances. You must notify 13L Game immediately if you suspect unauthorized access to your account. 13L Game is not liable for any losses resulting from unauthorized use of your account due to your failure to maintain credential security. Account credentials must not be shared with, transferred to, or sold to any third party." },
  { title: "4. Deposits, Withdrawals, and Financial Terms", content: "13L Game processes all deposits and withdrawals through secure, PCI-DSS compliant payment channels. Deposits are credited to your account balance instantly upon successful transaction completion. Minimum deposit and withdrawal amounts apply as displayed on the platform and may vary by payment method. Withdrawal requests are processed promptly, typically within minutes. 13L Game reserves the right to request identity verification documents before processing withdrawals, particularly for first-time withdrawals or unusually large amounts, as part of our anti-fraud and anti-money laundering procedures. All financial transactions are final once completed. 13L Game does not charge hidden fees on standard transactions, though your payment provider may apply their own charges. In cases of suspected fraud, money laundering, or violation of these terms, 13L Game reserves the right to freeze accounts and withhold funds pending investigation." },
  { title: "5. Gift Codes, Bonuses, and Promotions", content: "13L Game gift codes, bonuses, and promotional offers are subject to specific terms and conditions that accompany each offer. General gift code terms include: each 13lgame gift code can typically be redeemed once per account; codes may have expiration dates and maximum redemption limits; bonus balances received from 13L code game free gift codes may be subject to wagering requirements before withdrawal; 13L Game reserves the right to modify, suspend, or discontinue any gift code program or promotional offer at any time without prior notice; abuse of the gift code system, including creating multiple accounts to redeem the same code, sharing codes through unauthorized channels, or using automated tools to redeem codes, will result in account termination and forfeiture of all balances. Free gift codes are intended as a goodwill gesture to the community and should be treated as such." },
  { title: "6. Fair Play and Game Integrity", content: "All games on 13L Game use certified Random Number Generators (RNG) and provably fair algorithms provided by reputable, audited game developers including JILI, SPRIBE, JDB, and TB Chess. Any attempt to manipulate game outcomes, exploit software bugs or glitches, use automated bots or scripts, employ prediction software that interfaces with our systems, collude with other players to gain unfair advantages, or reverse-engineer our game algorithms is strictly prohibited. Violations of fair play policies will result in immediate account termination, forfeiture of all balances, and potential legal action. 13L Game employs advanced fraud detection systems that continuously monitor gameplay patterns for suspicious activity." },
  { title: "7. User Conduct", content: "Users of 13L Game agree to conduct themselves responsibly and in accordance with these terms. Prohibited conduct includes: using the platform for any illegal, fraudulent, or unauthorized purpose; harassing, threatening, or abusing other players or 13L Game staff; attempting to gain unauthorized access to other user accounts, our systems, or confidential data; distributing malware, spam, or harmful content through any 13L Game channel; sharing, selling, or purchasing 13L Game accounts or in-platform assets; impersonating 13L Game staff, moderators, or other players; sharing gift codes through unauthorized third-party websites or channels that misrepresent their source; creating or operating multiple accounts; and exploiting any feature of 13L Game in a manner not intended by the platform." },
  { title: "8. Intellectual Property", content: "All content on 13L Game, including but not limited to the platform name, logo, visual design, game interfaces, text content, graphics, software, algorithms, and marketing materials, is the intellectual property of 13L Game and its respective licensors. This content is protected by copyright, trademark, and other intellectual property laws. Unauthorized use, reproduction, modification, distribution, or creation of derivative works based on 13L Game content is strictly prohibited without prior written permission. The game content provided by third-party developers (JILI, SPRIBE, JDB, etc.) remains the property of those respective companies and is licensed for use on the 13L Game platform." },
  { title: "9. Limitation of Liability", content: "13L Game is provided on an 'as is' and 'as available' basis without warranties of any kind, whether express or implied. To the fullest extent permitted by applicable law, 13L Game disclaims all warranties, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. 13L Game shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of the platform, including but not limited to losses from gaming activity, technical failures, service interruptions, data loss, or unauthorized access to your account. Players acknowledge that gaming involves inherent financial risk and are solely responsible for their gaming decisions and outcomes. Total liability of 13L Game shall not exceed the balance in your account at the time of the claim." },
  { title: "10. Account Suspension and Termination", content: "13L Game reserves the right to suspend or terminate any account, at any time, with or without notice, for any reason including but not limited to: violation of these Terms of Service, suspected fraudulent activity, operation of multiple accounts, failure to provide requested verification documents, prolonged account inactivity, or at the discretion of 13L Game management. Users may also choose to voluntarily close their 13L Game account at any time by contacting customer support. Upon account closure, any remaining balance will be handled according to the applicable withdrawal terms. Provisions of these terms that by their nature should survive termination will remain in effect." },
  { title: "11. Dispute Resolution", content: "Any disputes arising from or related to these Terms of Service or your use of 13L Game shall first be addressed through our customer support channels. We are committed to resolving disputes fairly and promptly. If a resolution cannot be reached through customer support, disputes will be governed by applicable Indian law and subject to the jurisdiction of appropriate courts. Users agree to attempt informal resolution before pursuing formal legal proceedings. Nothing in this clause limits your statutory rights as a consumer." },
  { title: "12. Changes to Terms", content: "13L Game may update, modify, or amend these Terms of Service at any time to reflect changes in our services, applicable laws, or business practices. The updated terms will include a new 'Last Updated' date and will be effective immediately upon posting. We will make reasonable efforts to notify users of significant changes through the platform, SMS, or our official Telegram channels. Continued use of 13L Game after the posting of revised terms constitutes your acceptance of and agreement to the updated Terms of Service. We encourage all users to review these terms periodically." },
  { title: "13. Contact Information", content: "For questions, concerns, or feedback about these Terms of Service or any aspect of the 13L Game platform, please contact us through our official channels. In-app live chat is available 24/7 for immediate assistance. Our official Telegram community provides community-based support and updates. For business inquiries, reach the Veeranjan Solution team via Telegram at t.me/veeranjan_solutions. We aim to respond to all inquiries within 24-48 hours." },
];

const termsFaqs = [
  { question: "Can I have multiple 13L Game accounts?", answer: "No. Each individual is allowed only one 13L Game account. Creating or operating multiple accounts is strictly prohibited and will result in suspension or permanent termination of all associated accounts, along with forfeiture of any balances." },
  { question: "What happens if I violate the Terms of Service?", answer: "Violations may result in warnings, temporary suspension, permanent account termination, forfeiture of account balance, and potential legal action depending on the severity. 13L Game takes violations seriously to maintain a fair and safe environment for all players." },
  { question: "Can 13L Game change these terms?", answer: "Yes, 13L Game may update these terms at any time. Users will be notified of significant changes through the platform and official channels. Continued use after changes constitutes acceptance of the updated terms." },
  { question: "How do I close my 13L Game account?", answer: "You can request account closure by contacting customer support through the in-app chat or official Telegram channels. Any remaining balance will be handled according to applicable withdrawal terms before the account is closed." },
];

function TermsPage() {
  return (
    <div className="pt-20 overflow-hidden">
      <section className="py-16 px-4" style={{ background: "var(--gradient-hero)" }}>
        <AnimatedSection className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">Terms of Service</h1>
          <p className="mt-3 text-muted-foreground">Last updated: April 2026</p>
          <div className="section-divider mt-4" />
        </AnimatedSection>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-3xl space-y-8">
          {sections.map((section, i) => (
            <AnimatedSection key={section.title} delay={i * 0.05}>
              <div className="gaming-card">
                <h2 className="text-xl font-bold text-foreground mb-3">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <FAQSection title="Terms of Service — FAQ" subtitle="Quick answers about 13L Game's terms, rules, and policies." faqs={termsFaqs} />
    </div>
  );
}
