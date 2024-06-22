import { useNavigate } from 'react-router-dom';
import { PPContainer, PPGoBackSvg, PPTitleContainer, PPTitleWrapper, PPContent } from './styles';
import GoBackSvg from '@app/assets/GoBackSvg.svg';
import { ROUTE__PROFILE } from '../../router/constants';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <PPContainer>
      <PPTitleContainer>
        <PPGoBackSvg src={GoBackSvg} onClick={() => navigate(`${ROUTE__PROFILE}`)} />
        <PPTitleWrapper>Privacy Policy</PPTitleWrapper>
      </PPTitleContainer>
      <PPContent>
        <p>Effective Date: 22.06.2024</p>

        <h2>Introduction</h2>
        <p>
          Welcome to Chatly. Your privacy is important to us, and we are committed to protecting
          your personal information. This privacy policy explains what information we collect, how
          we use it, and the steps we take to ensure your information is safe.
        </p>

        <h2>Information We Collect</h2>
        <p>
          When you use Chatly, we collect information to provide and improve our services. This
          includes information you give us directly, such as your name, email address, phone number,
          and profile picture when you create an account. We also collect information you provide
          through your messages, including text, images, and other media files. Additionally, we
          gather information about your use of our services, such as your interactions with other
          users, your activity status, and your preferences.
        </p>
        <p>
          We automatically collect certain information when you use Chatly. This includes device
          information, such as your hardware model, operating system, and device identifiers. We
          collect log information, including your IP address, browser type, and the pages you visit.
          We also gather location information to provide location-based services if you enable
          location sharing.
        </p>

        <h2>How We Use Information</h2>
        <p>
          We use the information we collect to provide, maintain, and improve our services. This
          includes using your information to create and manage your account, facilitate
          communication with other users, and personalize your experience. We use your contact
          information to send you updates, security alerts, and support messages.
        </p>
        <p>
          We analyze the information we collect to understand how our services are used and to
          improve our features. This helps us develop new services and enhance existing ones. We
          also use your information to provide personalized content and ads based on your activity
          and preferences.
        </p>

        <h2>Information Sharing</h2>
        <p>
          We do not share your personal information with companies, organizations, or individuals
          outside of Chatly except in certain circumstances. We may share information with your
          consent, such as when you use third-party services that integrate with Chatly. We also
          share information with service providers who perform services on our behalf, such as
          hosting, analytics, and customer support.
        </p>
        <p>
          We may disclose your information if required by law or in response to valid legal
          requests. This includes sharing information with government agencies and law enforcement
          to comply with legal obligations and protect our rights and the safety of our users.
        </p>

        <h2>Security</h2>
        <p>
          We take the security of your information seriously and implement various measures to
          protect it. We use encryption to protect data transmitted to and from our servers. We also
          employ access controls, authentication mechanisms, and regular security audits to
          safeguard your information. Despite our efforts, no security measures are perfect, and we
          cannot guarantee the absolute security of your data.
        </p>

        <h2>Changes</h2>
        <p>
          Our Privacy Policy may change from time to time. We will post any privacy policy changes
          on this page.
        </p>
      </PPContent>
    </PPContainer>
  );
};

export default PrivacyPolicy;
