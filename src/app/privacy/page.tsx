import { ShieldAlert } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="flex items-center mb-8">
        <ShieldAlert className="h-10 w-10 text-primary mr-4" />
        <h1 className="font-headline text-4xl font-bold">Privacy Policy</h1>
      </div>
      
      <div className="prose prose-lg max-w-none text-foreground/90">
        <p className="lead">
          Your privacy is important to us. This Privacy Policy explains how VoteChain ("we," "us," or "our") collects, uses, and discloses information about you when you access or use our decentralized voting platform, website (votechain.com), and related services (collectively, the "Service").
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          Due to the decentralized nature of our platform, we aim to minimize the personal data we collect. However, some information may be collected or processed:
        </p>
        <ul>
          <li><strong>Wallet Information:</strong> When you connect your digital wallet to our Service, we receive your public wallet address. We do not collect or store your private keys. Transactions you initiate through the Service are recorded on the relevant blockchain and are publicly accessible.</li>
          <li><strong>User Registration Data (if applicable):</strong> If you choose to register an account beyond simple wallet connection, we may collect information you provide, such as a username or email address (if this feature is implemented).</li>
          <li><strong>Usage Information:</strong> We may collect information about your interactions with the Service, such as IP address, browser type, operating system, pages visited, and timestamps. This is typically pseudonymous and used for analytics and service improvement.</li>
          <li><strong>Cookies and Similar Technologies:</strong> We may use cookies or similar technologies to enhance your experience, remember your preferences, and gather usage data.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We may use the information we collect for various purposes, including to:</p>
        <ul>
          <li>Provide, maintain, and improve our Service.</li>
          <li>Facilitate your participation in polls and voting processes.</li>
          <li>Communicate with you, such as sending service updates or responding to inquiries (if contact information is provided).</li>
          <li>Monitor and analyze trends, usage, and activities in connection with our Service.</li>
          <li>Prevent fraudulent activity and enhance the security of our Service.</li>
          <li>Comply with legal obligations.</li>
        </ul>

        <h2>3. How We Share Your Information</h2>
        <p>
          We do not sell your personal information. We may share information as follows:
        </p>
        <ul>
          <li><strong>Blockchain Transactions:</strong> Your public wallet address and transaction details (e.g., votes cast) are, by nature, recorded on the public blockchain and are visible to anyone.</li>
          <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf, such as hosting, analytics, or security services. These providers are obligated to protect your information.</li>
          <li><strong>Legal Requirements:</strong> We may disclose information if required by law, subpoena, or other legal process, or if we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.</li>
          <li><strong>With Your Consent:</strong> We may share information with your consent or at your direction.</li>
        </ul>
        
        <h2>4. Data Security</h2>
        <p>
          We implement reasonable measures to help protect your information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no internet or email transmission is ever fully secure or error-free.
        </p>

        <h2>5. Your Choices</h2>
        <p>
          You can typically manage cookie preferences through your browser settings. If you have registered an account, you may be able to update your information through account settings. As blockchain transactions are public and immutable, information recorded on-chain cannot be deleted or altered by us.
        </p>

        <h2>6. Children's Privacy</h2>
        <p>
          Our Service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18.
        </p>

        <h2>7. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the bottom of this policy and, in some cases, we may provide you with additional notice (such as adding a statement to our homepage or sending you a notification).
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at privacy@votechain.com.
        </p>

        <p><em>Last updated: {new Date().toLocaleDateString()}</em></p>
      </div>
    </div>
  );
}
