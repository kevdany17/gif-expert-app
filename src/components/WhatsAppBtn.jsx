import whatsAppImage from '../../assets/social.png';

export const WhatsAppBtn = ({ url }) => {
  return (
    <a href={`https://api.whatsapp.com/send?text=${url}`} target="_blank">
      <img src={whatsAppImage} />
    </a>
  );
};
